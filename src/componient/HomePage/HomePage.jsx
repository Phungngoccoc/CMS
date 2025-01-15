import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
import VideoIntroduction from './Section/VideoIntroduction';
import Solution from './Section/Solution';
import CaseStudies from './Section/CaseStudies';
import Award from './Section/Award';
import Media from './Section/Media';
import Form from '../ContactUsPage/Section/Form';
import { LANGUAGES, STATUS } from '../../utils/constant';
import '../Style/HomePage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Helmet } from 'react-helmet-async';
import HomeBanner from './Section/HomeBanner';

const HomePage = React.memo(() => {
    const { dataHome } = useSelector((state) => state.dataHome);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const languageApp = useSelector((state) => state.language.language);
    const [dataHomePage, setDataHomePage] = useState([]);
    const [url_video, setUrlVideo] = useState(null);

    const TYPE_BLOCK = {
        block_solution: Solution,
        block_case_studies: CaseStudies,
        block_ctificates: Award,
        block_award: Award,
        block_media: Media,
        block_contact_us: Form,
        block_landing_page: HomeBanner,
    };

    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataHome?.data?.status === STATUS.PUBLISH) {
            const blocks = dataHome.data.blocks;
            const blocksToUpdate = {
                [LANGUAGES.EN]: [],
                [LANGUAGES.VI]: [],
            };
            blocks.forEach((block) => {
                if (KEY_TYPE_BLOCK.includes(block?.collection) && block?.item?.status === STATUS.PUBLISH) {
                    const translations = block.item.translations;
                    if (translations?.length > 0) {
                        translations.map((tran) => {
                            if (Object.values(LANGUAGES).includes(tran.languages_code)) {
                                blocksToUpdate[tran.languages_code]?.push({
                                    block,
                                    ele: tran,
                                });
                            }
                        });
                    }
                } else if (block.collection === 'block_video_home' && block?.item?.status === STATUS.PUBLISH) {
                    setUrlVideo(block);
                }
            });
            setDataHomePage(blocksToUpdate);
        }
    }, [dataHome, languageApp]);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);

    return (
        <>
            <Helmet>
                <title>{`${companyInfor?.data?.[0]?.company_name} - Leading software development company since 1993`}</title>
                <meta
                    name="description"
                    content={`${companyInfor?.data?.[0]?.company_name} - Leading software development company since 1993`}
                />

                {/* open graph */}
                <meta
                    property="og:title"
                    content={`${companyInfor?.data?.[0]?.company_name} - Leading software development company since 1993`}
                />
                <meta
                    property="og:description"
                    content={`${companyInfor?.data?.[0]?.company_name} - Leading software development company since 1993`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${companyInfor?.data?.[0]?.icon_logo}`}
                />
                <meta property="og:url" content={`${import.meta.env.VITE_URL_FRONTEND}/home`} />
                <meta property="og:type" content="website" />
            </Helmet>
            {languageApp && dataHomePage && (
                <div className="homepage-container">
                    {url_video && <VideoIntroduction data={url_video} />}
                    {url_video &&
                        dataHomePage[languageApp]?.map((item, index) => {
                            const BlockComponent = TYPE_BLOCK[item?.block?.collection];
                            return BlockComponent ? (
                                <div key={index} data-aos="fade-up">
                                    <BlockComponent data={item} />
                                </div>
                            ) : null;
                        })}
                </div>
            )}
        </>
    );
});

export default HomePage;
