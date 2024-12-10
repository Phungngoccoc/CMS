import React, { useEffect } from "react";
import '../Style/CareerPage.scss';
import CareerBanner from "./Section/CareerBanner";
import ListJob from "./Section/ListJob";
import { Helmet } from 'react-helmet'
const CareerPage = React.memo(() => {
    return (
        <>
            <Helmet>
                <title>CMC - Career Archive - Global</title>
            </Helmet>
            <CareerBanner />
            <ListJob />
        </>
    );
});

export default CareerPage;
