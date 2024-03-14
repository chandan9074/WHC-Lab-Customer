// import { getCookie } from "cookies-next";

// const accessToken = getCookie("accessToken");
// console.log(accessToken);

// const headers = {
//     "Content-Type": "application/json;charset=utf-8",
//     Authorization: `Bearer ${accessToken}`,
// };

const defaultHeaders = {
    "Content-Type": "application/json",
};

const getMethod = (headersData = {}) => ({
    method: "GET",
    headers: { ...headersData, ...defaultHeaders },
});

const postMethod = (headersData = {}) => ({
    method: "POST",
    headers: { ...headersData, ...defaultHeaders },
});

const putMethod = (headersData = {}) => ({
    method: "PUT",
    headers: { ...headersData, ...defaultHeaders },
});

const patchMethod = (headersData = {}) => ({
    method: "PATCH",
    headers: { ...headersData, ...defaultHeaders },
});

const deleteMethod = (headersData = {}) => ({
    method: "DELETE",
    headers: { ...headersData, ...defaultHeaders },
});

export const MethodsStructure = {
    getMethod,
    postMethod,
    putMethod,
    patchMethod,
    deleteMethod,
};
