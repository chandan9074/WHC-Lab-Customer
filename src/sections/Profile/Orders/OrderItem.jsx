import { formatDate, formatTime } from "@/helpers/utils";
import Badges from "@/components/Badges";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { currencyData } from "@/libs/common";
import { ORDERS_HISTORY_PATH } from "@/helpers/slug";
import Link from "next/link";
import { generateInvoice, handlePay } from "@/services/common";

const OrderItem = ({ data }) => {
    const createdAtDate = new Date(data?.createdAt);

    return (
        <div className=" py-6 px-8 bg-white border border-neutral-30 rounded-[8px]  duration-500">
            <Link href={`${ORDERS_HISTORY_PATH}/${data?._id}`}>
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <Image
                                alt="calender"
                                src={Icons.calendar}
                                width={18}
                            />
                            <p className="text-neutral-300 font-medium text-sm">
                                {formatDate(createdAtDate)}
                            </p>
                        </div>
                        <p>
                            <span className="text-neutral-300 text-sm font-medium">
                                Order number &nbsp;
                            </span>
                            <span className="font-semibold text-neutral-700">
                                #{data?.number}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-row gap-2">
                            <Image alt="clock" src={Icons.clock} width={18} />
                            <p className="text-neutral-300 font-medium text-sm">
                                {formatTime(createdAtDate)}
                            </p>
                        </div>
                        <p className="text-neutral-700 text-sm font-medium">
                            {data?.lineItems?.length} items
                        </p>
                        <p className="text-neutral-700 font-semibold text-base">
                            {currencyData[data?.currency].icon} {data?.total}
                        </p>
                    </div>
                </div>
            </Link>

            <div className="mt-1">
                {data?.paymentStatus === "paid" ? (
                    <a
                        className="text-blue-500 font-medium underline p-0 m-0 cursor-pointer"
                        onClick={() => generateInvoice(data?.number)}
                    >
                        Download Invoice
                    </a>
                ) : (
                    <button
                        type="button"
                        onClick={() => handlePay(data?.number)}
                        className="py-2 px-4 bg-brand-blue-500 text-white rounded-md font-medium text-center text-sm"
                    >
                        Pay now
                    </button>
                )}
            </div>
        </div>
    );
};

export default OrderItem;
