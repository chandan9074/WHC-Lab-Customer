import Layouts from "@/layouts";
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

const Page = async ({ params }) => {
    // const token = getCookie("accessToken", { cookies });

    const getSingleProduct = ProductService.getProducts({ id: params.slug });
    const _selectedLocation = getCookie("selected_location");
    const locationId = _selectedLocation && JSON.parse(_selectedLocation);
    const getProducts = ProductService.getProducts({
        locationId: locationId || "",
    });
    // const getWishlist = await WishlistServices.getWishlist(token);
    const [singleProductData, productData] = await Promise.all([
        getSingleProduct,
        getProducts,
        // getWishlist,
    ]);

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
            </section>
        </Layouts.Primary>
        // </Suspense>
    );
};

export default Page;
