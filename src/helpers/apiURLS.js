const { ENV_VARIABLE, ENV_VARIABLE_FOR_LOCAL } = require("./constant");

const domain =
    ENV_VARIABLE ?? ENV_VARIABLE_FOR_LOCAL
        ? ENV_VARIABLE ?? ENV_VARIABLE_FOR_LOCAL
        : "";

// BaseURL
let BASEURL = domain;

// products
export const GET_PRODUCTS = `${BASEURL}/products`;

export const GET_IMAGE_RENDER = `${BASEURL}/files/view-image`;

export const GET_USER_PROFILE = `${BASEURL}/profile/1`;

export const GET_USER_ADDRESS = `${BASEURL}/address`;

export const CHANGE_PASSWORD = `${BASEURL}/change-password`;
