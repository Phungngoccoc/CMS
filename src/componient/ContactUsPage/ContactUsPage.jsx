import React, { useEffect, useState } from 'react';
import Form from './Section/Form';
import { Helmet } from 'react-helmet-async';
import AboutBanner from './Section/AboutBanner';
import AboutUs from './Section/AboutUs';
import { useSelector, useDispatch } from 'react-redux';
import { STATUS } from '../../utils/constant';
const ContactUsPage = React.memo(() => {
    const { dataAboutUs, loading, error } = useSelector((state) => state.dataAboutUs);
    const languageApp = useSelector((state) => state.language.language);
    const [dataAboutUsPage, setDataAboutUsPage] = useState([]);

    const TYPE_BLOCK = {
        block_about_banner: AboutBanner,
        block_about_us_detail: AboutUs,
    };
    const KEY_TYPE_BLOCK = Object.keys(TYPE_BLOCK);

    useEffect(() => {
        if (dataAboutUs?.data?.status === STATUS.PUBLISH) {
            const translations = dataAboutUs.data.translations;
            const blocksBanner = [];
            const blockAboutUs = [];
            const blockDataAboutUsPage = [];

            translations.forEach((translation) => {
                if (translation.languages_code === languageApp) {
                    translation.blocks.forEach((block) => {
                        if (block.item?.status === STATUS.PUBLISH) {
                            if (block.collection === 'block_about_banner') {
                                blocksBanner.push(block);
                            } else if (
                                block.collection === 'block_about_us_detail' ||
                                block.collection === 'block_about_us_achuevements'
                            ) {
                                blockAboutUs.push(block);
                            }
                        }
                    });
                }
            });

            blockDataAboutUsPage.push(...blocksBanner);
            blockDataAboutUsPage.push({ blockAboutUs });

            setDataAboutUsPage(blockDataAboutUsPage);
        }
    }, [dataAboutUs, languageApp]);
    return (
        <>
            <Helmet>
                <title>About us - CMC Global</title>
            </Helmet>
            {dataAboutUsPage.map((item, index) => {
                if (KEY_TYPE_BLOCK.includes(item?.collection)) {
                    const BlockComponent = TYPE_BLOCK[item.collection];
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
                                (ele.collection === 'block_about_us_detail' ||
                                    ele.collection === 'block_about_us_achuevements')
                            );
                        });

                        if (combinedBlocks?.length > 0) {
                            const BlockComponent = TYPE_BLOCK['block_about_us_detail'];
                            return BlockComponent ? <BlockComponent key={index} data={combinedBlocks} /> : null;
                        }
                    }
                }
            })}
            <Form />
        </>
    );
});

export default ContactUsPage;
