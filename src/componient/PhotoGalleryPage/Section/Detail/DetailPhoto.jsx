import React, { useState, useEffect, useRef } from 'react';
import '../../../Style/DetailPhoto.scss';
import { useSelector } from 'react-redux';
import { LANGUAGES, STATUS, path } from '../../../../utils/constant';
import { useParams } from 'react-router';
import { Modal } from 'reactstrap';
import { fetchDataDetailPhoto } from '../../../../services/userServices';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
const DetailPhoto = React.memo(() => {
    const languageApp = useSelector((state) => state.language.language);
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [dataPage, setDataPage] = useState(null);
    const [sliderImages, setSliderImages] = useState([]);
    const sliderRef = useRef(null);
    const { id } = useParams();
    const navigate = useNavigate();

    const CustomPrevArrow = ({ className, onClick }) => (
        <button className={`${className} custom-prev`} onClick={onClick} aria-label="Previous"></button>
    );

    const CustomNextArrow = ({ className, onClick }) => (
        <button className={`${className} custom-next`} onClick={onClick} aria-label="Next"></button>
    );

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        draggable: false,
        fade: true,
    };

    const toggleModal = () => setModalOpen(!isModalOpen);

    const openImageModal = (imageUrl, index) => {
        setSelectedImage({ url: imageUrl, index });
        setModalOpen(true);
    };

    useEffect(() => {
        const fetch = async () => {
            const res = await fetchDataDetailPhoto(id);
            if (res?.status < 400) {
                if (res.data.data?.status === STATUS?.PUBLISH) {
                    const data = res.data.data;
                    const blocksToUpdate = { content: [], title: [] };
                    blocksToUpdate.content.push(data?.images);
                    data?.translations?.forEach((ele) => {
                        if (ele?.languages_code === languageApp) {
                            blocksToUpdate.title.push(ele?.title);
                        }
                    });
                    setDataPage(blocksToUpdate);
                }
            }
        };
        fetch();
    }, [id, languageApp]);

    useEffect(() => {
        if (dataPage?.content) {
            const images = dataPage.content?.flat().map((ele) => ({
                url: `${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.directus_files_id?.id}`,
                id: ele?.directus_files_id,
            }));
            setSliderImages(images);
        }
    }, [dataPage]);
    useEffect(() => {
        if (selectedImage && sliderImages.length > 0) {
            const updatedImages = [...sliderImages];
            const selectedImageIndex = updatedImages.findIndex((img) => img.url === selectedImage.url);
            if (selectedImageIndex !== -1) {
                const [selected] = updatedImages.splice(selectedImageIndex, 1);
                updatedImages.unshift(selected);
            }
            setSliderImages(updatedImages);
        }
    }, [selectedImage]);
    const goToGallery = () => {
        navigate(path.PHOTO_GALLERY);
    };
    return (
        <>
            {dataPage?.content && dataPage?.title && (
                <div className="detail-photo-gallery-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row justify-content-between mb-3">
                            <div>
                                <h4 className="mb-sm-0 mb-4">{dataPage?.title[0]}</h4>
                            </div>
                            <div
                                className="text-center d-flex justify-content-center go_back"
                                style={{ cursor: 'pointer' }}
                                onClick={() => {
                                    goToGallery();
                                }}
                            >
                                <p className="d-flex text-center align-items-center ">
                                    <FontAwesomeIcon icon={faArrowLeftLong} className="me-2 arrows" />
                                    <span>{languageApp === LANGUAGES.EN ? 'Back' : 'Quay lại'}</span>
                                </p>
                            </div>
                        </div>
                        <div className="row mt-5">
                            {dataPage.content?.flat().map((ele, index) => {
                                if (!ele?.directus_files_id) {
                                    return null;
                                }
                                const imageUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.directus_files_id?.id}`;
                                return (
                                    <div className="col-md-4 col-6 text-center mb-4" key={index}>
                                        <div className="photo-child">
                                            <img
                                                src={imageUrl}
                                                className="mb-2"
                                                alt="Image"
                                                onClick={() => openImageModal(imageUrl, index)}
                                            />
                                        </div>
                                        <p>
                                            {ele?.directus_files_id?.description
                                                ? ele?.directus_files_id?.description
                                                : ele?.directus_files_id?.title}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <Modal isOpen={isModalOpen} toggle={toggleModal} className="image-modal" size="lg" centered>
                        {selectedImage ? (
                            <Slider ref={sliderRef} {...settings} className="p-0 m-0">
                                {sliderImages.map((img, index) => (
                                    <div className="photo-child" key={index}>
                                        <img src={img.url} className="mb-2" alt="Image" />
                                    </div>
                                ))}
                            </Slider>
                        ) : (
                            <p>Loading image...</p>
                        )}
                    </Modal>
                </div>
            )}
        </>
    );
});

export default DetailPhoto;
