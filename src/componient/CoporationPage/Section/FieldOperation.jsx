import React, { useEffect, useState } from 'react';
import '../../Style/FieldOperation.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path, STATUS } from '../../../utils/constant';
import { fetchCorporationList } from '../../../services/userServices';

const FieldOperation = React.memo((props) => {
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();
    const itemData = props?.data?.item;
    const languageApp = useSelector((state) => state.language.language);
    const [listField, setListField] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await fetchCorporationList();
                if (res.status < 400 && res.data) {
                    const data = res.data?.data;
                    if (data?.length > 0) {
                        setListField(data);
                    }
                }
            } catch (err) {}
        };
        fetch();
    }, []);

    const handleClick = (id) => {
        navigate(`${path.FIELD_OPERATION}/${encodeURIComponent(id)}`);
    };
    return (
        <>
            {listField?.length > 0 && itemData?.status === STATUS.PUBLISH && (
                <div className="field-operation-container">
                    <div className="container">
                        {itemData?.translations?.map((item, index) => {
                            if (item?.languages_code === languageApp) {
                                return <h4 key={index}>{item?.title}</h4>;
                            }
                        })}
                        <div className="row mt-4">
                            {listField.map((item, index) => {
                                if (item.status === STATUS.PUBLISH) {
                                    return (
                                        <div key={index} className="col-lg-4 col-sm-6 col-12 child-item">
                                            <div className="content">
                                                <div className="d-flex align-items-center justify-content-center image mb-5">
                                                    <img src={`${backendUrl}/assets/${item?.image}`} alt={'none'} />
                                                </div>
                                                {item?.translations?.map((ele, z) => {
                                                    if (ele?.languages_code === languageApp) {
                                                        return (
                                                            <React.Fragment key={index}>
                                                                <div>
                                                                    <h5 className="text-center">{ele?.title}</h5>
                                                                    <p>{ele?.header}</p>
                                                                </div>
                                                                <div className="company-logo mt-4">
                                                                    <img
                                                                        src={`${backendUrl}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                                                                        className="logo"
                                                                        alt="company-logo"
                                                                    />
                                                                    <span>{companyInfor?.data[0]?.company_name}</span>
                                                                </div>
                                                                <div className="content2">
                                                                    <div
                                                                        className="p-0 d-flex flex-column justify-content-between"
                                                                        style={{ height: '100%' }}
                                                                    >
                                                                        <div className="p-0">
                                                                            <h5 className="text-center">
                                                                                {ele?.title}
                                                                            </h5>
                                                                            <p>{ele?.header}</p>
                                                                        </div>
                                                                        <div className="mb-3 p-0">
                                                                            <span
                                                                                className="button mb-3"
                                                                                onClick={() => handleClick(item?.id)}
                                                                            >
                                                                                {languageApp === LANGUAGES.EN
                                                                                    ? 'Learn more'
                                                                                    : 'Xem thêm'}{' '}
                                                                                <img src={arrow} alt="Arrow" />
                                                                            </span>
                                                                            <img
                                                                                src={`${backendUrl}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                                                                                className="logo"
                                                                                alt="company-logo"
                                                                            />
                                                                            <span>
                                                                                {companyInfor?.data[0]?.company_name}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                })}
                                            </div>
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default FieldOperation;
