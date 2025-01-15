import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BannerCoporation from './Section/BannerCoporation';
import HistoryCoporation from './Section/HistoryComporation';
import Numbers from './Section/Numbers';
import GeneralIntroduction from './Section/GeneralIntroduction';
import FieldOperation from './Section/FieldOperation';
import { useSelector } from 'react-redux';
import { STATUS } from '../../utils/constant';

const CoporationPage = React.memo(() => {
    const dataPage = useSelector((state) => state.dataCorporation.dataCorporation);
    const language = useSelector((state) => state.language.language);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const [dataComponent, setDataComponent] = useState([]);

    useEffect(() => {
        if (dataPage?.data?.status === STATUS.PUBLISH && language) {
            setDataComponent(dataPage.data?.blocks || []);
        }
    }, [dataPage?.data, language]);

    const blocks = {
        block_corporation_image: BannerCoporation,
        block_corporation_instructions: GeneralIntroduction,
        block_corporation_fields: FieldOperation,
        block_corporation_the_numbers: Numbers,
        block_corporation_histories: HistoryCoporation,
    };
    return (
        <>
            <Helmet>
                <title>{`Field of Activity - ${companyInfor?.data?.[0]?.company_name || 'Our Company'}`}</title>
                <meta
                    name="description"
                    content={`Explore the diverse fields of activity at ${
                        companyInfor?.data?.[0]?.company_name || 'our company'
                    }. Learn more about our innovative solutions and global impact.`}
                />
                <meta
                    property="og:image"
                    content={`${import.meta.env.VITE_URL_BACKEND}/assets/${
                        companyInfor?.data?.[0]?.icon_logo || 'default-logo.png'
                    }`}
                />
            </Helmet>
            {Array.isArray(dataComponent) &&
                dataComponent.map((item, index) => {
                    const BlockComponent = blocks[item?.collection];
                    return BlockComponent ? (
                        <div key={item.id || index}>
                            <BlockComponent data={item} />
                        </div>
                    ) : null;
                })}
        </>
    );
});

export default CoporationPage;
