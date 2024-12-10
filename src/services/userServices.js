import axios from "axios";
const fetchListMenu = async () => {
  const url = "/api/items/Menu?fields=*,translations.*";

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    // console.log(data)
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

const fetchDataHome = () => {
  const url =
    "api/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*http://172.16.20.42:8055/items/pages/72dc1f6d-caaf-49c8-9e02-7e315d3ad10d?fields=*,translations.*,translations.blocks.*,translations.blocks.item.*,translations.blocks.item.images.*,translations.blocks.item.contents.*,translations.blocks.item.contents.item.*,translations.blocks.item.title.*,translations.blocks.item.list.*,translations.blocks.item.list.item.*";
  return axios.get(url);
};

const fetchDataCareer = () => {
  return axios.get("");
}

const fetchDataNews = () => {
  return axios.get("");
}

const fetchDataLibrary = () => {
  return axios.get("")
}

const fetchDataProject = () => {
  return axios.get("")
}

const fetchDataAboutUs = () => {
  return axios.get("");
}
const fetchBasicCompany = () => {
  const url = "api/items/company_infor?fields=*,translations.*";
  return axios.get(url);
};


export {
  fetchListMenu,
  fetchDataHome,
  fetchDataCareer,
  fetchDataNews,
  fetchDataLibrary,
  fetchDataProject,
  fetchDataAboutUs
};
