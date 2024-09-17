import Layouts from "@/layouts";
import PopupModalComponent from "@/sections/Home/PopupModalSection";
import ProductView from "@/sections/ProductDetails/ProductView";
import ProductService from "@/services/productsService";
import { getCookie } from "cookies-next";
import dynamic from "next/dynamic";

const ProductDetailsSection = dynamic(
    () => import("@/sections/ProductDetails/ProductDetailsSection"),
    {
        ssr: false,
    }
);

const RecentlyViewedSlideShowSection = dynamic(
    () => import("@/sections/ProductDetails/RecentlyViewedSlideShowSection"),
    {
        ssr: false,
    }
);

import { headers } from "next/headers";
function IP() {
    const FALLBACK_IP_ADDRESS = "0.0.0.0";
    const forwardedFor = headers().get("x-forwarded-for");

    if (forwardedFor) {
        return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
    }

    return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

const Page = async ({ params }) => {
    // const token = getCookie("accessToken", { cookies });
    const res = IP();

    const getSingleProduct = ProductService.getProducts(
        { id: params.slug },
        res
    );
    const _selectedLocation = getCookie("selected_location");
    const locationId = _selectedLocation && JSON.parse(_selectedLocation);
    const getProducts = ProductService.getProducts({}, res);
    // const getWishlist = await WishlistServices.getWishlist(token);
    const [singleProductData, productData] = await Promise.all([
        getSingleProduct,
        getProducts,
        // getWishlist,
    ]);

    // console.log({ singleProductData });
    // const wishListIds = wishlistData?.body?.docs.map(
    //     (wishes) => wishes.productId
    // );

    return (
        // <Suspense fallback={<Loader />}>
        <Layouts.Primary>
            <section className="container mx-auto flex flex-col gap-y-20 px-4 sm:px-0 pb-[120px] py-4 md:py-6">
                <ProductView data={singleProductData?.doc} />
                <ProductDetailsSection data={singleProductData?.doc} />
                <RecentlyViewedSlideShowSection
                    data={productData?.docs}
                    // wishListIds={wishListIds}
                />

                <PopupModalComponent pageLocation="product-details-page" />
            </section>
        </Layouts.Primary>
        // </Suspense>
    );
};

export default Page;
