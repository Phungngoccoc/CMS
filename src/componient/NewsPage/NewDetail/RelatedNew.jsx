import React, { useEffect, useState } from 'react';
import '../../Style/RelatedNew.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import { getDataNews } from '../../../features/newsSlice';

const RelatedNew = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const { dataNews, loading, error } = useSelector((state) => state.dataNews);
    const [dataNewsPage, setDataNewsPage] = useState([]);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        navigate(`${path.NEWS}/${encodeURIComponent(id)}`);
    };

    const SwitchPage = (path) => {
        navigate(path);
    };

    useEffect(() => {
        if (!dataNews) {
            dispatch(getDataNews());
        }
    }, [dispatch, dataNews]);

    useEffect(() => {
        if (dataNews !== null) {
            const blocksToUpdate = dataNews.data.filter(
                (item) => item.status === STATUS.PUBLISH && item?.id !== Number(props.idSkip),
            );
            setDataNewsPage(blocksToUpdate);
        }
    }, [dataNews, languageApp, props.idSkip]);

    return (
        <>
            <div className="related-news-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-12 col-title d-flex justify-content-md-start justify-content-center align-items-center mb-3">
                            <h3>{languageApp === LANGUAGES.EN ? 'Related News' : 'Tin tức liên quan'}</h3>
                        </div>
                        <div className="col-md-4 col-12 d-md-block d-none">
                            <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-3">
                                <span className="button" onClick={() => SwitchPage(path.NEWS)}>
                                    {languageApp === 'en' ? 'View all post' : 'Xem thêm'}{' '}
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </div>
                        </div>
                        {dataNewsPage.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>
                                    {languageApp === 'en' ? 'No related news available' : 'Không có tin tức liên quan'}
                                </p>
                            </div>
                        ) : (
                            dataNewsPage.slice(0, 4).map((block, index) =>
                                block.translations.map((ele, z) => {
                                    if (ele.languages_code === languageApp) {
                                        return (
                                            <div className="col-lg-3 col-sm-6 col-12 child-item" key={`${index}-${z}`}>
                                                <div className="content">
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${block?.image}`}
                                                        alt={ele.content_main}
                                                        onClick={() => handleClick(block?.id)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <div className="mt-4">
                                                        <h5 onClick={() => handleClick(block?.id)}>
                                                            {ele?.content_main}
                                                        </h5>
                                                        <p>{ele?.content}</p>
                                                        <span className="date-upload">
                                                            {new Date(
                                                                block?.time_post ||
                                                                    block?.date_created ||
                                                                    block?.date_updated ||
                                                                    Date.now(),
                                                            ).toLocaleDateString('vi-VN')}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }),
                            )
                        )}
                        <div className="col-12 d-md-none d-block">
                            <div className="d-flex justify-content-md-end justify-content-end align-items-center mb-3">
                                <span className="button" onClick={() => SwitchPage(path.NEWS)}>
                                    {languageApp === 'en' ? 'View all post' : 'Xem thêm'}{' '}
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
});

export default RelatedNew;
