import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import VideoIntroduction from './Section/VideoIntroduction';
import Solution from './Section/Solution';
import CaseStudies from './Section/CaseStudies';
import Award from './Section/Award';
import Media from './Section/Media';
import Form from '../ContactUsPage/Section/Form';
import { getDataHome } from '../../features/homeSlice';
import { STATUS } from '../../utils/constant';
import '../Style/HomePage.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { setURL } from '../../features/homeSlice';
import { Helmet } from 'react-helmet-async';
const HomePage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataHome, loading, error } = useSelector((state) => state.dataHome);
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
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataHome?.data?.status === STATUS.PUBLISH) {
            const translations = dataHome.data.translations;
            if (dataHome.data?.video_instruction) {
                setUrlVideo(dataHome.data.video_instruction);
            }
            const blocksToUpdate = [];
            dispatch(setURL(dataHome?.data?.video_instruction));
            translations.forEach((translation) => {
                if (translation.languages_code === languageApp) {
                    translation.blocks.forEach((block) => {
                        if (KEY_TYPE_BLOCK.includes(block.collection)) {
                            if (block.item?.status === STATUS.PUBLISH) {
                                blocksToUpdate.push(block);
                            }
                        }
                    });
                }
            });
            setDataHomePage(blocksToUpdate);
        }
    }, [dataHome, languageApp]);
    return (
        <>
            <Helmet>
                <title>CMC Global - Leading software development company since 1993</title>
            </Helmet>
            <div className="homepage-container">
                {url_video && <VideoIntroduction url_video={url_video} />}
                {url_video &&
                    dataHomePage.map((item, index) => {
                        const BlockComponent = TYPE_BLOCK[item.collection];
                        return BlockComponent ? (
                            <div key={index}>
                                <BlockComponent data={item} />
                            </div>
                        ) : null;
                    })}
            </div>
        </>
    );
});

export default HomePage;
