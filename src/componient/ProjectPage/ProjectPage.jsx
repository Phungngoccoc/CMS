import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Project from './Section/Project';
import { useSelector } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import { fetchTitleProject } from '../../services/userServices';

const ProjectPage = React.memo(() => {
    const { dataProject } = useSelector((state) => state.dataProject);
    const languageApp = useSelector((state) => state.language.language);
    const [dataProjectPage, setDataProjectPage] = useState([]);
    const [title, setTitle] = useState(null);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    useEffect(() => {
        if (dataProject !== null) {
            const blocksToUpdate = [];
            dataProject.data.forEach((item) => {
                if (item.status === STATUS.PUBLISH) {
                    blocksToUpdate.push(item);
                }
            });
            setDataProjectPage(blocksToUpdate);
        }
    }, [dataProject, languageApp]);
    useEffect(() => {
        const fetchTitlte = async () => {
            try {
                const res = await fetchTitleProject();
                if (res.status < 400) {
                    res.data.data.map((item) => {
                        if (item.status === STATUS.PUBLISH) {
                            setTitle(item);
                        }
                    });
                }
            } catch (e) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(e.message);
                }
            }
        };
        fetchTitlte();
    }, []);
    return (
        <>
            <Helmet>
                <title>{`Projects - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Stay updated with the latest news and updates from ${companyInfor?.data?.[0]?.company_name}, including our achievements, innovations, and more.`}
                />

                {/* open graph */}
                <meta property="og:title" content={`ProjectS - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Stay updated with the latest news and updates from ${companyInfor?.data?.[0]?.company_name}, including our achievements, innovations, and more.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.PROJECTS}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataProjectPage && <Project data={dataProjectPage} title={title} />}
        </>
    );
});

export default ProjectPage;
