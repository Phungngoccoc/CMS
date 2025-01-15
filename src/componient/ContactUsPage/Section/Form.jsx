import React, { useState, useEffect } from 'react';
import arrow from '../../../assets/image/arrow-right.svg';
import '../../Style/Form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getdataCompanyInfor } from '../../../features/companyInfor';
import Map from './Map';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LANGUAGES, path } from '../../../utils/constant';
import axios from 'axios';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';
import parse from 'html-react-parser';
import { SendFormData } from '../../../services/userServices';
const Form = React.memo((props) => {
    const dispatch = useDispatch();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const languageApp = useSelector((state) => state.language.language);
    const location = useLocation();
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    const [dataCompany, setDataCompany] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        content: '',
    });
    const [errors, setErrors] = useState({
        fullName: '',
        email: '',
        phone: '',
        content: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (companyInfor) {
            const res = companyInfor.data[0] ?? null;
            if (res) {
                setDataCompany(companyInfor?.data[0]);
            }
        } else {
            dispatch(getdataCompanyInfor());
        }
    }, [props, companyInfor]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        let newErrors = { fullName: '', email: '', phone: '', content: '' };

        if (!formData.fullName) {
            newErrors.fullName = languageApp === LANGUAGES.EN ? 'Please enter your name' : 'Vui lòng nhập họ tên';
            valid = false;
        }

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!formData.email || !emailRegex.test(formData.email)) {
            newErrors.email = languageApp === LANGUAGES.EN ? 'Invalid email' : 'Email không hợp lệ';
            valid = false;
        }

        const phoneRegex = /^[0-9]{10,11}$/;
        if (!formData.phone || !phoneRegex.test(formData.phone)) {
            newErrors.phone = languageApp === LANGUAGES.EN ? 'Invalid phone number' : 'Số điện thoại không hợp lệ';
            valid = false;
        }

        if (!formData.content) {
            newErrors.content = languageApp === LANGUAGES.EN ? 'Please enter content' : 'Vui lòng nhập nội dung';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const res = await SendFormData(formData.fullName, formData.email, formData.phone, formData.content);
                if (res.status < 400) {
                    Swal.fire({
                        icon: 'success',
                        title:
                            languageApp === LANGUAGES.EN ? 'Information sending success' : 'Gửi thông tin thành công',
                        scrollbarPadding: false,
                        timer: 1000,
                        showConfirmButton: false,
                    });
                    setFormData({ fullName: '', email: '', phone: '', content: '' });
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: languageApp === LANGUAGES.EN ? 'Information sending failed' : 'Gửi thông tin thất bại',
                        scrollbarPadding: false,
                        timer: 1000,
                        showConfirmButton: false,
                    });
                }
            } catch (e) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(e.message);
                }
                Swal.fire({
                    icon: 'error',
                    title: languageApp === LANGUAGES.EN ? 'Information sending failed' : 'Gửi thông tin thất bại',
                    scrollbarPadding: false,
                    timer: 1000,
                    showConfirmButton: false,
                });
            } finally {
                setIsSubmitting(false);
            }
        }
    };
    const renderBlock = (block) => {
        if (block?.data === null || block?.data === undefined) return null;
        switch (block.type) {
            case 'header':
                return (
                    <h5 className="my-2 fw-bold" key={block.id}>
                        {parse(block.data.text)}
                    </h5>
                );
            case 'paragraph':
                return (
                    <p className="my-1" key={block.id}>
                        {parse(block.data.text)}
                    </p>
                );

            default:
                return null;
        }
    };
    return (
        <>
            {location.pathname === path.CONTACT_US && (
                <Helmet>
                    <title>{`Contact Us - ${companyInfor?.data?.[0]?.company_name}`}</title>
                    <meta
                        name="description"
                        content={`Get in touch with ${companyInfor?.data?.[0]?.company_name}. We are here to answer your questions and provide support.`}
                    />
                    <meta property="og:title" content={`Contact Us - ${companyInfor?.data?.[0]?.company_name}`} />
                    <meta
                        property="og:description"
                        content={`Get in touch with ${companyInfor?.data?.[0]?.company_name}. We are here to answer your questions and provide support.`}
                    />
                    <meta
                        property="og:image"
                        content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                    />
                    <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.CONTACT_US}`} />
                    <meta property="og:type" content="website" />
                </Helmet>
            )}

            {languageApp && dataCompany && (
                <div
                    className={`form-container ${location.pathname === path.CONTACT_US ? 'space-footer' : ''}`}
                    data-aos="fade-up"
                >
                    <div className="container">
                        {props?.data?.item?.title && <h4>{props?.data?.item?.title}</h4>}
                        <div className="row">
                            <div className="col-sm-6 col-lg-4 col-12 left">
                                {dataCompany?.translations && dataCompany?.translations.length > 0 ? (
                                    dataCompany?.translations.map((item, index) => {
                                        if (item?.languages_code === languageApp) {
                                            const address = languageApp === 'en' ? 'Address' : 'Địa chỉ';
                                            const phone = languageApp === 'en' ? 'Phone' : 'Điện thoại';
                                            return (
                                                <div key={index}>
                                                    {item?.address?.blocks?.map((block, index) =>
                                                        renderBlock(block, index),
                                                    )}
                                                    <br />
                                                    <p>
                                                        Website: {dataCompany?.website_url}
                                                        <br />
                                                        Email: {dataCompany?.email}
                                                    </p>
                                                </div>
                                            );
                                        }
                                        return null;
                                    })
                                ) : (
                                    <p>{languageApp === 'en' ? 'No translation available' : 'Không có bản dịch'}</p>
                                )}
                            </div>

                            <div className="col-sm-6 col-lg-4 col-12 right">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="fullName"
                                            name="fullName"
                                            placeholder={languageApp === 'vi' ? 'Họ tên' : 'Full name'}
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                        />
                                        {errors.fullName && <p className="error mt-2 ps-1">{errors.fullName}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                        {errors.email && <p className="error mt-2 ps-1">{errors.email}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            name="phone"
                                            placeholder={languageApp === 'en' ? 'Phone' : 'Điện thoại'}
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                        {errors.phone && <p className="error mt-2 ps-1">{errors.phone}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            id="content"
                                            name="content"
                                            placeholder={languageApp === 'en' ? 'Content' : 'Nội dung'}
                                            rows="3"
                                            value={formData.content}
                                            onChange={handleInputChange}
                                        ></textarea>
                                        {errors.content && <p className="error mt-2 ps-1">{errors.content}</p>}
                                    </div>
                                    <div>
                                        <button type="submit" className="button" disabled={isSubmitting}>
                                            {languageApp === 'en' ? 'Send message' : 'Gửi tin nhắn'}{' '}
                                            <img src={arrow} alt="arrow" />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div className="col-lg-4 col-12 map">
                                <Map location={dataCompany?.map?.coordinates} iframe={dataCompany?.iframe_map} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Form;
