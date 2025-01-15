import React, { useEffect, useState } from 'react';
import '../../Style/RelatedJob.scss';
import parse from 'html-react-parser';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { path, LANGUAGES, STATUS } from '../../../utils/constant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { getDataCareer } from '../../../features/careerSlice';
const RelatedJob = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const { dataCareer } = useSelector((state) => state.dataCareer);
    const [dataPage, setdataPage] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = (id) => {
        navigate(`${path.CAREER}/${encodeURIComponent(id)}`);
    };
    useEffect(() => {
        if (dataCareer === null) {
            dispatch(getDataCareer());
        }
    }, []);
    useEffect(() => {
        if (dataCareer !== null) {
            const blocksToUpdate = [];
            dataCareer.data.forEach((item) => {
                if (item.status === STATUS.PUBLISH && item?.id !== Number(props.idSkip)) {
                    blocksToUpdate.push(item);
                }
            });
            setdataPage(blocksToUpdate);
        }
    }, [dataCareer, languageApp, props.idSkip]);
    return (
        <>
            <div className="related-job-container">
                <div className="container">
                    <div className="mb-4">
                        <h3>{languageApp === LANGUAGES.EN ? 'Related Jobs' : 'Công việc liên quan'}</h3>
                    </div>
                    <div className="related-job d-flex">
                        {dataPage.length === 0 ? (
                            <div className="col-12 text-center">
                                <p>
                                    {languageApp === 'en' ? 'No related job available' : 'Không có công việc liên quan'}
                                </p>
                            </div>
                        ) : (
                            dataPage.slice(0, 6).map((block, index) => {
                                if (block?.status === STATUS.PUBLISH) {
                                    return block?.translations.map((ele, z) => {
                                        if (ele.languages_code == languageApp) {
                                            return (
                                                <div className="child" key={index}>
                                                    <div className="job-name">
                                                        <label>
                                                            {parse(
                                                                typeof ele?.job_name === 'string' ? ele?.job_name : '',
                                                            )}
                                                        </label>
                                                    </div>
                                                    <p className="mt-5 mb-4">
                                                        {parse(
                                                            typeof ele?.job_title === 'string' ? ele?.job_title : '',
                                                        )}
                                                    </p>
                                                    <span>
                                                        <FontAwesomeIcon
                                                            icon={faLocationDot}
                                                            className="me-3"
                                                            size="lg"
                                                        />
                                                        Available in:{' '}
                                                        {parse(typeof ele?.location === 'string' ? ele?.location : '')}
                                                    </span>
                                                    <br />
                                                    <button
                                                        className="btn-gadient mt-4"
                                                        onClick={() => handleClick(block?.id)}
                                                    >
                                                        {languageApp === LANGUAGES.EN ? 'Learn more' : 'Xem thêm'}
                                                    </button>
                                                </div>
                                            );
                                        }
                                    });
                                }
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
});

export default RelatedJob;
