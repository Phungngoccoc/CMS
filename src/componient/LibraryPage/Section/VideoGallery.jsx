import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReactPlayer from 'react-player';
import { Modal, ModalBody } from 'reactstrap';
import '../../Style/VideoGallery.scss';
import united2 from '../../../assets/image/Untitled-2.webp';
import arrow from '../../../assets/image/arrow-right.svg';
import url from '../../../assets/video/a.mp4';
import { STATUS } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';
// Hàm kiểm tra URL
const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

const VideoGallery = React.memo((props) => {
    const language = useSelector((state) => state.language.language);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const toggleModal = () => setModalOpen(!isModalOpen);
    const navigate = useNavigate();
    // Giới hạn tối đa 6 phần tử
    const itemsToRender = props?.data?.item?.content?.slice(0, 6);
    const SwitchPage = (path) => {
        navigate(path);
    };
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="video-gallery-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3">
                            <h4 className="mb-sm-0 mb-4">{props.data.item?.title}</h4>
                            <a
                                className="button"
                                onClick={() => {
                                    SwitchPage('/video-gallery');
                                }}
                            >
                                {language === 'en' ? 'Watch more' : 'Xem thêm'} <img src={arrow} alt="Arrow" />
                            </a>
                        </div>
                        <div className="row">
                            {itemsToRender?.map((ele, index) => {
                                return (
                                    ele?.item?.status === STATUS.PUBLISH && (
                                        <div className="col-sm-4 col-6 text-center mb-4" key={index}>
                                            <div
                                                className="photo-child"
                                                onClick={() => {
                                                    const videoUrl = isValidUrl(ele?.item?.video)
                                                        ? ele.item.video
                                                        : `${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.item?.video}`;
                                                    setSelectedVideo(videoUrl);
                                                    toggleModal();
                                                }}
                                            >
                                                <img
                                                    src={
                                                        isValidUrl(ele?.item?.image)
                                                            ? ele.item.image
                                                            : `${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.item?.image}`
                                                    }
                                                    className="mb-2 clickable"
                                                    alt={ele?.item?.title || 'Video thumbnail'}
                                                />
                                                <span>{ele?.item?.title}</span>
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
                                    />
                                ) : (
                                    <p>Loading video...</p>
                                )}
                            </ModalBody>
                        </Modal>
                    </div>
                </div>
            )}
        </>
    );
});

export default VideoGallery;
