import React, { useEffect, useState } from 'react';
import '../../Style/ListJob.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { path, LANGUAGES } from '../../../utils/constant';
import ReactPaginate from 'react-paginate';

const ListJob = React.memo((props) => {
    const [search, setSearch] = useState('');
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(0);
    const [pageBeforeSearch, setPageBeforeSearch] = useState(0);
    const [dataPage, setDataPage] = useState([]);

    useEffect(() => {
        if (search.trim() === '') {
            setCurrentPage(pageBeforeSearch);
        } else {
            setDataPage(props?.data);
        }
    }, [search]);

    useEffect(() => {
        setDataPage(props?.data);
    }, [props]);

    const itemsPerPage = 6;

    const currentDate = new Date();

    const sortedJobs = dataPage?.slice()?.sort((a, b) => {
        const aTime = new Date(a.last_time);
        const bTime = new Date(b.last_time);
        const isAExpired = aTime < currentDate;
        const isBExpired = bTime < currentDate;

        if (isAExpired && !isBExpired) return 1;
        if (!isAExpired && isBExpired) return -1;
        return 0;
    });

    const filteredJobs = sortedJobs?.filter((ele) =>
        ele.translations.some(
            (translation) =>
                translation.languages_code === languageApp &&
                translation.job_name.toLowerCase().includes(search.toLowerCase()),
        ),
    );

    const pageCount = Math.ceil(filteredJobs.length / itemsPerPage);
    const currentJobs = filteredJobs.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        setPageBeforeSearch(data.selected);
    };

    const handleClick = (id) => {
        navigate(`${path.CAREER}/${encodeURIComponent(id)}`);
    };

    const getImageUrl = (imagePath) => {
        const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/`;
        return `${backendUrl}${imagePath}`;
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value.trim() !== '') {
            setCurrentPage(0);
        }
    };
    return (
        <div className="section-listjob">
            <div className="container mb-5">
                <h4>
                    {props?.title?.item?.translations?.map((item) => {
                        if (item.languages_code === languageApp) {
                            return item.title;
                        }
                        return null;
                    })}
                </h4>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center py-3">
                        <div className="d-flex justify-content-center align-items-center search-box">
                            <div>
                                <i className="fa fa-search child"></i>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={languageApp === 'en' ? 'Search' : 'Tìm kiếm'}
                                    value={search}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div>
                                <i
                                    className="fa fa-times-circle child"
                                    onClick={() => {
                                        setSearch('');
                                        setCurrentPage(0); // Reset lại trang khi xóa tìm kiếm
                                    }}
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            </div>
                        </div>
                    </div>
                    {currentJobs && currentJobs.length > 0 ? (
                        currentJobs.map((ele) => (
                            <div className="col-lg-4 col-xxl-3 col-sm-6 col-12 child-item" key={ele?.id}>
                                <div className="content">
                                    <img src={getImageUrl(ele?.image)} alt={ele?.translations[0]?.job_name || 'job'} />
                                    {ele?.translations.map((ite) => {
                                        if (ite.languages_code === languageApp) {
                                            return (
                                                <div key={ite.id} className="p-0">
                                                    <div className="mt-3" style={{ color: '#189FE0', height: '25px' }}>
                                                        <span>{ite?.location}</span>
                                                    </div>
                                                    <div>
                                                        <h5>{ite?.job_name}</h5>
                                                        <p>{ite?.job_title}</p>
                                                    </div>
                                                    <div className="content2">
                                                        <div className="px-0" style={{ color: '#189FE0' }}>
                                                            <span>{ite?.location}</span>
                                                        </div>
                                                        <h5>{ite?.job_name}</h5>
                                                        <p>{ite?.job_title}</p>
                                                        <span className="button" onClick={() => handleClick(ele?.id)}>
                                                            {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                                            <img src={arrow} alt="arrow" />
                                                        </span>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h5>
                                {languageApp === 'en'
                                    ? 'No jobs found for your search.'
                                    : 'Không tìm thấy công việc phù hợp với tìm kiếm của bạn.'}
                            </h5>
                        </div>
                    )}
                </div>
                {filteredJobs?.length > 0 && (
                    <ReactPaginate
                        key={search}
                        previousLabel={languageApp === LANGUAGES.EN ? 'Previous' : 'Trước'}
                        nextLabel={languageApp === LANGUAGES.EN ? 'Next' : 'Sau'}
                        breakLabel={'...'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        forcePage={currentPage}
                    />
                )}
            </div>
        </div>
    );
});

export default ListJob;
