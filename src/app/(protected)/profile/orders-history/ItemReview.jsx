import Buttons from "@/components/Buttons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { getTextShort } from "@/helpers/utils";
import Image from "next/image";

const ItemReview = ({ data, handleWriteReview }) => {
    // console.log(data);
    return (
        <div className="px-3 pb-10 pt-6">
            {data &&
                data.map((item, i) => (
                    <div key={i}>
                        <div className="flex items-center justify-between gap-x-2">
                            <div className="flex items-center gap-x-4">
                                <Image
                                    alt="avatar"
                                    // src={item.image}
                                    src={`${GET_IMAGE_RENDER}?key=${item?.featuredImage}`}
                                    width={1000}
                                    height={1000}
                                    className="w-12 h-12"
                                />
                                <p className="text-text-neutral-600 text-[12px] font-medium items-start md:hidden">
                                    {getTextShort(item.name, 25)}
                                </p>
                                <p className="text-neutral-600 text-[14px] font-medium items-start md:block hidden">
                                    {getTextShort(item.name, 80)}
                                </p>
                            </div>

                            <div>
                                <Buttons.OutlinedButton
                                    label="Review"
                                    // border="border-[1px]"
                                    // paddingX="px-[15px]"
                                    // className="font-bold text-[13px]"
                                    // deactiveTextColor="text-neutral-700"
                                    // deactiveBorderColor="border-neutral-700"
                                    onClick={() => handleWriteReview(item._id)}
                                />
                            </div>
                        </div>

                        {i !== data.length - 1 && (
                            <div className="border-b border-primary-black border-opacity-[12%] border-dashed my-3"></div>
                        )}
                    </div>
                ))}
        </div>
    );
};

export default ItemReview;
