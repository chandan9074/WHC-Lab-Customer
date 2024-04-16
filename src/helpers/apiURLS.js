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

//Signin
export const SIGN_IN_URL = `${BASEURL}/users/login`;
export const FACEBOOK_LOGIN_URL = `${BASEURL}/users/login/facebook`;
export const GOOGLE_LOGIN_URL = `${BASEURL}/users/login/google`;

//Signup
export const SIGN_UP_URL = `${BASEURL}/users/customer/register`;

// orders
export const ORDERS_URL = `${BASEURL}/orders`;

// wishlists
export const WISHLISTS_URL = `${BASEURL}/wishlists`;

//MyAccount
export const MY_ACCOUNT_URL = `${BASEURL}/users/profile`;
