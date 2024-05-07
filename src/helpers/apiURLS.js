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

export const GET_USER_PROFILE = `${BASEURL}/profile`;

export const PROFILE_URL = `${BASEURL}/users/profile`;

export const GET_USER_ADDRESS = `${BASEURL}/addresses`;

export const CHANGE_PASSWORD = `${BASEURL}/users/change-password`;

export const RESET_PASSWORD = `${BASEURL}/users/reset-password`;

export const CHANGE_EMAIL = `${BASEURL}/users/change-email`;

// export const VERIFY_OTP = `${BASEURL}/users/verify-otp`;

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
//My Address
export const MY_ADDRESS_URL = `${BASEURL}/addresses`;
// Cart
export const MY_CART_URL = `${BASEURL}/carts`;
// Location
export const GET_LOCATIONS = `${BASEURL}/locations`;
//Testimonials
export const GET_TESTIMONIALS = `${BASEURL}/testimonials`;
//Main Categories
export const GET_MAIN_CATEGORIES = `${BASEURL}/categories`;
// FAQ
export const FAQ_URL = `${BASEURL}/faqs`;
// TAGS
export const TAGS_URL = `${BASEURL}/tags`;

// verify otp
export const VERIFY_OTP = `${BASEURL}/users/verify-otp`;

// distributors

export const DISTRIBUTORS_URL = `${BASEURL}/distributors`;

// category
export const CATEGORY_URL = `${BASEURL}/categories`;

// GET Resources
export const RESOURCES = `${BASEURL}/resources`;

// DOWNLOAD Resources
export const DOWNLOAD_RESOURCE = `${BASEURL}/files/view-image?key=`;
//Blogs
export const BLOG_URL = `${BASEURL}/blogs`;
