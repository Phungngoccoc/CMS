import axios from 'axios';
const fetchListMenu = async () => {
    const url =
        '/api/items/Menu?fields=*,translations.*,menu_child.*,menu_child.item.*,menu_child.item.title_language.*';
    return axios.get(url);
};

const fetchDataHome = () => {
    const url =
        '/api/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,blocks.*,blocks.item.*,blocks.item.videos.*,blocks.item.translations.*,blocks.item.images.*,blocks.item.title.*';
    return axios.get(url);
};

const fetchDataCareer = () => {
    const url = '/api/items/Edit_Job?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataNews = () => {
    const url = '/api/items/Edit_News?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataLibrary = () => {
    const url =
        '/api/items/pages/23a5c0b4-49de-4e0f-86bb-94f77b0c60ec?fields=*,blocks.*,blocks.item.*,blocks.item.content.*,blocks.item.translations.*,blocks.item.content.item.*,blocks.item.content.item.translations.*,blocks.item.content.item.images.*';
    return axios.get(url);
};

const fetchDataProject = () => {
    const url = '/api/items/Edit_Project?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataAboutUs = () => {
    const url =
        '/api/items/pages/331ec6d3-ff24-4f51-ab9f-19c3d16f01f3?fields=*,blocks.*,translations.*,blocks.item.*,blocks.item.translations.*,blocks.item.images.*,blocks.item.images.item.*,blocks.item.contents.*,blocks.item.contents.item.*,blocks.item.contents.item.translations.*';
    return axios.get(url);
};

const fetchDataBlog = () => {
    const url = '/api/items/Edit_Blog?fields=*,translations.*';
    return axios.get(url);
};

const fetchCompanyInfor = () => {
    const url = '/api/items/company_infor?fields=*,translations.*';
    return axios.get(url);
};

const fetchCorporation = () => {
    const url =
        '/api/items/pages/da8adfd3-d9b1-4280-886a-d78c47e23520?fields=*,blocks.*,translations.*,blocks.item.*,blocks.item.translations.*,blocks.item.translations.*,blocks.item.contents.*,blocks.item.contents.item.*,blocks.item.contents.item.translations.*,blocks.item.content.*,blocks.item.content.item*,blocks.item.content.*,blocks.item.content.translations.*';
    return axios.get(url);
};

const fetchBasicCompany = () => {
    const url = '/api/items/company_infor?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataDetailBlog = (id) => {
    const url = `/api/items/Edit_Blog/${id}?fields=*,translations.*`;
    return axios.get(url);
};

const fetchDataUser = (userId) => {
    const url = `/api/users/${userId}`;
    return axios.get(url);
};

const Subscribe = (userEmail, status) => {
    const url = `/api/flows/trigger/70cdc824-e1e5-4438-9018-612126b2c541`;
    return axios.post(url, { email: userEmail, status: status });
};

const fetchTitleBlog = () => {
    const url = '/api/items/block_blog?fields=*,title.*';
    return axios.get(url);
};

const fetchCorporationList = () => {
    const url = '/api/items/block_corporation_fields_content?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataCareerPage = () => {
    const url =
        '/api/items/pages/23315cf3-04b7-4cb1-8bcc-9dd342eb279d?fields=*,translations.*,blocks.*,blocks.item.*,blocks.item.translations.*';
    return axios.get(url);
};

const fetchTitleFP = () => {
    const url = `/api/items/block_case_studies?fields=*,translations.*`;
    return axios.get(url);
};

const SendFormData = (fullName, email, phone, content) => {
    const url = `/api/flows/trigger/f1629e82-2d86-48cc-b2b7-5df235395564`;
    return axios.post(url, {
        fullName: fullName,
        email: email,
        phone: phone,
        content: content,
    });
};

const fetchDataDetailOperation = (id) => {
    const url = `/api/items/block_corporation_fields_content/${id}?fields=*,translations.*`;
    return axios.get(url);
};
const fetchDataMedia = () => {
    const url = 'api/items/Edit_News?fields=*,translations.*&sort=-date_created&limit=4';
    return axios.get(url);
};

const fetchListProject = () => {
    const url = '/api/items/Edit_Project?fields=*,translations.*';
    return axios.get(url);
};
const fetchTitleNew = () => {
    const url = `/api/items/block_media?fields=*,translations.*`;
    return axios.get(url);
};

const fetchDataDetailNew = (id) => {
    const url = `/api/items/Edit_News/${id}?fields=*,translations.*`;
    return axios.get(url);
};

const fetchTitleProject = () => {
    const url = `/api/items/block_case_studies?fields=*,translations.*`;
    return axios.get(url);
};
const fetchDataDetailProject = (id) => {
    const url = `/api/items/Edit_Project/${id}?fields=*,translations.*`;
    return axios.get(url);
};
const fetchDataRelatedProject = () => {
    const url =
        '/api/items/Edit_Project?fields=date_created,date_updated,id,status,image,translations.languages_code,translations.content,translations.content_main';
    return axios.get(url);
};

const fetchDataJob = (id) => {
    const url = `/api/items/Edit_Job/${id}/?fields=*,translations.*`;
    return axios.get(url);
};
const sendDataApply = (dataUser) => {
    const url = `/api/flows/trigger/78a06514-9585-47a9-a3a2-dc7dfb87a5af`;
    return axios.post(url, dataUser);
};
const upLoadCVFile = (formDataToSend) => {
    const url = `/api/files`;
    return axios.post(url, formDataToSend, {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${import.meta.env.VITE_TOKEN_UPLOAD}`,
        },
    });
};

const fetchDataPhoto = (limit, offset) => {
    const url = `/api/items/block_photos_gallery_content?limit=${limit}&offset=${offset}&fields=*,translations.*&meta=total_count`;
    //,images.*
    return axios.get(url);
};

const fetchDataDetailPhoto = (id) => {
    const url = `/api/items/block_photos_gallery_content/${id}?&fields=*,translations.*,images.*,images.directus_files_id.*`;
    return axios.get(url);
};

const fetchDataVideo = (limit, offset) => {
    const url = `/api/items/block_videos_gallery_content?limit=${limit}&offset=${offset}&fields=*,translations.*&meta=total_count`;
    //,images.*
    return axios.get(url);
};

const fetchDataNewsPerPage = (limit, offset) => {
    const url = `/api/items/Edit_News?fields=*,translations.*&limit=${limit}&offset=${offset}&meta=total_count`;
    return axios.get(url);
};

const fetchDataProjectPerPage = (limit, offset) => {
    const url = `/api/items/Edit_Project?fields=*,translations.*&limit=${limit}&offset=${offset}&meta=total_count`;
    return axios.get(url);
};
const fetchDataBlogPerPage = (limit, offset) => {
    const url = `/api/items/Edit_Blog?fields=*,translations.*&limit=${limit}&offset=${offset}&meta=total_count`;
    return axios.get(url);
};

const fetchDataJobPerPage = (limit, offset) => {
    const url = `/api/items/Edit_Job/?fields=*,translations.*&limit=${limit}&offset=${offset}&meta=total_count`;
    return axios.get(url);
};

const fetchDataFooter = () => {
    const url = `/api/items/footer?fields=*,translations.*,menu_child.*,menu_child.item.*,menu_child.item.title_language.*`;
    return axios.get(url);
};

export {
    fetchListMenu,
    fetchDataHome,
    fetchDataCareer,
    fetchDataNews,
    fetchDataLibrary,
    fetchDataProject,
    fetchDataAboutUs,
    fetchDataBlog,
    fetchCompanyInfor,
    fetchCorporation,
    fetchDataDetailBlog,
    fetchDataUser,
    Subscribe,
    fetchTitleBlog,
    fetchDataCareerPage,
    fetchTitleFP,
    SendFormData,
    fetchDataDetailOperation,
    fetchDataMedia,
    fetchListProject,
    fetchTitleNew,
    fetchDataDetailNew,
    fetchTitleProject,
    fetchDataDetailProject,
    fetchDataRelatedProject,
    fetchDataJob,
    sendDataApply,
    upLoadCVFile,
    fetchCorporationList,
    fetchDataPhoto,
    fetchDataDetailPhoto,
    fetchDataVideo,
    fetchDataNewsPerPage,
    fetchDataProjectPerPage,
    fetchDataBlogPerPage,
    fetchDataJobPerPage,
    fetchDataFooter,
};
