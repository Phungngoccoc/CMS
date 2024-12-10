import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import LastestNews from "./Section/LastestNews";

// import '../../Style/NewsPage.scss'
const NewsPage = React.memo(() => {
    return (
        <>
            <Helmet>
                <title>News - CMC Global</title>
            </Helmet>
            <LastestNews />
        </>

    );
});

export default NewsPage;
