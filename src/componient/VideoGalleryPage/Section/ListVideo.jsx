import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import '../../Style/ListVideo.scss';
import { LANGUAGES, STATUS } from '../../../utils/constant';
import ReactPaginate from 'react-paginate';
import { fetchDataVideo } from '../../../services/userServices';
const ListVideo = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(6);
    const toggleModal = () => setModalOpen(!isModalOpen);
    const fetchVideos = async (page = 0) => {
        const offset = page * itemsPerPage;
        const res = await fetchDataVideo(itemsPerPage, offset);
        if (res.status < 400) {
            setVideos(res.data.data);
            setPageCount(Math.ceil(res.data?.meta?.total_count / itemsPerPage));
        }
    };
    useEffect(() => {
        fetchVideos(currentPage);
    }, [currentPage]);
    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo(0, 0);
    };
    const itemsToRender = props?.data?.item?.content;
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="video-gallery-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row flex-column justify-content-between mb-3">
                            {props.data.item?.translations?.map((ele, z) => {
                                if (ele.languages_code === languageApp) {
                                    return (
                                        <h4 key={z} className="mb-sm-0 mb-4">
                                            {ele?.title}
                                        </h4>
                                    );
                                }
                            })}
                        </div>
                        <div className="row">
                            {videos?.length > 0 &&
                                videos?.map((ele, index) => {
                                    return (
                                        ele?.status === STATUS.PUBLISH && (
                                            <div className="col-sm-4 col-6 text-center mb-4" key={index}>
                                                <div
                                                    className="photo-child"
                                                    onClick={() => {
                                                        const videoUrl = `${ele?.url}`;
                                                        setSelectedVideo(videoUrl);
                                                        toggleModal();
                                                    }}
                                                >
                                                    <img
                                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.image}`}
                                                        className="mb-2 clickable"
                                                        alt={ele?.item?.title || 'Video thumbnail'}
                                                    />
                                                    {ele?.translations?.map((items, z) => {
                                                        if (items.languages_code === languageApp) {
                                                            return <span key={z}>{items?.title}</span>;
                                                        }
                                                    })}
                                                </div>
                                            </div>
                                        )
                                    );
                                })}
                        </div>
                        <Modal isOpen={isModalOpen} toggle={toggleModal} className="video-modal" size="lg" centered>
                            <ModalBody>
                                {selectedVideo ? (
                                    <ReactPlayer
                                        url={selectedVideo}
                                        playing={true}
                                        loop={false}
                                        controls={true}
                                        volume={1}
                                        muted={false}
                                        width="100%"
                                        height="100%"
                                        style={{ aspectRatio: '16/9' }}
                                    />
                                ) : (
                                    <p>Loading video...</p>
                                )}
                            </ModalBody>
                        </Modal>
                        {videos?.length > 0 && (
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
                </div>
            )}
        </>
    );
});

export default ListVideo;
