import React, { useEffect, useState } from 'react';
import '../../Style/RelatedProject.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import { fetchDataRelatedProject } from '../../../services/userServices';
import axios from 'axios';
const RelatedProject = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const [dataProject, setDataProject] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const handleClick = (id) => {
        navigate(`${path.PROJECTS}/${encodeURIComponent(id)}`);
    };

    const SwitchPage = (path) => {
        navigate(path);
    };
    useEffect(() => {
        const fetch = async () => {
            try {
                // setDataProject(null);

                const res = await fetchDataRelatedProject();

                if (res.status < 400 && res.data) {
                    const data = res.data.data;

                    if (data.length > 0) {
                        const blocksToUpdate = {
                            [LANGUAGES.EN]: [],
                            [LANGUAGES.VI]: [],
                        };

                        data.forEach((item) => {
                            if (item.status === STATUS.PUBLISH && item?.id !== Number(props?.idSkip)) {
                                const translations = item.translations;
                                translations.forEach((translation) => {
                                    if (Object.values(LANGUAGES).includes(translation.languages_code)) {
                                        blocksToUpdate[translation.languages_code]?.push({
                                            translation,
                                            item,
                                        });
                                    }
                                });
                            }
                        });
                        setDataProject(blocksToUpdate);
                    }
                }
            } catch (err) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(err.message);
                }
            }
        };

        fetch();
    }, [languageApp, props?.idSkip]);
    return (
        <>
            {dataProject && (
                <div className="related-project-container">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-12 col-title d-flex justify-content-md-start justify-content-center align-items-center mb-3">
                                <h3>{languageApp === 'en' ? 'Related Projects' : 'Dự án liên quan'}</h3>
                            </div>
                            <div className="col-md-4 col-12 d-md-block d-none">
                                <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-3">
                                    <span className="button" onClick={() => SwitchPage(path.PROJECTS)}>
                                        {languageApp === 'en' ? 'View all post' : 'Xem thêm'}{' '}
                                        <img src={arrow} alt="arrow" />
                                    </span>
                                </div>
                            </div>

                            {dataProject[languageApp].length === 0 ? (
                                <div className="col-12 text-center">
                                    <p>
                                        {languageApp === 'en'
                                            ? 'No related projects available'
                                            : 'Không có dự án liên quan'}
                                    </p>
                                </div>
                            ) : (
                                dataProject[languageApp].slice(0, 4).map((block, index) => (
                                    <div className="col-lg-3 col-sm-6 col-12 child-item" key={index}>
                                        <div className="content">
                                            <img
                                                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${block.item.image}`}
                                                alt="image"
                                                onClick={() => handleClick(block.item.id)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                            <div className="mt-4">
                                                <h5 onClick={() => handleClick(block.item.id)}>
                                                    {block.translation.content_main}
                                                </h5>
                                                <p> {block.translation.content}</p>
                                                <span>
                                                    {new Date(
                                                        block.item.date_created ||
                                                            block.item.date_updated ||
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
                                    <span className="button" onClick={() => SwitchPage(path.PROJECTS)}>
                                        {languageApp === 'en' ? 'View all post' : 'Xem thêm'}{' '}
                                        <img src={arrow} alt="arrow" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default RelatedProject;
