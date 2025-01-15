import React, { useEffect, useState } from 'react';
import '../../Style/RelatedBlog.scss';
import parse from 'html-react-parser';
import arrow from '../../../assets/image/arrow-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import { getdataBlog } from '../../../features/blogSlice';
const RelatedBlog = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const { dataBlog } = useSelector((state) => state.dataBlog);
    const [dataPage, setDataPage] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (id) => {
        navigate(`${path.BLOG}/${encodeURIComponent(id)}`);
    };
    const SwitchPage = (path) => {
        navigate(path);
    };

    useEffect(() => {
        if (dataBlog === null) {
            dispatch(getdataBlog());
        }
    }, []);

    useEffect(() => {
        if (dataBlog?.data?.length > 0) {
            const blogs = dataBlog.data;
            const data = [];
            blogs.map((item) => {
                if (item.status === STATUS.PUBLISH) {
                    item.translations.forEach((ele) => {
                        if (ele.languages_code === languageApp && ele.Edit_Blog_id !== Number(props.idSkip)) {
                            data.push({
                                ...ele,
                                date_created: item.date_created,
                                ngay_dang: item.time_post,
                                image: item.image,
                            });
                        }
                    });
                }
            });
            setDataPage(data);
        }
    }, [dataBlog, languageApp, props.idSkip]);
    return (
        <>
            <div className="related-blog-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-12 col-title d-flex justify-content-md-start justify-content-center align-items-center mb-3">
                            <h3>{languageApp === LANGUAGES.EN ? 'Related Post' : 'Bài viết liên quan'}</h3>
                        </div>
                        <div className="col-md-4 col-12 d-md-block d-none">
                            <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-3">
                                <span className="button" onClick={() => SwitchPage(path.BLOG)}>
                                    {languageApp === 'en' ? 'View all post' : 'Xem thêm'}{' '}
                                    <img src={arrow} alt="arrow" />
                                </span>
                            </div>
                        </div>
                        {dataPage.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>
                                    {languageApp === 'en'
                                        ? 'No related projects available'
                                        : 'Không có dự án liên quan'}
                                </p>
                            </div>
                        ) : (
                            dataPage.slice(0, 4).map((block, index) => (
                                <div className="col-lg-3 col-sm-6 col-12 child-item" key={index}>
                                    <div className="content">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/assets/${block.image}`}
                                            alt="content-img"
                                            onClick={() => handleClick(block?.Edit_Blog_id)}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        <div className="mt-3" style={{ color: '#189FE0' }}>
                                            <ul>
                                                {block?.tags?.map((tag, a) => (
                                                    <li className="me-2" key={a}>
                                                        {parse(typeof tag === 'string' ? tag : '')}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h5 onClick={() => handleClick(block?.Edit_Blog_id)}>
                                                {parse(
                                                    typeof block?.content_main === 'string' ? block?.content_main : '',
                                                )}
                                            </h5>
                                            <p>{parse(typeof block?.content === 'string' ? block?.content : '')}</p>
                                            <span>
                                                {new Date(
                                                    block.ngay_dang ||
                                                        block.date_created ||
                                                        block.date_updated ||
                                                        Date.now(),
                                                ).toLocaleDateString('vi-VN')}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                        <div className="col-md-4 col-12 d-md-none d-block">
                            <div className="d-flex justify-content-md-end justify-content-end align-items-center mb-3">
                                <span className="button" onClick={() => SwitchPage(path.BLOG)}>
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

export default RelatedBlog;
