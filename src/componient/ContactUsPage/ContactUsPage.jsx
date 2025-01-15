import React, { useEffect, useState } from 'react';
import Form from './Section/Form';
import { Helmet } from 'react-helmet-async';
import AboutBanner from './Section/AboutBanner';
import AboutUs from './Section/AboutUs';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import FeaturedProject from './Section/FeaturedProject';
import { getDataProject } from '../../features/projectSlice';
import { fetchTitleFP } from '../../services/userServices';
import BannerFeaturedProject from './Section/BannerFeaturedProject';
const ContactUsPage = React.memo(() => {
    const { dataAboutUs, loading, error } = useSelector((state) => state.dataAboutUs);
    const languageApp = useSelector((state) => state.language.language);
    const [dataAboutUsPage, setDataAboutUsPage] = useState([]);
    const dataProject = useSelector((state) => state.dataProject.dataProject);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const [dataProjectPage, setDataProjectPage] = useState({});
    const [title, setTitle] = useState(null);
    const dispatch = useDispatch();
    const TYPE_BLOCK = {
        block_feature_project_banner: AboutBanner,
        block_feature_project_detail: AboutUs,
        block_corporation_image: BannerFeaturedProject,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);
    useEffect(() => {
        if (dataAboutUs?.data?.status === STATUS.PUBLISH) {
            const blocksData = dataAboutUs.data?.blocks;
            const blocksBanner = [];
            const blockAboutUs = [];
            const blockDataAboutUsPage = [];
            const blockBannerFP = [];
            blocksData?.map((ele) => {
                if (ele?.item?.status === STATUS.PUBLISH) {
                    if (ele?.collection === 'block_feature_project_banner') {
                        blocksBanner.push(ele);
                    } else if (
                        ele?.collection === 'block_feature_project_detail' ||
                        ele?.collection === 'block_feature_project_achievements' ||
                        ele?.collection === 'block_feature_project_leader'
                    ) {
                        blockAboutUs.push(ele);
                    } else if (ele?.collection === 'block_corporation_image') {
                        blockBannerFP.push(ele);
                    }
                }
            });

            blockDataAboutUsPage.push(...blockBannerFP);
            blockDataAboutUsPage.push(...blocksBanner);
            blockDataAboutUsPage.push({ blockAboutUs });

            setDataAboutUsPage(blockDataAboutUsPage);
        }
    }, [dataAboutUs, languageApp]);
    useEffect(() => {
        if (dataProject === null) {
            dispatch(getDataProject());
        }
    }, []);
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
                const res = await fetchTitleFP();
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
                <title>{`Feature Project - ${companyInfor?.data?.[0]?.company_name}`}</title>
                <meta
                    name="description"
                    content={`Explore our feature projects at  ${companyInfor?.data?.[0]?.company_name}, showcasing innovation and excellence in delivering top-notch technology solutions.`}
                />

                {/* open graph */}
                <meta property="og:title" content={`Feature Project - ${companyInfor?.data?.[0]?.company_name}`} />
                <meta
                    property="og:description"
                    content={`Explore our feature projects at  ${companyInfor?.data?.[0]?.company_name}, showcasing innovation and excellence in delivering top-notch technology solutions.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}${path.ABOUT_US}`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {dataAboutUsPage?.length > 0 &&
                dataAboutUsPage.map((item, index) => {
                    if (KEY_TYPE_BLOCK.includes(item?.collection)) {
                        const BlockComponent = TYPE_BLOCK[item?.collection];
                        return BlockComponent ? (
                            <div key={index}>
                                <BlockComponent data={item} />
                            </div>
                        ) : null;
                    } else {
                        if (item?.blockAboutUs?.length > 0) {
                            const list_map = item?.blockAboutUs;
                            const combinedBlocks = list_map.filter((ele) => {
                                return (
                                    ele.item?.status === STATUS.PUBLISH &&
                                    (ele.collection === 'block_feature_project_detail' ||
                                        ele.collection === 'block_feature_project_achievements' ||
                                        ele.collection === 'block_feature_project_leader')
                                );
                            });

                            if (combinedBlocks?.length > 0) {
                                const BlockComponent = TYPE_BLOCK['block_feature_project_detail'];
                                return BlockComponent ? <BlockComponent key={index} data={combinedBlocks} /> : null;
                            }
                        }
                    }
                })}
            {dataAboutUsPage?.length > 0 && dataProjectPage && <FeaturedProject data={dataProjectPage} title={title} />}
            {dataAboutUsPage?.length > 0 && <Form />}
        </>
    );
});

export default ContactUsPage;
