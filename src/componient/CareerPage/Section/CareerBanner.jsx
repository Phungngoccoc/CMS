import React from 'react';
import '../../Style/CareerBanner.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';

const getImageUrl = (image) => {
    if (!image) return '';
    const isFullUrl = image.startsWith('http://') || image.startsWith('https://');
    return isFullUrl ? image : `${import.meta.env.VITE_BACKEND_URL}/assets/${image}`;
};

const CareerBanner = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const imageUrl = getImageUrl(props?.data?.item?.image);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    return (
        <>
            {props?.data && props?.data?.item?.image && (
                <div className="careerbanner-container" style={{ backgroundImage: `url(${imageUrl})` }}>
                    <div className="career-banner-content">
                        <div className="container">
                            <div className="row container">
                                <div className="col-12 col-md-10 pt-4 ">
                                    {props.data?.item?.translations?.map((item, index) => {
                                        if (item.languages_code === languageApp) {
                                            return (
                                                <div key={index}>
                                                    <h1
                                                        style={{
                                                            color: `${companyInfor?.data[0]?.color_text_heading}`,
                                                        }}
                                                        className="col-md-8 col-12"
                                                    >
                                                        {item.title}
                                                    </h1>
                                                    <p className="col-md-7 col-12">{item.header}</p>
                                                </div>
                                            );
                                        }
                                    })}
                                    <span className="button" onClick={props.onButtonClick}>
                                        {languageApp === 'en' ? 'See Job List' : 'Xem danh sách công việc'}{' '}
                                        <img src={arrow} alt="Arrow" />
                                    </span>
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
