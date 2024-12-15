import axios from 'axios';
const fetchListMenu = async () => {
    const url = '/api/items/Menu?fields=*,translations.*';
    return axios.get(url);
};

const fetchDataHome = () => {
    const url =
        'api/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*http://172.16.20.42:8055/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.contents.*,translations.blocks.item.contents.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*';
    return axios.get(url);
};

const fetchDataCareer = () => {
    const url =
        'api/items/pages/23315cf3-04b7-4cb1-8bcc-9dd342eb279d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*,translations.blocks.item.content.item.*';
    return axios.get(url);
};

const fetchDataNews = () => {
    const url =
        'api/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*http://172.16.20.42:8055/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.contents.*,translations.blocks.item.contents.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*';
    return axios.get(url);
};

const fetchDataLibrary = () => {
    const url =
        'api/items/pages/23a5c0b4-49de-4e0f-86bb-94f77b0c60ec?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*,translations.blocks.item.content.item.*';
    return axios.get(url);
};

const fetchDataProject = () => {
    const url =
        'api/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*http://172.16.20.42:8055/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.contents.*,translations.blocks.item.contents.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*';
    return axios.get(url);
};

const fetchDataAboutUs = () => {
    const url =
        'api/items/pages/d213b6fa-60d1-4256-9bdc-92b748e9c622?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*,translations.blocks.item.content.item.*,translations.blocks.item.images.*,translations.blocks.item.images.item.*';
    return axios.get(url);
};
const fetchBasicCompany = () => {
    const url = 'api/items/company_infor?fields=*,translations.*';
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
};
