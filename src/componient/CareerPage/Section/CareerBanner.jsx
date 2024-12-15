import React from 'react';
import '../../Style/CareerBanner.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';

const getImageUrl = (image) => {
    if (!image) return '';
    const isFullUrl = image.startsWith('http://') || image.startsWith('https://');
    return isFullUrl ? image : `${import.meta.env.VITE_BACKEND_URL}/assets/${image}`;
};

const CareerBanner = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);

    const imageUrl = getImageUrl(props?.data?.item?.image);

    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && languageApp && (
                <div className="careerbanner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="career-banner-content">
                        <div className="container">
                            <div className="row container">
                                <div className="col-12 col-md-10 pt-4 ">
                                    <h1 className="col-md-8 col-12 ">{props.data.item?.title}</h1>
                                    <p className="col-md-8 col-12">{props.data.item?.content}</p>
                                    <a className="button">
                                        {languageApp === 'en' ? 'Apply now' : 'Nộp đơn ngay'}{' '}
                                        <img src={arrow} alt="Arrow" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default CareerBanner;
