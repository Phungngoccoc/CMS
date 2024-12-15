import React, { useEffect, useState } from 'react';
import '../Style/CareerPage.scss';
import CareerBanner from './Section/CareerBanner';
import ListJob from './Section/ListJob';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../../utils/constant';
const CareerPage = React.memo(() => {
    const dispatch = useDispatch();
    const { dataCareer, loading, error } = useSelector((state) => state.dataCareer);
    const languageApp = useSelector((state) => state.language.language);
    const [dataCareerPage, setDataCareerPage] = useState([]);

    const TYPE_BLOCK = {
        block_careers: CareerBanner,
        block_list_job: ListJob,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataCareer?.data?.status === STATUS.PUBLISH) {
            const translations = dataCareer.data.translations;
            const blocksBanner = [];
            const blockListJob = [];
            const blockDataCareerPage = [];

            translations.forEach((translation) => {
                if (translation.languages_code === languageApp) {
                    translation.blocks.forEach((block) => {
                        if (block.item?.status === STATUS.PUBLISH) {
                            if (block.collection === 'block_careers') {
                                blocksBanner.push(block);
                            } else if (block.collection === 'block_list_job') {
                                blockListJob.push(block);
                            }
                        }
                    });
                }
            });

            blockDataCareerPage.push(...blocksBanner);
            blockDataCareerPage.push({ blockListJob });

            setDataCareerPage(blockDataCareerPage);
        }
    }, [dataCareer, languageApp]);

    return (
        <>
            <Helmet>
                <title>CMC - Career Archive - Global</title>
            </Helmet>
            {dataCareerPage.map((item, index) => {
                if (KEY_TYPE_BLOCK.includes(item.collection)) {
                    const BlockComponent = TYPE_BLOCK[item.collection];
                    return BlockComponent ? (
                        <div key={index}>
                            <BlockComponent data={item} />
                        </div>
                    ) : null;
                } else {
                    if (item?.blockListJob?.length > 0) {
                        const list_map = item.blockListJob;

                        const list_job = list_map
                            .map((ele) => {
                                if (KEY_TYPE_BLOCK.includes('block_list_job')) {
                                    return ele;
                                }
                            })
                            .filter((item) => !!item);

                        if (list_job?.length > 0) {
                            const BlockComponent = TYPE_BLOCK['block_list_job'];
                            return BlockComponent ? <BlockComponent key={index} data={list_job} /> : null;
                        }
                    }
                }
            })}
        </>
    );
});

export default CareerPage;
