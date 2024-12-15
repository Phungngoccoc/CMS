import React, { useEffect, useState } from 'react';
import '../../Style/LastestNews.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const LastestNews = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);

    const navigate = useNavigate();
    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (error) {
            return false;
        }
    };

    const getImageUrl = (image) => {
        if (isValidUrl(image)) {
            return image;
        } else {
            return `${import.meta.env.VITE_BACKEND_URL}/assets/${image}`;
        }
    };

    const handleClick = (title) => {
        navigate(`/news/${encodeURIComponent(title)}`);
    };
    return (
        <>
            {props?.data?.item?.contents && languageApp && (
                <div className="lastest-news-container">
                    <div className="container">
                        <h4>{props.data.item?.title}</h4>
                        <h1>{props.data.item?.header}</h1>
                        <div className="list-new row mt-4">
                            <div className="col-md-6 co-12 child-new-left mt-3">
                                <div className="child" onClick={() => handleClick(props.data.item.contents[0]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[0]?.item?.image)})`,
                                        }}
                                    ></div>
                                    <div className="blur"></div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[0]?.item?.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[0].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 child-new-right d-flex flex-column mt-3">
                                <div className="child" onClick={() => handleClick(props.data.item.contents[1]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[1].item.image)})`,
                                        }}
                                    >
                                        <div className="blur-green"></div>
                                    </div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[1].item.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[1].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className="child" onClick={() => handleClick(props.data.item.contents[2]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[2].item.image)})`,
                                        }}
                                    >
                                        <div className="blur-blue"></div>
                                    </div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[2].item.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[2].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-new row mt-1">
                            <div className="col-md-6 col-12 child-new-right d-flex flex-column mt-3">
                                <div className="child" onClick={() => handleClick(props.data.item.contents[3]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[3].item.image)})`,
                                        }}
                                    >
                                        <div className="blur-pink"></div>
                                    </div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[3].item.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[3].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className="child" onClick={() => handleClick(props.data.item.contents[0]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[0].item.image)})`,
                                        }}
                                    >
                                        <div className="blur-blue"></div>
                                    </div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[0].item.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[0].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 co-12 child-new-left mt-3">
                                <div className="child" onClick={() => handleClick(props.data.item.contents[1]?.id)}>
                                    <div
                                        className="child-img"
                                        style={{
                                            backgroundImage: `url(${getImageUrl(props.data.item.contents[1].item.image)})`,
                                        }}
                                    ></div>
                                    <div className="blur"></div>
                                    <div className="child-text px-4">
                                        <span className="mb-5">{props.data.item.contents[1].item.content_main}</span>
                                        <a>
                                            {new Date(props.data.item.contents[1].item.date_created).toLocaleDateString(
                                                languageApp === 'en' ? 'en-US' : 'vi-VN',
                                            )}
                                        </a>
                                        <label>
                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                            <i className="fa fa-arrow-right"></i>
                                        </label>
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

export default LastestNews;
