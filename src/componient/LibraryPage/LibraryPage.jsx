import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import CompanyActivities from "./Section/CompanyActivities";
import PhotoGallery from "./Section/PhotoGallery";
import VideoGallery from "./Section/VideoGallery";

const LibraryPage = React.memo(() => {
    return (
        <>
            <Helmet>
                <title>Library - CMC Global</title>
            </Helmet>
            <CompanyActivities />
            <PhotoGallery />
            <VideoGallery />
        </>

    );
});

export default LibraryPage;
