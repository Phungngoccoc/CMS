import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Project from "./Section/Project";

// import '../../Style/ProjectPage.scss'
const ProjectPage = React.memo(() => {
    return (
        <>
            <Helmet>
                <title>Project - CMC Global</title>
            </Helmet>
            <Project />
        </>

    );
});

export default ProjectPage;
