import React from 'react';
import '../../Style/Media.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Hàm kiểm tra URL hợp lệ
const isValidUrl = (url) => {
    try {
        new URL(url); // Thử tạo một đối tượng URL
        return true; // Nếu không có lỗi, thì URL hợp lệ
    } catch (e) {
        return false; // Nếu có lỗi, URL không hợp lệ
    }
};

const Media = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const SwitchPage = (path) => {
        navigate(path);
    };
    const handleClick = (title) => {
        navigate(`/news/${encodeURIComponent(title)}`);
    };
    return (
        <>
            {props?.data?.item?.contents && languageApp && (
                <div className="section-media">
                    <div className="container">
                        <h4>{props.data.item?.title}</h4>
                        <h1>{props.data.item?.header}</h1>
                        <div className="row">
                            <div className="col-md-6 col-12 left">
                                {/* Kiểm tra URL hợp lệ trước khi render */}
                                {isValidUrl(
                                    `${import.meta.env.VITE_BACKEND_URL}/assets/${props.data.item.contents[0].item.image}`,
                                ) && (
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.data.item.contents[0].item.image}`}
                                        alt="Content Image"
                                        onClick={() => handleClick(props.data.item.contents[0]?.id)}
                                    />
                                )}
                                <a onClick={() => handleClick(props.data.item.contents[0]?.id)}>
                                    {props.data.item.contents[0].item.content_main}
                                </a>
                                <div className="date">
                                    <span>
                                        {new Date(props.data.item.contents[0].item.date_created).toLocaleDateString(
                                            languageApp === 'en' ? 'en-US' : 'vi-VN',
                                        )}
                                    </span>
                                </div>
                                <p>{props.data.item.contents[0].item.post_basic}</p>
                            </div>
                            <div className="col-md-6 col-12 right">
                                {props.data.item.contents.slice(1).map((content, index) => (
                                    <div className="row mb-4 child-post" key={index}>
                                        <div className="col-5">
                                            {/* Kiểm tra URL hợp lệ cho mỗi hình ảnh */}
                                            {isValidUrl(
                                                `${import.meta.env.VITE_BACKEND_URL}/assets/${content.item.image}`,
                                            ) && (
                                                <img
                                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${content.item.image}`}
                                                    alt={`Content Image ${index + 1}`}
                                                    onClick={() => handleClick(content.id)}
                                                />
                                            )}
                                        </div>
                                        <div className="col-7 d-flex flex-column justify-content-between mb-4">
                                            <a onClick={() => handleClick(content.id)}>{content.item.content_main}</a>
                                            <div className="date">
                                                <span>
                                                    {new Date(content.item.date_created).toLocaleDateString(
                                                        languageApp === 'en' ? 'en-US' : 'vi-VN',
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                <a className="button" onClick={() => SwitchPage('news')}>
                                    {languageApp === 'en' ? 'View all posts' : 'Xem thêm'} <img src={arrow} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Media;
