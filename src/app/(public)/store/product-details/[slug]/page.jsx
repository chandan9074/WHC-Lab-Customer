import Layouts from "@/layouts";
import ProductDetailsSection from "@/sections/ProductDetails/ProductDetailsSection";
import ProductView from "@/sections/ProductDetails/ProductView";
import RecentlyViewedSlideShowSection from "@/sections/ProductDetails/RecentlyViewedSlideShowSection";
import ProductService from "@/services/productsService";

const page = async ({ params }) => {
    // const token = getCookie("accessToken", { cookies });

    const data = await ProductService.getSingleProduct(params.slug);
    const getProducts = ProductService.getProducts();
    // const getWishlist = await WishlistServices.getWishlist(token);
    const [productData] = await Promise.all([
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
                <ProductView data={data.body.doc} />
                <ProductDetailsSection data={data.body.doc} />
                <RecentlyViewedSlideShowSection
                    data={productData}
                // wishListIds={wishListIds}
                />
            </section>
        </Layouts.Primary>
        // </Suspense>
    );
};

export default page;
