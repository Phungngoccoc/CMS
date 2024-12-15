import React, { useState } from 'react';
import '../../Style/ListJob.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const isValidUrl = (url) => {
    try {
        return Boolean(new URL(url));
    } catch (e) {
        return false;
    }
};

const ListJob = React.memo((props) => {
    const [search, setSearch] = useState('');
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();

    const getImageUrl = (imagePath) => {
        const backendUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/`;
        return isValidUrl(imagePath) ? imagePath : `${backendUrl}${imagePath}`;
    };

    const limitedData = props?.data?.slice(0, 12);
    const handleClick = (title) => {
        navigate(`/careers/${encodeURIComponent(title)}`);
    };
    return (
        <>
            <div className="section-listjob">
                <div className="container">
                    <h4>{languageApp === 'en' ? 'JOB VACANCY' : 'VIỆC LÀM'}</h4>
                    <div className="row">
                        <div className="col-12 d-flex justify-content-end align-items-center py-3">
                            <div className="d-flex justify-content-center align-items-center search-box ">
                                <div>
                                    <i className="fa fa-search child"></i>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder={languageApp === 'en' ? 'Search CMC Global' : 'Tìm kiếm CMC Global'}
                                        value={search}
                                        onChange={(event) => setSearch(event.target.value)}
                                    />
                                </div>
                                <div>
                                    <i className="fa fa-times-circle child" onClick={() => setSearch('')}></i>
                                </div>
                            </div>
                        </div>

                        {limitedData.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>{languageApp === 'en' ? 'No jobs available' : 'Không có công việc nào'}</p>
                            </div>
                        ) : (
                            limitedData.map((ele, index) => (
                                <div className="col-lg-3 col-sm-6 col-12 child-item" key={index}>
                                    <div className="content">
                                        <img src={getImageUrl(ele.item.image)} alt={ele.item.job_name} />
                                        <div className="mt-3" style={{ color: '#189FE0' }}>
                                            <span>{languageApp === 'en' ? 'Available in:' : 'Có sẵn tại'} </span>
                                            <span>{ele.item.location}</span>
                                        </div>
                                        <div>
                                            <h5>{ele.item.job_name}</h5>
                                            <p>{ele.item.job_title}</p>
                                        </div>
                                        <div className="content2">
                                            <div className="px-0" style={{ color: '#189FE0' }}>
                                                <span>{ele.item.location}</span>
                                            </div>
                                            <h5>{ele.item.job_name}</h5>
                                            <p>{ele.item.job_title}</p>
                                            <a className="button" onClick={() => handleClick(ele.id)}>
                                                {languageApp === 'en' ? 'Learn more' : 'Xem thêm'}{' '}
                                                <img src={arrow} alt="arrow" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    );
});

export default ListJob;
