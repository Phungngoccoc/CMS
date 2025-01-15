import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { path, LANGUAGES, STATUS } from '../../../utils/constant';
import '../../Style/CareerDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import calendar from '../../../assets/image/calendar.svg';
import education from '../../../assets/image/education.svg';
import phone from '../../../assets/image/phone.svg';
import level from '../../../assets/image/level.svg';
import work from '../../../assets/image/work.svg';
import parse from 'html-react-parser';
import RelatedJob from './RelatedJob';
import Swal from 'sweetalert2';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Helmet } from 'react-helmet-async';
import moment from 'moment-timezone';
import { fetchDataJob, sendDataApply, upLoadCVFile } from '../../../services/userServices';
const CareerDetailPage = React.memo(() => {
    const [dataPage, setDataPage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isShowRelated, setIsShowRelated] = useState(false);
    const languageApp = useSelector((state) => state.language.language);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        cvFile: null,
        recommendationLetter: '',
    });
    const [formError, setFormError] = useState({
        fullName: null,
        email: null,
        phone: null,
        cvFile: null,
    });
    const [fileName, setFileName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        setFormError({
            fullName: null,
            email: null,
            phone: null,
            cvFile: null,
        });
    };

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await fetchDataJob(id);
                if (res.status < 400) {
                    if (res?.data?.data) {
                        const data = res.data.data;
                        setDataPage(data);
                    }
                } else {
                    navigate(path.CAREER);
                }
            } catch (err) {
                navigate(path.CAREER);
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(err.message);
                }
            } finally {
                setIsShowRelated(true);
            }
        };
        fetch();
    }, [id]);
    const renderBlockLeft = (block) => {
        if (block?.data === null || block?.data === undefined) return null;
        switch (block.type) {
            case 'header':
                switch (block?.data?.level) {
                    case 1:
                        return (
                            <h1 className="title mb-4 mt-4 header-title level-1" key={block.id}>
                                {parse(block.data.text)}
                            </h1>
                        );
                    case 2:
                        return (
                            <h2 className="title mb-4 mt-4 header-title level-2" key={block.id}>
                                {parse(block.data.text)}
                            </h2>
                        );
                    case 3:
                        return (
                            <h3 className="title mb-4 mt-4 header-title level-3" key={block.id}>
                                {parse(block.data.text)}
                            </h3>
                        );
                    case 4:
                        return (
                            <h4 className="title mb-4 mt-4 header-title level-4" key={block.id}>
                                {parse(block.data.text)}
                            </h4>
                        );
                    case 5:
                        return (
                            <h5 className="title mb-4 mt-4 header-title level-5" key={block.id}>
                                {parse(block.data.text)}
                            </h5>
                        );
                    case 6:
                        return (
                            <h6 className="title mb-4 mt-4 header-title level-6" key={block.id}>
                                {parse(block.data.text)}
                            </h6>
                        );
                    default:
                        return null;
                }
            case 'paragraph':
                return (
                    <li className="my-1" key={block.id}>
                        {parse(block.data.text)}
                    </li>
                );
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return imageUrlLeft ? (
                    <React.Fragment key={block?.id}>
                        <img
                            className="mt-2 mb-3"
                            key={block.id}
                            src={imageUrlLeft}
                            alt={block.data.file?.title || 'Image'}
                        />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                ) : null;
            case 'raw':
                return <div dangerouslySetInnerHTML={{ __html: block?.data?.html }} className="video_nhung"></div>;
            case 'nestedlist':
                if (block?.data?.style === 'unordered') {
                    return (
                        <ul className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ul>
                    );
                } else if (block?.data?.style === 'ordered') {
                    return (
                        <ol className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ol>
                    );
                }
            default:
                return null;
        }
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };
    const setDefault = () => {
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            cvFile: '',
            recommendationLetter: '',
        });
        setFileName('');
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileSize = file.size / 1024 / 1024;

            if (fileSize > 5) {
                setFormError((prevState) => ({
                    ...prevState,
                    cvFile:
                        languageApp === LANGUAGES.EN
                            ? 'File is too large! Please select a file under 5MB'
                            : 'File quá lớn! Vui lòng chọn file dưới 5MB',
                }));
                setFileName('');
                return;
            }

            const validFileTypes = [
                'application/pdf',
                'application/msword',
                'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            ];
            if (!validFileTypes.includes(file.type)) {
                setFormError((prevState) => ({
                    ...prevState,
                    cvFile:
                        languageApp === LANGUAGES.EN
                            ? 'Please select PDF or DOC/DOCX file'
                            : 'Vui lòng chọn file PDF hoặc DOC/DOCX',
                }));
                setFileName('');
                return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const buffer = reader.result;

                const tempFile = new Blob([buffer], { type: file.type });
                const tempFileName = file.name;

                setFormData((prevState) => ({
                    ...prevState,
                    cvFile: tempFile,
                    cvFileName: tempFileName,
                }));

                setFileName(file.name);
                setFormError((prevState) => ({
                    ...prevState,
                    cvFile: null,
                }));
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const validateFormData = (formData, languageApp, setFormError) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const errors = {
            fullName: formData.fullName
                ? null
                : languageApp === LANGUAGES.EN
                  ? 'Please enter your name'
                  : 'Vui lòng nhập họ tên',

            email:
                formData.email && emailPattern.test(formData.email)
                    ? null
                    : languageApp === LANGUAGES.EN
                      ? 'Invalid email'
                      : 'Email không hợp lệ',

            phone: formData.phone
                ? null
                : languageApp === LANGUAGES.EN
                  ? 'Invalid Phone number'
                  : 'Số điện thoại không hợp lệ',

            cvFile: formData.cvFile
                ? null
                : languageApp === LANGUAGES.EN
                  ? 'Please upload your CV'
                  : 'Vui lòng tải lên CV',
        };

        setFormError(errors);

        return Object.values(errors).every((error) => !error);
    };

    const handleApply = async () => {
        const isValid = validateFormData(formData, languageApp, setFormError);

        if (!isValid) {
            return;
        }
        setIsSubmitting(true);
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('cvFile', formData.cvFile);
            const res = await upLoadCVFile(formDataToSend);

            if (res.status === 200) {
                const idCV = res.data.data.id;
                const hanoiTime = moment.tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DDTHH:mm:ss');

                const dataUser = {
                    status: STATUS.PUBLISH,
                    phone: formData.phone,
                    email: formData.email,
                    fullName: formData.fullName,
                    coverLetter: formData.recommendationLetter,
                    applyDate: hanoiTime,
                    urlCV: `${import.meta.env.VITE_URL_BACKEND}/assets/${idCV}`,
                    idJob: id,
                };

                if (idCV) {
                    const response = await sendDataApply(dataUser);
                    if (response.status === 204) {
                        Swal.fire({
                            icon: 'success',
                            title:
                                languageApp === LANGUAGES.EN
                                    ? 'Information sending success'
                                    : 'Gửi thông tin thành công',
                            scrollbarPadding: false,
                            timer: 1000,
                            showConfirmButton: false,
                        });
                        toggleModal();
                        setDefault();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title:
                                languageApp === LANGUAGES.EN ? 'Information sending failed' : 'Gửi thông tin thất bại',
                            scrollbarPadding: false,
                            timer: 1000,
                            showConfirmButton: false,
                        });
                    }
                }
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
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>{dataPage?.translations[0]?.job_name}</title>
                <meta name="description" content={dataPage?.translations[0]?.job_name} />

                {/* open graph */}
                <meta property="og:title" content={dataPage?.translations[0]?.job_name} />
                <meta property="og:description" content={dataPage?.translations[0]?.job_name} />
                <meta property="og:image" content={`${import.meta.env.VITE_URL_BACKEND}/assets/${dataPage?.image}`} />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}/careers/${id}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataPage && (
                <div className="career-detail-container">
                    {dataPage?.translations?.map((item, index) => {
                        if (item.languages_code === languageApp) {
                            return (
                                <div key={index}>
                                    <div className="container">
                                        <div className="up">
                                            <div className="row">
                                                <div className="col-md-5 col-xl-4 col-12 left">
                                                    <h1
                                                        style={{
                                                            color: `${companyInfor?.data[0]?.color_text_heading}`,
                                                        }}
                                                        className="title mb-4"
                                                    >
                                                        {item?.job_name}
                                                    </h1>
                                                    <p className="mt-3">
                                                        <span className="fw-bolder">
                                                            {companyInfor?.data?.[0]?.company_name}
                                                        </span>
                                                        <br />
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={faLocationDot}
                                                                color="#00aeef"
                                                                className="me-3"
                                                            />
                                                            {item?.location},
                                                        </span>
                                                        <br />
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icon={faClock}
                                                                color="#00aeef"
                                                                className="me-2"
                                                            />
                                                            {new Date(dataPage?.last_time).toLocaleDateString('vi-VN')}
                                                        </span>
                                                    </p>
                                                    {new Date(dataPage?.last_time) < new Date() ? (
                                                        <div
                                                            className="mt-4 btn-gray text-center"
                                                            style={{
                                                                cursor: 'not-allowed',
                                                                padding: '10px 20px',
                                                                borderRadius: '5px',
                                                            }}
                                                        >
                                                            {languageApp === LANGUAGES.EN
                                                                ? 'Application closed'
                                                                : 'Đã hết hạn ứng tuyển'}
                                                        </div>
                                                    ) : (
                                                        <button className="btn-gadient mt-4" onClick={toggleModal}>
                                                            {languageApp === LANGUAGES.EN
                                                                ? 'Apply now'
                                                                : 'Ứng tuyển ngay'}
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="col-xl-8 col-md-7 d-md-block d-none right">
                                                    <img
                                                        src={`${backendUrl}/assets/${dataPage?.image}`}
                                                        alt="job-img"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="down mt-5">
                                            <div className="row">
                                                <div className="col-lg-6 col-12 pb-5">
                                                    {item?.job_details?.blocks?.map(renderBlockLeft)}
                                                </div>
                                                <div className="col-lg-6 col-12 jd-summary ps-lg-5 ps-2 ">
                                                    <div className="child pt-4">
                                                        <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                                            <div className="img-jd d-flex align-items-center">
                                                                <img src={calendar} alt="calendar" />
                                                            </div>
                                                            <div className="d-flex justify-content-center flex-column mt-3">
                                                                <span>
                                                                    {languageApp === LANGUAGES.EN
                                                                        ? 'Years of Experience Required'
                                                                        : 'Số năm kinh nghiệm yêu cầu'}
                                                                </span>
                                                                <p>{item?.experience_required}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                                            <div className="img-jd d-flex align-items-center">
                                                                <img src={education} alt="education" />
                                                            </div>
                                                            <div className="d-flex justify-content-center flex-column mt-3">
                                                                <span>
                                                                    {languageApp === LANGUAGES.EN
                                                                        ? 'Required Education Level'
                                                                        : 'Trình độ học vấn yêu cầu'}
                                                                </span>
                                                                <p>{item?.education_level}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                                            <div className="img-jd d-flex align-items-center">
                                                                <img src={level} alt="level" />
                                                            </div>
                                                            <div className="d-flex justify-content-center flex-column mt-3">
                                                                <span>
                                                                    {languageApp === LANGUAGES.EN
                                                                        ? 'Job Level'
                                                                        : 'Cấp độ công việc'}
                                                                </span>
                                                                <p>{item?.job_level}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                                            <div className="img-jd d-flex align-items-center">
                                                                <img src={work} alt="work" />
                                                            </div>
                                                            <div className="d-flex justify-content-center flex-column mt-3">
                                                                <span>
                                                                    {languageApp === LANGUAGES.EN
                                                                        ? 'Work Form'
                                                                        : 'Thời gian làm việc'}
                                                                </span>
                                                                <p>{item?.work_form}</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                                            <div className="img-jd d-flex align-items-center">
                                                                <img src={phone} alt="phone" />
                                                            </div>
                                                            <div className="d-flex justify-content-center flex-column mt-3">
                                                                <p>
                                                                    Email:{' '}
                                                                    <a href={`mailto:${dataPage.email_contact}`}>
                                                                        {dataPage.email_contact}
                                                                    </a>
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Modal
                                            isOpen={isModalOpen}
                                            toggle={toggleModal}
                                            centered
                                            size="lg"
                                            className="px-5"
                                        >
                                            <div style={{ backgroundColor: 'white' }}>
                                                <ModalHeader toggle={toggleModal} className="px-4 py-4">
                                                    <b>
                                                        {languageApp === LANGUAGES.EN
                                                            ? 'Apply for '
                                                            : 'Ứng tuyển công việc '}
                                                        <span>{item.job_name}</span>
                                                    </b>
                                                </ModalHeader>
                                                <ModalBody>
                                                    <form onSubmit={handleSubmit}>
                                                        <div className="form-group px-3">
                                                            <label className="mb-2">
                                                                {languageApp === LANGUAGES.EN
                                                                    ? 'Full Name'
                                                                    : 'Họ và tên'}{' '}
                                                                <span className="red">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${formError.fullName === null ? '' : 'border-red'}`}
                                                                name="fullName"
                                                                value={formData.fullName}
                                                                onChange={handleInputChange}
                                                                placeholder={
                                                                    languageApp === LANGUAGES.EN
                                                                        ? 'Enter your name'
                                                                        : 'Nhập họ và tên'
                                                                }
                                                            />
                                                            <div className="mt-2">
                                                                <label
                                                                    className={`red ${formError.fullName === null ? 'hidden' : ''}`}
                                                                >
                                                                    {formError.fullName}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mt-3 px-3">
                                                            <label className="mb-2">
                                                                {languageApp === LANGUAGES.EN ? 'Email' : 'Email'}{' '}
                                                                <span className="red">*</span>
                                                            </label>
                                                            <input
                                                                type="email"
                                                                className={`form-control ${formError.email === null ? '' : 'border-red'}`}
                                                                name="email"
                                                                value={formData.email}
                                                                onChange={handleInputChange}
                                                                placeholder={
                                                                    languageApp === LANGUAGES.EN
                                                                        ? 'Enter your email'
                                                                        : 'Nhập email'
                                                                }
                                                            />
                                                            <div className="mt-2">
                                                                <label
                                                                    className={`red ${formError.email === null ? 'hidden' : ''} `}
                                                                >
                                                                    {formError.email}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mt-3 px-3">
                                                            <label className="mb-2">
                                                                {languageApp === LANGUAGES.EN
                                                                    ? 'Phone Number'
                                                                    : 'Số điện thoại'}{' '}
                                                                <span className="red">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className={`form-control ${formError.phone === null ? '' : 'border-red'}`}
                                                                name="phone"
                                                                value={formData.phone}
                                                                onChange={handleInputChange}
                                                                placeholder={
                                                                    languageApp === LANGUAGES.EN
                                                                        ? 'Enter your phone number'
                                                                        : 'Nhập số điện thoại'
                                                                }
                                                            />
                                                            <div className="mt-2">
                                                                <label
                                                                    className={`red ${formError.phone === null ? 'hidden' : ''}`}
                                                                >
                                                                    {formError.phone}
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mt-3 px-3">
                                                            <label className="mb-2">
                                                                {languageApp === LANGUAGES.EN
                                                                    ? 'Choose your CV'
                                                                    : 'Chọn CV của bạn'}{' '}
                                                                <span className="red">*</span>
                                                            </label>
                                                            <div>
                                                                <div className="d-flex">
                                                                    <div>
                                                                        <label
                                                                            htmlFor="fileInput"
                                                                            className="btn-gadient"
                                                                        >
                                                                            {languageApp === LANGUAGES.EN
                                                                                ? 'Choose CV'
                                                                                : 'Chọn CV'}
                                                                        </label>
                                                                    </div>
                                                                    <div className="d-flex align-items-center ms-5">
                                                                        <div>
                                                                            <label style={{ color: 'green' }}>
                                                                                {fileName || ''}
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <input
                                                                    type="file"
                                                                    id="fileInput"
                                                                    className="form-control"
                                                                    onChange={handleFileChange}
                                                                    hidden
                                                                />
                                                                <div>
                                                                    <span className="red">{formError.cvFile}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group mt-3 px-3">
                                                            <label className="mb-2">
                                                                {languageApp === LANGUAGES.EN
                                                                    ? 'Letter of recommendation'
                                                                    : 'Thư giới thiệu'}
                                                            </label>
                                                            <textarea
                                                                className="form-control"
                                                                name="recommendationLetter"
                                                                value={formData.recommendationLetter}
                                                                onChange={handleInputChange}
                                                            />
                                                        </div>
                                                    </form>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <button
                                                        className="btn-gadient"
                                                        onClick={() => handleApply()}
                                                        disabled={isSubmitting}
                                                    >
                                                        {languageApp === LANGUAGES.EN ? 'Apply now' : 'Ứng tuyển ngay'}
                                                    </button>
                                                </ModalFooter>
                                            </div>
                                        </Modal>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
            )}
            {isShowRelated && <RelatedJob idSkip={id} />}
        </>
    );
});

export default CareerDetailPage;
