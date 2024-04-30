"use client";
import NoDataFound from "@/components/common/NoDataFound";
import Wish from "./Wish";

const Wishlists = ({ wishLists, handleDelete, createCartItem }) => {
    console.log(wishLists);

    return (
        <div className={`flex flex-col gap-0`}>
            {wishLists.length === 0 && (
                <NoDataFound message="You have no wishList currently!" />
            )}
            {wishLists?.length > 0 &&
                wishLists?.map((wish) => {
                    return (
                        <div
                            key={wish._id}
                            className="border-b last:border-none py-4 sm:py-5"
                        >
                            <Wish
                                image={wish.productFeaturedImage}
                                name={wish.productName}
                                price={
                                    wish.productOfferPrice
                                        ? wish.productOfferPrice
                                        : wish.productPrice
                                }
                                inStock={wish.inStock}
                                id={wish.productId}
                                // handleGetWishList={handleGetWishList}
                                // setLoading={setLoading}
                                handleDelete={handleDelete}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default Wishlists;
