import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import LastestNews from './Section/LastestNews';
import { useSelector } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import { fetchTitleNew } from '../../services/userServices';
const NewsPage = React.memo(() => {
    const { dataNews, loading, error } = useSelector((state) => state.dataNews);
    const languageApp = useSelector((state) => state.language.language);
    const [dataNewsPage, setDataNewsPage] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const TYPE_BLOCK = {
        block_media: LastestNews,
    };
    const [title, setTitle] = useState(null);
    useEffect(() => {
        const fetchTitle = async () => {
            try {
                const res = await fetchTitleNew();
                if (res?.status < 400) {
                    const dataTitle = res.data?.data;
                    dataTitle.map((ele) => {
                        if (ele?.status === STATUS.PUBLISH) {
                            setTitle(ele?.translations);
                        }
                    });
                }
            } catch (error) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(error.message);
                }
            }
        };
        if (title === null) {
            fetchTitle();
        }
    }, []);
    useEffect(() => {
        if (dataNews !== null) {
            const blocksToUpdate = [];
            dataNews.data.forEach((item) => {
                if (item.status === STATUS.PUBLISH) {
                    blocksToUpdate.push(item);
                }
            });
            setDataNewsPage(blocksToUpdate);
        }
    }, [dataNews, languageApp]);
    return (
        <>
            <Helmet>
                <title>{`News - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Stay updated with the latest news and updates from ${companyInfor?.data?.[0]?.company_name}, including our achievements, innovations, and more.`}
                />

                {/* open graph */}
                <meta property="og:title" content={`News - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Stay updated with the latest news and updates from ${companyInfor?.data?.[0]?.company_name}, including our achievements, innovations, and more.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.NEWS}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            <LastestNews data={dataNewsPage} title={title} />
        </>
    );
});

export default NewsPage;
