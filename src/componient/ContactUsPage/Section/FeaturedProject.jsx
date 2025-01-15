import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/image/arrow-right.svg';
import '../../Style/\Project.scss';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path } from '../../../utils/constant';
import { fetchDataProjectPerPage } from '../../../services/userServices';
import ReactPaginate from 'react-paginate';
const FeaturedProject = React.memo((props) => {
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const [itemsToRender, setItemToRender] = useState(null);
    const languageApp = useSelector((state) => state.language.language);
    const [projects, setProjects] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(6);
    useEffect(() => {
        if (props?.data) {
            setItemToRender(props.data);
        }
    }, [props]);
    const fetchProjects = async (page = 0) => {
        const offset = page * itemsPerPage;
        const res = await fetchDataProjectPerPage(itemsPerPage, offset);
        if (res.status < 400) {
            setProjects(res.data.data);
            setPageCount(Math.ceil(res.data?.meta?.total_count / itemsPerPage));
        }
    };
    useEffect(() => {
        fetchProjects(currentPage);
    }, [currentPage]);
    const handleClick = (title) => {
        navigate(`${path.PROJECTS}/${encodeURIComponent(title)}`);
    };
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };
    return (
        <>
            {projects?.length > 0 && (
                <div className="project-container">
                    <div className="container">
                        {props?.title?.translations?.map((item, index) => {
                            if (item.languages_code === languageApp) {
                                return <h4 key={index}>{item?.title}</h4>;
                            }
                        })}
                        <div className="row">
                            {projects.map((ele) => {
                                const translatedItems = ele?.translations?.filter(
                                    (item) => item.languages_code === languageApp,
                                );
                                return translatedItems.map((item, index) => (
                                    <div className="col-lg-4 col-sm-6 col-12 child-item" key={`${ele.id}-${index}`}>
                                        <div className="content">
                                            <img src={`${backendUrl}/assets/${ele?.image}`} alt={item?.content_main} />
                                            <div>
                                                <h5>{item?.content_main}</h5>
                                                <p>{item?.content}</p>
                                            </div>
                                            <div className="company-logo">
                                                <img
                                                    src={`${backendUrl}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                                                    className="logo"
                                                    alt="company-logo"
                                                />
                                                <span>{companyInfor?.data[0]?.company_name}</span>
                                            </div>
                                            <div className="content2">
                                                <div
                                                    className="p-0 d-flex flex-column justify-content-between"
                                                    style={{ height: '100%' }}
                                                >
                                                    <div className="p-0">
                                                        <h5>{item?.content_main}</h5>
                                                        <p>{item?.content}</p>
                                                    </div>
                                                    <div className="mb-3 p-0">
                                                        <span
                                                            className="button mb-3"
                                                            onClick={() => handleClick(ele?.id)}
                                                        >
                                                            {languageApp === LANGUAGES.EN ? 'Learn more' : 'Xem thêm'}{' '}
                                                            <img src={arrow} alt="Arrow" />
                                                        </span>
                                                        <img
                                                            src={`${backendUrl}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                                                            className="logo"
                                                            alt="company-logo"
                                                        />
                                                        <span>{companyInfor?.data[0]?.company_name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ));
                            })}
                        </div>
                    </div>
                    {projects?.length > 0 && (
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
            )}
        </>
    );
});

export default FeaturedProject;
