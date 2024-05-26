import { NextResponse } from "next/server";

export async function middleware(request) {
    // console.log(request.url, "running");
    let currentUser = request.cookies.get("userInfo");
    // console.log(currentUser);
    // const response = NextResponse.next();
    const pathname = request.nextUrl.pathname;

    if (!currentUser) {
        return NextResponse.redirect(
            new URL(
                `${pathname ? `/log-in?redirect=${pathname}` : "/log-in"}`,
                request.url
            )
        );
    }
}

export const config = {
    matcher: [
        "/change-email",
        "/change-email-verification",
        "/change-password",
        // "/change-password-confirmation",
        // "/change-password-verification",
        "/order-confirmation",
        "/place-order",
        "/change-phone",
        "/change-phone-verification",
        "/profile/my-account",
        "/profile/active-orders",
        "/profile/my-address",
        "/profile/my-wishlist",
        "/profile/credit-balance",
        "/profile/order-history/:orderId*",
        "/my-cart",
        // "/products/product-details/:slug*", // example
    ],
};
