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

export const IMAGE_UPLOAD = `${BASEURL}/files/images`;

export const GET_USER_PROFILE = `${BASEURL}/profile`;

export const PROFILE_URL = `${BASEURL}/users/profile`;

export const COMPANY_VAT_CODE_URL = `${BASEURL}/companies/vat`;

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
//Why Choose Us
export const WHY_US = `${BASEURL}/why-us`;
//Strains
export const STRAINS = `${BASEURL}/strains`;
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
export const RESEND_OTP = `${BASEURL}/users/resend-otp`;

// distributors

export const DISTRIBUTORS_URL = `${BASEURL}/distributors`;
export const DISTINCT_COUNTRY_URL = `${BASEURL}/distributors/distinct-country`;
export const DISTINCT_CATEGORY_URL = `${BASEURL}/distributors/distinct-category`;

// category
export const CATEGORY_URL = `${BASEURL}/categories`;

// GET Resources
export const RESOURCES = `${BASEURL}/resources`;

// DOWNLOAD Resources
export const DOWNLOAD_RESOURCE = `${BASEURL}/files/view-image?key=`;
//Blogs
export const BLOG_URL = `${BASEURL}/blogs`;
// credit-balance
export const CREDIT_BALANCE_URL = `${BASEURL}/orders/credit-orders`;
// payment using stripe
export const MAKE_PAYMENT = `${BASEURL}/orders/send-payment-link`;
// Comments
export const COMMENTS = `${BASEURL}/comments`;
//apply for credit balance
export const APPLY_FOR_CREDIT_BALANCE = `${BASEURL}/users/apply-for-credit`;
// Review url
export const REVIEW_URL = `${BASEURL}/reviews`;
// Contact url
export const CONTACTS = `${BASEURL}/contacts`;
// Newsletter
export const NEWS_LETTER = `${BASEURL}/newsletter-subscribers/subscribe`;
// generate-invoice
export const GENERATE_INVOICE_API_URL = `${BASEURL}/orders/generate-invoice`;

//Contact Info
export const CONTACT_INFO_URL = `${BASEURL}/system-configs/contact-info`;
// Social link Info
export const SOCIAL_MEDIA_LINK_URL = `${BASEURL}/system-configs/social-link`;

// GET POPUP information
export const POPUP_INFORMATION = `${BASEURL}/popups/customer`;
