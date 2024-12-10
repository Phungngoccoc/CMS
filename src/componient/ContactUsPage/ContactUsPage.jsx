import React, { useEffect, useState } from "react";
import Form from "./Section/Form";
import { Helmet } from 'react-helmet'
import AboutBanner from "./Section/AboutBanner";
import AboutUs from "./Section/AboutUs";
const ContactUsPage = React.memo(() => {
    return (
        <div >
            <Helmet>
                <title>About us - CMC Global</title>
            </Helmet>
            <AboutBanner />
            <AboutUs />
            <Form />
        </div>
    );
});

export default ContactUsPage;
