import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import '../../Style/NewDetail.scss';
import parse from 'html-react-parser';
import RelatedNew from './RelatedNew';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import { Subscribe, fetchDataDetailNew, fetchDataUser } from '../../../services/userServices';
const NewsDetailPage = React.memo(() => {
    const navigate = useNavigate();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [dataPage, setDataPage] = useState(null);
    const languageApp = useSelector((state) => state.language.language);
    const { id } = useParams();
    const [userInfo, setUserInfo] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const [isShow, setIsShow] = useState(false);
    const [isFinaly, setIsfinaly] = useState(false);
    const [isShowRelated, setIsShowRelated] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await fetchDataDetailNew(id);
                if (res.status < 400) {
                    if (res?.data?.data?.status === STATUS.PUBLISH) {
                        const data = res.data.data;
                        setDataPage(data);
                        const userId = data.user_created;
                        try {
                            const res = await fetchDataUser(userId);
                            if (res.status < 400) {
                                setUserInfo(res.data);
                            }
                            setIsShow(true);
                        } catch (err) {
                            if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                                console.error(err.message);
                            }
                        }
                    }
                } else {
                    navigate(path.NEWS);
                }
            } catch (err) {
                navigate(path.NEWS);
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(err.message);
                }
            } finally {
                setIsfinaly(true);
                setIsShowRelated(true);
            }
        };
        fetch();
    }, [id]);
    const renderBlockLeft = (block) => {
        if (block?.data === null || block?.data === undefined) return null;
        switch (block.type) {
            case 'header':
                switch (block?.data?.level) {
                    case 1:
                        return (
                            <h1 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h1>
                        );
                    case 2:
                        return (
                            <h2 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h2>
                        );
                    case 3:
                        return (
                            <h3 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h3>
                        );
                    case 4:
                        return (
                            <h4 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h4>
                        );
                    case 5:
                        return (
                            <h5 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h5>
                        );
                    case 6:
                        return (
                            <h6 className="my-2" key={block.id}>
                                {parse(block.data.text)}
                            </h6>
                        );
                    default:
                        return null;
                }
            case 'paragraph':
                return (
                    <p className="my-1 text-justify" key={block.id}>
                        {parse(block.data.text)}
                    </p>
                );
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return imageUrlLeft ? (
                    <React.Fragment key={block?.id}>
                        <img
                            className="mt-2 mb-3"
                            key={block.id}
                            src={imageUrlLeft}
                            alt={block.data.file?.title || 'Image'}
                        />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                ) : null;
            case 'attaches':
                if (block?.data?.file?.extension === 'mp4') {
                    return (
                        <video
                            className="video-page my-3"
                            src={`${backendUrl}${block.data.file.url}`}
                            controls={true}
                            autoPlay={true}
                            playsInline
                            loop
                            muted={true}
                        />
                    );
                } else if (block?.data?.file?.extension === 'svg') {
                    return null;
                } else if (block?.data?.file?.extension === 'watch') {
                    return (
                        <video
                            className="video-page my-3"
                            src={`${backendUrl}${block.data.file.url}`}
                            controls={true}
                            autoPlay={true}
                            playsInline
                            loop
                            muted={true}
                        />
                    );
                } else {
                    return (
                        <>
                            <a href={`${backendUrl}${block.data.file.url}`} target="_blank">
                                {languageApp === LANGUAGES.EN ? 'Click to view' : 'Nhấn để xem'}
                            </a>
                        </>
                    );
                }
            case 'raw':
                return <div dangerouslySetInnerHTML={{ __html: block?.data?.html }} className="video_nhung"></div>;
            case 'nestedlist':
                if (block?.data?.style === 'unordered') {
                    return (
                        <ul className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ul>
                    );
                } else if (block?.data?.style === 'ordered') {
                    return (
                        <ol className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ol>
                    );
                }
            default:
                return null;
        }
    };
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const SendMail = async () => {
        if (!validateEmail(userEmail)) {
            Swal.fire({
                icon: 'error',
                title: languageApp === LANGUAGES.EN ? 'Invalid Email' : 'Email không hợp lệ',
                text:
                    languageApp === LANGUAGES.EN
                        ? 'Please enter a valid email address.'
                        : 'Vui lòng nhập một địa chỉ email hợp lệ.',
                scrollbarPadding: false,
            });
            return;
        }
        setIsSubmitting(true);
        const url = `/api/flows/trigger/70cdc824-e1e5-4438-9018-612126b2c541`;
        try {
            const response = await Subscribe(userEmail, STATUS.PUBLISH);
            if (response.status === 204) {
                Swal.fire({
                    icon: 'success',
                    title: languageApp === LANGUAGES.EN ? 'Success' : 'Thành công',
                    text:
                        languageApp === LANGUAGES.EN
                            ? 'Subscription completed successfully!'
                            : 'Đăng ký nhận tin thành công!',
                    scrollbarPadding: false,
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: languageApp === LANGUAGES.EN ? 'Failed' : 'Thất bại',
                    text:
                        languageApp === LANGUAGES.EN
                            ? 'Subscription failed. Please try again.'
                            : 'Đăng ký nhận tin thất bại. Vui lòng thử lại.',
                    scrollbarPadding: false,
                });
            }
        } catch (error) {
            if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                console.error(error.message);
            }
            Swal.fire({
                icon: 'error',
                title: languageApp === LANGUAGES.EN ? 'Error' : 'Lỗi',
                text:
                    languageApp === LANGUAGES.EN
                        ? 'An error occurred while processing your request. Please try again.'
                        : 'Đã xảy ra lỗi khi xử lý yêu cầu của bạn. Vui lòng thử lại.',
                scrollbarPadding: false,
            });
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <Helmet>
                <title>{dataPage?.translations[0].content_main}</title>
                <meta name="description" content={dataPage?.translations[0]?.content} />

                {/* open graph */}
                <meta property="og:title" content={dataPage?.translations[0].content_main} />
                <meta property="og:description" content={dataPage?.translations[0]?.content} />
                <meta property="og:image" content={`${import.meta.env.VITE_URL_BACKEND}/assets/${dataPage?.image}`} />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.NEWS}/${id}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {languageApp && dataPage && (
                <>
                    {dataPage?.translations.map((item, index) => {
                        if (item?.languages_code === languageApp) {
                            return (
                                <div className="new-detail-container" key={`new_${index}`}>
                                    <div className="container">
                                        <div className="row px-2">
                                            <div className="col-md-8 col-12 left px-2 mb-5">
                                                <div className="child px-4">
                                                    <div className="date d-flex align-item-center justify-content-end py-4">
                                                        <span>
                                                            <i className="fa fa-calendar"></i>{' '}
                                                            {new Date(
                                                                dataPage?.time_post ||
                                                                    dataPage?.date_created ||
                                                                    Date.now(),
                                                            ).toLocaleDateString('vi-VN')}
                                                        </span>
                                                    </div>
                                                    <div className="py-4 content">
                                                        <h1
                                                            style={{
                                                                color: `${companyInfor?.data[0]?.color_text_heading}`,
                                                            }}
                                                        >
                                                            {item?.content_main}
                                                        </h1>

                                                        {item?.post?.blocks?.map((block, z) => (
                                                            <React.Fragment key={block.id || z}>
                                                                {renderBlockLeft(block)}
                                                            </React.Fragment>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3 col-12 right p-0 pe-2">
                                                <div className="child">
                                                    <div className="up d-flex align-items-center justify-content-center flex-column">
                                                        <div
                                                            className="logo mb-2"
                                                            style={{
                                                                backgroundImage: `url(${
                                                                    isShow && isFinaly
                                                                        ? `${backendUrl}/assets/${userInfo?.data?.avatar}`
                                                                        : !isShow && isFinaly
                                                                          ? `${backendUrl}/assets/${companyInfor?.data?.[0]?.icon_logo}`
                                                                          : ''
                                                                })`,
                                                            }}
                                                        ></div>
                                                        {isShow && isFinaly && (
                                                            <span>
                                                                {languageApp === LANGUAGES.EN
                                                                    ? `${userInfo.data.last_name} ${userInfo.data.first_name}`
                                                                    : `${userInfo.data.first_name} ${userInfo.data.last_name}`}
                                                            </span>
                                                        )}
                                                        {!isShow && isFinaly && (
                                                            <span>{companyInfor?.data?.[0]?.company_name}</span>
                                                        )}
                                                    </div>
                                                    <div className="down">
                                                        {isShow && isFinaly && userInfo?.data && (
                                                            <div className="social-icon d-flex py-4 ps-3">
                                                                {userInfo?.data?.link_facebook && (
                                                                    <a
                                                                        href={userInfo?.data?.link_facebook}
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-facebook"></i>
                                                                    </a>
                                                                )}
                                                                {userInfo?.data?.link_youtube && (
                                                                    <a
                                                                        href={userInfo?.data?.link_youtube}
                                                                        target="_blank"
                                                                    >
                                                                        <i className="fa fa-youtube"></i>
                                                                    </a>
                                                                )}
                                                                {userInfo?.data?.link_linkedin && (
                                                                    <div className="item">
                                                                        <a
                                                                            href={userInfo?.data?.link_linkedin}
                                                                            target="_blank"
                                                                        >
                                                                            <i className="fa fa-linkedin"></i>
                                                                        </a>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                        <div className="info py-4 px-3">
                                                            <div className="form-group">
                                                                <label>Email: </label>
                                                                <input
                                                                    type="text"
                                                                    value={userEmail}
                                                                    onChange={(event) =>
                                                                        setUserEmail(event.target.value)
                                                                    }
                                                                    className="form-control mt-2"
                                                                />
                                                            </div>
                                                            <button
                                                                className="btn btn-warning mt-4 py-2 px-4"
                                                                onClick={() => SendMail()}
                                                                disabled={isSubmitting}
                                                            >
                                                                {languageApp == LANGUAGES.EN
                                                                    ? 'Subscribe to updates'
                                                                    : 'Đăng ký nhận tin mới'}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </>
            )}
            {isShowRelated && <RelatedNew idSkip={id} />}
        </>
    );
});

export default NewsDetailPage;
