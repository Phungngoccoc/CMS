import React, { useEffect, useState } from 'react';
import '../../Style/LastestNews.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path } from '../../../utils/constant';
import { fetchDataNewsPerPage } from '../../../services/userServices';
import ReactPaginate from 'react-paginate';
const LastestNews = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const getImageUrl = (image) => `${import.meta.env.VITE_BACKEND_URL}/assets/${image}`;
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const [news, setNews] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(6);
    const handleClick = (id) => {
        navigate(`${path.NEWS}/${encodeURIComponent(id)}`);
    };
    const fetchNews = async (page = 0) => {
        const offset = page * itemsPerPage;
        const res = await fetchDataNewsPerPage(itemsPerPage, offset);
        if (res.status < 400) {
            setNews(res.data.data);
            setPageCount(Math.ceil(res.data?.meta?.total_count / itemsPerPage));
        }
    };
    useEffect(() => {
        fetchNews(currentPage);
    }, [currentPage]);
    const renderItem = (item, index, blurClass) => (
        <div className="child" onClick={() => handleClick(item?.id)} key={index} style={{ cursor: 'pointer' }}>
            <div className="child-img" style={{ backgroundImage: `url(${getImageUrl(item?.image)})` }}>
                <div className={blurClass}></div>
            </div>
            {item.translations.map((ele, z) => {
                if (ele.languages_code === languageApp) {
                    return (
                        <div className="child-text px-4" key={z}>
                            <span className="mb-5">{ele?.content_main}</span>
                            <span className="date-upload">
                                {new Date(item?.time_post || item?.date_created).toLocaleDateString('vi-VN')}
                            </span>
                            <label>
                                {languageApp === 'en' ? 'Learn more' : 'Xem thêm'} <i className="fa fa-arrow-right"></i>
                            </label>
                        </div>
                    );
                }
            })}
        </div>
    );

    const renderItem2 = (item, index, blurClass) => (
        <div className="child" onClick={() => handleClick(item?.id)} key={index} style={{ cursor: 'pointer' }}>
            <div className="child-img" style={{ backgroundImage: `url(${getImageUrl(item?.image)})` }}>
                <div className={blurClass}></div>
            </div>
            {item.translations.map((ele, z) => {
                if (ele.languages_code === languageApp) {
                    return (
                        <div className="child-text px-4" key={z}>
                            <span className="mb-5">{ele?.content_main}</span>
                            <span className="date-upload">
                                {new Date(item?.time_post || item?.date_created).toLocaleDateString('vi-VN')}
                            </span>
                            <label>
                                {languageApp === 'en' ? 'Learn more' : 'Xem thêm'} <i className="fa fa-arrow-right"></i>
                            </label>
                        </div>
                    );
                }
            })}
        </div>
    );
    const renderItem1 = (item, index, blurClass) => (
        <div className="child" onClick={() => handleClick(item?.id)} key={index} style={{ cursor: 'pointer' }}>
            <div className="child-img" style={{ backgroundImage: `url(${getImageUrl(item?.image)})` }}>
                <div className={blurClass}></div>
            </div>
            {item.translations.map((ele, z) => {
                if (ele.languages_code === languageApp) {
                    return (
                        <div className="child-text px-4" key={z}>
                            <span className="mb-5">{ele?.content_main}</span>
                            <span className="date-upload">
                                {new Date(item?.time_post || item?.date_created).toLocaleDateString('vi-VN')}
                            </span>
                            <label>
                                {languageApp === 'en' ? 'Learn more' : 'Xem thêm'} <i className="fa fa-arrow-right"></i>
                            </label>
                        </div>
                    );
                }
            })}
        </div>
    );
    const groupedContents = [];
    for (let i = 0; i < news?.length; i += 3) {
        groupedContents.push(news?.slice(i, i + 3));
    }
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 0);
    };
    return (
        <React.Fragment>
            <div className="mb-5">
                <div className="lastest-news-container">
                    <div className="container">
                        {props?.title?.map((item, index) => {
                            if (item.languages_code === languageApp) {
                                return (
                                    <div key={index}>
                                        <h4>{item.title}</h4>
                                        <h1 style={{ color: `${companyInfor?.data[0]?.color_text_heading}` }}>
                                            {item.header}
                                        </h1>
                                    </div>
                                );
                            }
                        })}
                        <div className="list-new row mt-4">
                            {groupedContents.map((group, groupIndex) => (
                                <React.Fragment key={groupIndex}>
                                    {group.length === 1 ? (
                                        <div className="col-12 text-center mt-3">
                                            <div className="col-12 child-new-left1 mt-3">
                                                {renderItem1(group[0], 2, 'blur-blue')}
                                            </div>
                                        </div>
                                    ) : group.length === 2 ? (
                                        <div className="row text-center mt-3 p-0">
                                            <div className="col-lg-6 col-12 child-new-right2 mt-3 ">
                                                {renderItem2(group[0], 2, 'blur-blue')}
                                            </div>
                                            <div className="col-lg-6 col-12 child-new-right2 mt-3">
                                                {renderItem2(group[0], 2, 'blur-blue')}
                                            </div>
                                        </div>
                                    ) : groupIndex % 2 === 0 ? (
                                        <>
                                            <div className="col-lg-6 col-12 child-new-right d-flex flex-column mt-3 ">
                                                {group
                                                    .slice(0, 2)
                                                    .map((item, index) => renderItem(item, index, 'blur-green'))}
                                            </div>
                                            <div className="col-lg-6 col-12 child-new-left mt-3">
                                                {renderItem(group[2], 2, 'blur-blue')}
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="col-lg-6 col-12 child-new-left mt-3">
                                                {renderItem(group[2], 2, 'blur-blue')}
                                            </div>
                                            <div className="col-lg-6 col-12 child-new-right d-flex flex-column mt-3">
                                                {group
                                                    .slice(0, 2)
                                                    .map((item, index) => renderItem(item, index, 'blur-green'))}
                                            </div>
                                        </>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                {news?.length > 0 && (
                    <ReactPaginate
                        previousLabel={languageApp === LANGUAGES.EN ? 'Previous' : 'Trước'}
                        nextLabel={languageApp === LANGUAGES.EN ? 'Next' : 'Sau'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                    />
                )}
            </div>
        </React.Fragment>
    );
});

export default LastestNews;
