import React from 'react';
import '../../Style/LastestBlog.scss';
import { path } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
const LastestBlog = React.memo((props) => {
    const navigate = useNavigate();
    const languageApp = useSelector((state) => state.language.language);
    const handleClick = (id) => {
        navigate(`${path.BLOG}/${encodeURIComponent(id)}`);
    };
    const renderBlogs = () => {
        if (!props?.blogs?.length) return null;
        switch (props.blogs.length) {
            case 4:
                return (
                    <>
                        <div>
                            <div className="row">
                                <div className="col-lg-6 col-12 left">
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[0].image}`}
                                        alt="Content Image"
                                        onClick={() => handleClick(props.blogs[0].id)}
                                    />
                                    {props?.blogs[0]?.translations?.map((item, index) => {
                                        if (item.languages_code === languageApp) {
                                            return (
                                                <React.Fragment key={index}>
                                                    <ul className="mt-3">
                                                        {item?.tags?.map((tag, a) => {
                                                            return <li key={a}>{parse(tag)}</li>;
                                                        })}
                                                    </ul>
                                                    <span onClick={() => handleClick(props?.blogs[0]?.id)}>
                                                        {parse(item?.content_main)}
                                                    </span>
                                                    <div className="date">
                                                        <span>
                                                            {new Date(
                                                                props.blogs[0].time_post || props.blogs[0].date_created,
                                                            ).toLocaleDateString('vi-VN')}
                                                        </span>
                                                    </div>
                                                    <p>{parse(item?.content)}</p>
                                                </React.Fragment>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="col-lg-6 col-12 right">
                                    <div className="row mb-5 child-post">
                                        <div className="col-5">
                                            <img
                                                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[1]?.image}`}
                                                onClick={() => handleClick(props.blogs[1].id)}
                                                alt="blog-img"
                                            />
                                        </div>
                                        <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                            {props?.blogs[1]?.translations?.map((item, index) => {
                                                if (item.languages_code === languageApp) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <ul>
                                                                {item?.tags?.map((tag, a) => {
                                                                    return <li key={a}>{parse(tag)}</li>;
                                                                })}
                                                            </ul>
                                                            <label onClick={() => handleClick(props.blogs[1]?.id)}>
                                                                {parse(item?.content_main)}
                                                            </label>
                                                            <p className="mt-2">{parse(item?.content)}</p>
                                                            <div className="date">
                                                                <span>
                                                                    {new Date(
                                                                        props.blogs[1].time_post ||
                                                                            props.blogs[1].date_created,
                                                                    ).toLocaleDateString('vi-VN')}
                                                                </span>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                }
                                            })}
                                        </div>
                                        <div className="child-post-hidden ps-4 pt-2 pb-1 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-5 mt-3">
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[1]?.image}`}
                                                        onClick={() => handleClick(props.blogs[1].id)}
                                                        alt="blog-img"
                                                    />
                                                </div>
                                                <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                                    {props?.blogs[1]?.translations?.map((item, index) => {
                                                        if (item.languages_code === languageApp) {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <ul className="mt-3">
                                                                        {item?.tags?.map((tag, a) => {
                                                                            return <li key={a}>{parse(tag)}</li>;
                                                                        })}
                                                                    </ul>
                                                                    <label
                                                                        onClick={() => handleClick(props.blogs[1].id)}
                                                                    >
                                                                        {parse(item?.content_main)}
                                                                    </label>
                                                                    <p className="mt-2">{parse(item?.content)}</p>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5 child-post">
                                        <div className="col-5">
                                            <img
                                                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[2]?.image}`}
                                                onClick={() => handleClick(props.blogs[2].id)}
                                                alt="blog-img"
                                            />
                                        </div>
                                        <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                            {props?.blogs[2]?.translations?.map((item, index) => {
                                                if (item.languages_code === languageApp) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <ul>
                                                                {item?.tags?.map((tag, a) => {
                                                                    return <li key={a}>{parse(tag)}</li>;
                                                                })}
                                                            </ul>
                                                            <label onClick={() => handleClick(props.blogs[2].id)}>
                                                                {parse(item?.content_main)}
                                                            </label>
                                                            <p className="mt-2">{parse(item?.content)}</p>
                                                            <div className="date">
                                                                <span>
                                                                    {new Date(
                                                                        props.blogs[2].time_post ||
                                                                            props.blogs[2].date_created,
                                                                    ).toLocaleDateString('vi-VN')}
                                                                </span>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                }
                                            })}
                                        </div>
                                        <div className="child-post-hidden ps-4 pt-2 pb-1 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-5 mt-3">
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[2]?.image}`}
                                                        onClick={() => handleClick(props.blogs[2].id)}
                                                        alt="blog-img"
                                                    />
                                                </div>
                                                <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                                    {props?.blogs[2]?.translations?.map((item, index) => {
                                                        if (item.languages_code === languageApp) {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <ul className="mt-3">
                                                                        {item?.tags?.map((tag, a) => {
                                                                            return <li key={a}>{parse(tag)}</li>;
                                                                        })}
                                                                    </ul>
                                                                    <label
                                                                        onClick={() => handleClick(props.blogs[2].id)}
                                                                    >
                                                                        {parse(item.content_main)}
                                                                    </label>
                                                                    <p className="mt-2">{parse(item.content)}</p>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-5 child-post">
                                        <div className="col-5">
                                            <img
                                                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[3]?.image}`}
                                                onClick={() => handleClick(props.blogs[3].id)}
                                                alt="blog-img"
                                            />
                                        </div>
                                        <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                            {props?.blogs[3]?.translations?.map((item, index) => {
                                                if (item.languages_code === languageApp) {
                                                    return (
                                                        <React.Fragment key={index}>
                                                            <ul>
                                                                {item?.tags?.map((tag, a) => {
                                                                    return <li key={a}>{parse(tag)}</li>;
                                                                })}
                                                            </ul>
                                                            <label onClick={() => handleClick(props.blogs[3].id)}>
                                                                {parse(item?.content_main)}
                                                            </label>
                                                            <p className="mt-2">{parse(item?.content)}</p>
                                                            <div className="date">
                                                                <span>
                                                                    {new Date(
                                                                        props.blogs[3].time_post ||
                                                                            props.blogs[3].date_created,
                                                                    ).toLocaleDateString('vi-VN')}
                                                                </span>
                                                            </div>
                                                        </React.Fragment>
                                                    );
                                                }
                                            })}
                                        </div>
                                        <div className="child-post-hidden ps-4 pt-2 pb-1 d-sm-block d-none">
                                            <div className="row">
                                                <div className="col-5 mt-3">
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[3]?.image}`}
                                                        onClick={() => handleClick(props.blogs[3].id)}
                                                        alt="blog-img"
                                                    />
                                                </div>
                                                <div className="col-7 d-flex flex-column justify-content-between mb-2">
                                                    {props?.blogs[3]?.translations?.map((item, index) => {
                                                        if (item.languages_code === languageApp) {
                                                            return (
                                                                <React.Fragment key={index}>
                                                                    <ul className="mt-3">
                                                                        {item?.tags?.map((tag, a) => {
                                                                            return <li key={a}>{parse(tag)}</li>;
                                                                        })}
                                                                    </ul>
                                                                    <label
                                                                        onClick={() => handleClick(props.blogs[3].id)}
                                                                    >
                                                                        {parse(item?.content_main)}
                                                                    </label>
                                                                    <p className="mt-2">{parse(item?.content)}</p>
                                                                </React.Fragment>
                                                            );
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 3:
                return (
                    <>
                        <div className="row">
                            <div className="col-lg-5 col-12 left">
                                <img
                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[0].image}`}
                                    alt="Content Image"
                                    onClick={() => handleClick(props.blogs[0].id)}
                                />
                                {props?.blogs[0]?.translations?.map((item, index) => {
                                    if (item.languages_code === languageApp) {
                                        return (
                                            <React.Fragment key={index}>
                                                <ul className="mt-3">
                                                    {item?.tags?.map((tag, a) => {
                                                        return <li key={a}>{parse(tag)}</li>;
                                                    })}
                                                </ul>
                                                <label onClick={() => handleClick(props.blogs[0].id)}>
                                                    {parse(item?.content_main)}
                                                </label>
                                                <div className="date">
                                                    <span>
                                                        {new Date(
                                                            props.blogs[0].time_post || props.blogs[0].date_created,
                                                        ).toLocaleDateString('vi-VN')}
                                                    </span>
                                                </div>
                                                <p>{parse(item?.content)}</p>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </div>
                            <div className="col-lg-7 col-12 right d-flex flex-column justify-content-between ">
                                <div className="row mb-4 child-post">
                                    <div className="col-6 mb-4">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[1].image}`}
                                            onClick={() => handleClick(props.blogs[1].id)}
                                            alt="blog-img"
                                        />
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-start mb-2">
                                        {props?.blogs[1]?.translations?.map((item, index) => {
                                            if (item.languages_code === languageApp) {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <ul className="mb-3 mt-3">
                                                            {item?.tags?.map((tag, a) => {
                                                                return <li key={a}>{parse(tag)}</li>;
                                                            })}
                                                        </ul>
                                                        <label
                                                            onClick={() => handleClick(props.blogs[1].id)}
                                                            className="mb-3"
                                                        >
                                                            {parse(item?.content_main)}
                                                        </label>
                                                        <p className="mt-2 mb-3">{parse(item?.content)}</p>
                                                        <div className="date mt-4">
                                                            <span>
                                                                {new Date(
                                                                    props.blogs[1].time_post ||
                                                                        props.blogs[1].date_created,
                                                                ).toLocaleDateString('vi-VN')}
                                                            </span>
                                                        </div>
                                                    </React.Fragment>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="child-post-hidden ps-5 pt-2 pb-1 d-sm-block d-none">
                                        <div className="row">
                                            <div className="col-5 mt-3">
                                                <img
                                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[1].image}`}
                                                    onClick={() => handleClick(props.blogs[1].id)}
                                                    alt="blog-img"
                                                />
                                            </div>
                                            <div className="col-7 d-flex flex-column justify-content-center ">
                                                {props?.blogs[1]?.translations?.map((item, index) => {
                                                    if (item.languages_code === languageApp) {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <ul className="mt-3">
                                                                    {item?.tags?.map((tag, a) => {
                                                                        return <li key={a}>{parse(tag)}</li>;
                                                                    })}
                                                                </ul>
                                                                <label onClick={() => handleClick(props.blogs[1]?.id)}>
                                                                    {parse(item?.content_main)}
                                                                </label>
                                                                <p className="mt-3">{parse(item?.content)}</p>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-4 child-post">
                                    <div className="col-6 mb-4">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[2].image}`}
                                            onClick={() => handleClick(props.blogs[2].id)}
                                            alt="blog-img"
                                        />
                                    </div>
                                    <div className="col-6 d-flex flex-column justify-content-start mb-2">
                                        {props?.blogs[2]?.translations?.map((item, index) => {
                                            if (item.languages_code === languageApp) {
                                                return (
                                                    <React.Fragment key={index}>
                                                        <ul className="mb-3 mt-3">
                                                            {item?.tags?.map((tag, a) => {
                                                                return <li key={a}>{parse(tag)}</li>;
                                                            })}
                                                        </ul>
                                                        <label
                                                            onClick={() => handleClick(props.blogs[2].id)}
                                                            className="mb-3"
                                                        >
                                                            {parse(item?.content_main)}
                                                        </label>
                                                        <p className="mt-2 mb-3">{parse(item?.content)}</p>
                                                        <div className="date mt-4">
                                                            <span>
                                                                {new Date(
                                                                    props.blogs[2].time_post ||
                                                                        props.blogs[2].date_created,
                                                                ).toLocaleDateString('vi-VN')}
                                                            </span>
                                                        </div>
                                                    </React.Fragment>
                                                );
                                            }
                                        })}
                                    </div>
                                    <div className="child-post-hidden ps-5 pt-2 pb-1 d-sm-block d-none">
                                        <div className="row">
                                            <div className="col-5 mt-3">
                                                <img
                                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[2].image}`}
                                                    onClick={() => handleClick(props.blogs[2].id)}
                                                    alt="blog-img"
                                                />
                                            </div>
                                            <div className="col-7 d-flex flex-column justify-content-center ">
                                                {props?.blogs[2]?.translations?.map((item, index) => {
                                                    if (item.languages_code === languageApp) {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <ul className="mt-3">
                                                                    {item?.tags?.map((tag, a) => {
                                                                        return <li key={a}>{parse(tag)}</li>;
                                                                    })}
                                                                </ul>
                                                                <label onClick={() => handleClick(props.blogs[2].id)}>
                                                                    {parse(item?.content_main)}
                                                                </label>
                                                                <p className="mt-3">{parse(item?.content)}</p>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="row">
                            <div className="col-lg-6 col-12 left px-3">
                                <img
                                    className=""
                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[0].image}`}
                                    alt="Content Image"
                                    onClick={() => handleClick(props.blogs[0].id)}
                                />
                                {props?.blogs[0]?.translations?.map((item, index) => {
                                    if (item.languages_code === languageApp) {
                                        return (
                                            <React.Fragment key={index}>
                                                <ul className="mt-3">
                                                    {item?.tags?.map((tag, a) => {
                                                        return <li key={a}>{parse(tag)}</li>;
                                                    })}
                                                </ul>
                                                <label onClick={() => handleClick(props.blogs[0].id)}>
                                                    {parse(item?.content_main)}
                                                </label>
                                                <div className="date">
                                                    <span>
                                                        {new Date(
                                                            props.blogs[0].time_post || props.blogs[0].date_created,
                                                        ).toLocaleDateString('vi-VN')}
                                                    </span>
                                                </div>
                                                <p>{parse(item?.content)}</p>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </div>
                            <div className="col-lg-6 col-12 left px-3">
                                <img
                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[1].image}`}
                                    alt="Content Image"
                                    onClick={() => handleClick(props.blogs[1].id)}
                                />
                                {props?.blogs[1]?.translations?.map((item, index) => {
                                    if (item.languages_code === languageApp) {
                                        return (
                                            <React.Fragment key={index}>
                                                <ul className="mt-3">
                                                    {item?.tags?.map((tag, a) => {
                                                        return <li key={a}>{parse(tag)}</li>;
                                                    })}
                                                </ul>
                                                <label onClick={() => handleClick(props.blogs[1].id)}>
                                                    {parse(item?.content_main)}
                                                </label>
                                                <div className="date">
                                                    <span>
                                                        {new Date(
                                                            props.blogs[1].time_post || props.blogs[1].date_created,
                                                        ).toLocaleDateString('vi-VN')}
                                                    </span>
                                                </div>
                                                <p>{parse(item?.content)}</p>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </>
                );
            case 1:
                return (
                    <>
                        <div className="row justify-content-center">
                            <div className="col-lg-9 col-12 left px-3">
                                <img
                                    className=""
                                    src={`${import.meta.env.VITE_BACKEND_URL}/assets/${props.blogs[0].image}`}
                                    alt="Content Image"
                                    onClick={() => handleClick(props.blogs[0].id)}
                                />
                                {props?.blogs[0]?.translations?.map((item, index) => {
                                    if (item.languages_code === languageApp) {
                                        return (
                                            <React.Fragment key={index}>
                                                <ul className="mt-3">
                                                    {item?.tags?.map((tag, a) => {
                                                        return <li key={a}>{parse(tag)}</li>;
                                                    })}
                                                </ul>
                                                <label onClick={() => handleClick(props.blogs[0].id)}>
                                                    {parse(item?.content_main)}
                                                </label>
                                                <div className="date">
                                                    <span>
                                                        {new Date(
                                                            props.blogs[0].time_post || props.blogs[0].date_created,
                                                        ).toLocaleDateString('vi-VN')}
                                                    </span>
                                                </div>
                                                <p>{parse(item?.content)}</p>
                                            </React.Fragment>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </>
                );
            default:
                return null;
        }
    };
    return (
        <>
            <div className="section-list-blog">
                <div className="container">
                    {props?.title?.map((item, index) => {
                        if (item.languages_code === languageApp) {
                            return <h4 key={index}>{item.title}</h4>;
                        }
                    })}
                    {renderBlogs()}
                </div>
            </div>
        </>
    );
});

export default LastestBlog;
