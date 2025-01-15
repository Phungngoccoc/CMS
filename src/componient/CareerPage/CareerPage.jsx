import React, { useEffect, useState, useRef } from 'react';
import '../Style/CareerPage.scss';
import CareerBanner from './Section/CareerBanner';
import ListJob from './Section/ListJob';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import { fetchDataCareerPage } from '../../services/userServices';

const CareerPage = React.memo(() => {
    const listJobRef = useRef(null);
    const scrollToListJob = () => {
        if (listJobRef.current) {
            const offset = listJobRef.current.offsetTop - 50;
            window.scrollTo({ top: offset, behavior: 'smooth' });
        }
    };

    const { dataCareer } = useSelector((state) => state.dataCareer);
    const [dataCareerPage, setDataCareerPage] = useState([]);
    const [dataJob, setDataJob] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);

    const TYPE_BLOCK = {
        block_careers_banner: CareerBanner,
        block_carrers_list_job: ListJob,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataCareer !== null) {
            const blocksToUpdate = dataCareer.data.filter((item) => item.status === STATUS.PUBLISH);
            setDataJob(blocksToUpdate);
        }
    }, [dataCareer]);

    useEffect(() => {
        const fetchDataPage = async () => {
            try {
                const res = await fetchDataCareerPage();
                if (res?.status < 400) {
                    const data = res.data?.data;
                    if (data.status === STATUS.PUBLISH) {
                        const blocksToUpdate = data?.blocks?.filter(
                            (ele) => KEY_TYPE_BLOCK.includes(ele?.collection) && ele?.item?.status === STATUS.PUBLISH,
                        );
                        setDataCareerPage(blocksToUpdate);
                    }
                }
            } catch (error) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(error.message);
                }
            }
        };
        fetchDataPage();
    }, []);

    return (
        <>
            <Helmet>
                <title>{`Career Opportunities at - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Explore exciting career opportunities at ${companyInfor?.data?.[0]?.company_name}. Join our team and grow your career with us.`}
                />
                <meta
                    property="og:title"
                    content={`Career Opportunities at - ${companyInfor?.data?.[0]?.company_name}`}
                />
                <meta
                    property="og:description"
                    content={`Explore exciting career opportunities at ${companyInfor?.data?.[0]?.company_name}. Join our team and grow your career with us.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_BACKEND_URL}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.CAREER}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataCareerPage.map((item, index) => {
                const BlockComponent = TYPE_BLOCK[item.collection];

                if (BlockComponent === TYPE_BLOCK['block_carrers_list_job']) {
                    return (
                        <div key={index} ref={listJobRef}>
                            <BlockComponent data={dataJob} title={item} />
                        </div>
                    );
                } else if (BlockComponent === TYPE_BLOCK['block_careers_banner']) {
                    return (
                        <div key={index}>
                            <BlockComponent data={item} onButtonClick={scrollToListJob} />
                        </div>
                    );
                } else {
                    return BlockComponent ? <BlockComponent key={index} data={item} /> : null;
                }
            })}
        </>
    );
});

export default CareerPage;
