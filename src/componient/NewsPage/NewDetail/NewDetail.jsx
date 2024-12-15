import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { data, useParams, useNavigate } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import '../../Style/NewDetail.scss';
import img1 from '../../../assets/image/Untitled-2.webp';
import img2 from '../../../assets/image/cmc-global.webp';
import axios from 'axios';

const NewsDetailPage = React.memo(() => {
    const [dataPage, setDataPage] = useState(null);
    const [dataPageLanguage, setDataPageLanguage] = useState(null);
    const languageApp = useSelector((state) => state.language.language);
    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    useEffect(() => {
        const fetch = async () => {
            try {
                const url = `/api/items/block_media_content/${id}`;
                const res = await axios.get(url);

                if (res.status < 400) {
                    if (res?.data?.data) {
                        const data = res.data.data;
                        const id_content_language = data.id_content_language ?? null;
                        if (id_content_language) {
                            const urls = `/api/items/block_media_content?filter[id_content_language][_eq]=${id_content_language}`;
                            const response = await axios.get(urls);
                            if (response.status < 400) {
                                if (response.data?.data) {
                                    const datas = response.data.data;
                                    const dataPush = {};
                                    datas.map((lang) => {
                                        if (Object.values(LANGUAGES).includes(lang.language)) {
                                            dataPush[lang.language] = lang;
                                        }
                                    });
                                    setDataPage(dataPush);
                                }
                            }
                        }
                    }
                } else {
                    navigate(path.HOME);
                }
            } catch (err) {
                navigate(path.HOME);
                console.error(err.message);
            }
        };
        fetch();
    }, []);

    const isValidUrl = (url) => {
        try {
            new URL(url);
            return true; // Nếu không có lỗi, thì URL hợp lệ
        } catch (e) {
            return false; // Nếu có lỗi, URL không hợp lệ
        }
    };

    const renderBlockLeft = (block) => {
        switch (block.type) {
            case 'header':
                return <span key={block.id}>{block.data.text}</span>;
            case 'paragraph':
                return <p key={block.id}>{block.data.text}</p>;
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return isValidUrl(imageUrlLeft) ? (
                    <div key={block.id}>
                        <br />
                        <img key={block.id} src={imageUrlLeft} alt={block.data.file?.title || 'Image'} />
                        <br />
                    </div>
                ) : null;
            default:
                return null;
        }
    };

    return (
        <>
            {languageApp && dataPage && dataPage[languageApp] && (
                <div className="new-detail-container">
                    <div className="container">
                        <div className="row px-2">
                            <div className="col-md-8 col-12 left px-2 mb-5">
                                <div className="child px-4 ">
                                    <div className="date d-flex align-item-center justify-content-end py-4">
                                        <span>
                                            <i className="fa fa-calendar"></i>{' '}
                                            {new Date(dataPage[languageApp].date_created).toLocaleDateString(
                                                languageApp === LANGUAGES.EN ? 'en-US' : 'vi-VN',
                                            )}
                                        </span>
                                    </div>
                                    <div className="py-4 content">
                                        <h1>{dataPage[languageApp]['content_main']}</h1>

                                        {dataPage[languageApp]['post']['blocks'].map(renderBlockLeft)}
                                    </div>
                                    <div className="bottom py-3 d-flex align-item-center justify-content-between">
                                        <span className="fw-bold">
                                            {languageApp === LANGUAGES.EN
                                                ? 'Share This Article'
                                                : 'Chia sẻ bài viết này'}
                                        </span>
                                        <div className="social-icon d-flex">
                                            <i className="fa fa-facebook"></i>
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-12 right p-0 pe-2">
                                <div className="child">
                                    <div className="up d-flex align-items-center justify-content-center flex-column">
                                        <div className="logo mb-2" style={{ backgroundImage: `url(${img2})` }}></div>
                                        <span>CMC Global</span>
                                    </div>
                                    <div className="down">
                                        <div className="share py-4 ps-3 pe-1">
                                            <span className="fw-bold">
                                                {' '}
                                                {languageApp === LANGUAGES.EN
                                                    ? 'Share This Article'
                                                    : 'Chia sẻ bài viết này'}
                                            </span>
                                        </div>
                                        <div className="social-icon d-flex py-4 ps-3">
                                            <i className="fa fa-facebook"></i>
                                            <i className="fa fa-twitter"></i>
                                        </div>
                                        <div className="info py-4 px-3">
                                            <div className="form-group">
                                                <label>Email: </label>
                                                <input type="text" className="form-control mt-2" />
                                            </div>
                                            <button className="btn btn-warning mt-4 py-2 px-4">
                                                Subscribe to updates
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default NewsDetailPage;
