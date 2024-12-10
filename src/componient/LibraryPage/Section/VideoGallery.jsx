import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import { Modal, ModalBody } from "reactstrap";
import "../../Style/VideoGallery.scss";
import united2 from "../../../assets/image/Untitled-2.webp";
import arrow from "../../../assets/image/arrow-right.svg";
import url from "../../../assets/video/a.mp4";

const VideoGallery = React.memo(() => {
    const language = useSelector((state) => state.language.language);

    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const toggleModal = () => setModalOpen(!isModalOpen);

    const items = [
        { id: 1, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD1" },
        { id: 2, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD2" },
        { id: 3, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD3" },
        { id: 4, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD1" },
        { id: 5, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD2" },
        { id: 6, thumbnail: united2, videoUrl: url, title: "Khu XLNT THÀNH THÀNH CÔNG GD3" },
    ];

    return (
        <div className="photo-gallery-container">
            <div className="container">
                <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3">
                    <h4 className="mb-sm-0 mb-4">Video Gallery</h4>
                    <a className="button">
                        {language === "en" ? "Watch more" : "Xem thêm"}{" "}
                        <img src={arrow} alt="Arrow" />
                    </a>
                </div>
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-4 text-center mb-4">
                            <div
                                className="photo-child"
                                onClick={() => {
                                    setSelectedVideo(item.videoUrl);
                                    toggleModal();
                                }}
                            >
                                <img src={item.thumbnail} className="mb-2 clickable" alt={item.title} />
                                <span>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <Modal isOpen={isModalOpen} toggle={toggleModal} className="video-modal" size="lg" centered>
                    <ModalBody>
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
                    </ModalBody>
                </Modal>
            </div>
        </div>
    );
});

export default VideoGallery;
