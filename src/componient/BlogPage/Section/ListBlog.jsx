import React, { useEffect, useState } from 'react';
import '../../Style/ListBlog.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { path, LANGUAGES } from '../../../utils/constant';
import parse from 'html-react-parser';
import ReactPaginate from 'react-paginate';
import { fetchDataBlogPerPage } from '../../../services/userServices';
const ListBlog = React.memo((props) => {
    const navigate = useNavigate();
    const languageApp = useSelector((state) => state.language.language);
    const [blogs, setBlogs] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(8);
    const fetchBlogs = async (page = 0) => {
        const offset = 4 + page * itemsPerPage;
        const res = await fetchDataBlogPerPage(itemsPerPage, offset);
        if (res.status < 400) {
            setBlogs(res.data.data);
            setPageCount(Math.ceil((res.data?.meta?.total_count - 4) / itemsPerPage));
        }
    };
    useEffect(() => {
        fetchBlogs(currentPage);
    }, [currentPage]);
    const handleClick = (id) => {
        navigate(`${path.BLOG}/${encodeURIComponent(id)}`);
    };
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };
    return (
        <>
            <div className="mb-5">
                {props?.blogs?.length > 0 && (
                    <div className="section-listblog">
                        <div className="container">
                            <div className="row">
                                {blogs?.map((item) => {
                                    const translation = item?.translations?.find(
                                        (ele) => ele.languages_code === languageApp,
                                    );

                                    if (translation) {
                                        return (
                                            <div className="col-lg-3 col-md-4 col-sm-6 col-12 child-item" key={item.id}>
                                                <div className="content">
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${item?.image}`}
                                                        alt="Blog Image"
                                                        onClick={() => handleClick(item?.id)}
                                                        style={{ cursor: 'pointer' }}
                                                    />
                                                    <div className="mt-3" style={{ color: '#189FE0' }}>
                                                        <ul className="mt-3">
                                                            {translation?.tags?.map((tag, index) => (
                                                                <li key={index}>
                                                                    {parse(typeof tag === 'string' ? tag : '')}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h5 onClick={() => handleClick(item?.id)}>
                                                            {parse(
                                                                typeof translation?.content_main === 'string'
                                                                    ? translation?.content_main
                                                                    : '',
                                                            )}
                                                        </h5>
                                                        <p>
                                                            {parse(
                                                                typeof translation?.content === 'string'
                                                                    ? translation?.content
                                                                    : '',
                                                            )}
                                                        </p>
                                                    </div>
                                                    <div className="child-date">
                                                        <span>
                                                            {new Date(
                                                                item?.time_post || item?.date_created,
                                                            ).toLocaleDateString('vi-VN')}
                                                        </span>
                                                    </div>
                                                    <div className="hidden-content d-sm-block d-none">
                                                        <img
                                                            src={`${import.meta.env.VITE_BACKEND_URL}/assets/${item?.image}`}
                                                            alt="Hidden Blog Image"
                                                            onClick={() => handleClick(item?.id)}
                                                            style={{ cursor: 'pointer' }}
                                                        />
                                                        <div className="mt-3" style={{ color: '#189FE0' }}>
                                                            <ul className="mt-3">
                                                                {translation?.tags?.map((tag, index) => (
                                                                    <li key={index}>
                                                                        {parse(typeof tag === 'string' ? tag : '')}
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <h5 onClick={() => handleClick(item?.id)}>
                                                                {parse(
                                                                    typeof translation?.content_main === 'string'
                                                                        ? translation?.content_main
                                                                        : '',
                                                                )}
                                                            </h5>
                                                            <p>
                                                                {parse(
                                                                    typeof translation?.content === 'string'
                                                                        ? translation?.content
                                                                        : '',
                                                                )}
                                                            </p>
                                                        </div>
                                                        <div className="child-date">
                                                            <span>
                                                                {new Date(
                                                                    item?.time_post || item?.date_created,
                                                                ).toLocaleDateString('vi-VN')}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        </div>
                    </div>
                )}
                {blogs?.length > 0 && (
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
        </>
    );
});

export default ListBlog;
