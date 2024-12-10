import React, { useState } from "react";
import "../../Style/VideoModal.scss";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import url from "../../../../assets/video/a.mp4";
import { Modal, ModalBody } from "reactstrap";

const VideoModal = React.memo((props) => {
    const { isOpen, toggleModal, videoUrl } = props; // Nhận trạng thái mở, hàm toggle và URL video qua props
    const language = useSelector((state) => state.language.language);

    return (
        <Modal isOpen={isOpen} toggle={toggleModal} className="video-modal">
            <ModalBody>
                <ReactPlayer
                    url={videoUrl || url} // Dùng URL truyền vào, nếu không có thì dùng URL mặc định
                    playing={isOpen} // Phát video khi modal mở
                    loop={false}
                    controls={true}
                    volume={1}
                    muted={false}
                    width="100%"
                    height="100%"
                />
            </ModalBody>
        </Modal>
    );
});

export default VideoModal;
