import { formatDate, formatTime } from "@/helpers/utils";
import Badges from "@/components/Badges";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { currencyData } from "@/libs/common";
import { ORDERS_HISTORY_PATH } from "@/helpers/slug";
import Link from "next/link";
import { generateInvoice } from "@/services/common";


const OrderItem = ({
    id,
    createdAt,
    orderId,
    state,
    lineItemCount,
    total,
    currency,
}) => {
    const createdAtDate = new Date(createdAt);

    return (
        <div className=" py-6 px-8 bg-white border border-neutral-30 rounded-[8px]  duration-500">
            <Link
                href={`${ORDERS_HISTORY_PATH}/${id}`}
            >
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <Image alt="calender" src={Icons.calendar} width={18} />
                            <p className="text-neutral-300 font-medium text-sm">
                                {formatDate(createdAtDate)}
                            </p>
                        </div>
                        <p>
                            <span className="text-neutral-300 text-sm font-medium">
                                Order number &nbsp;
                            </span>
                            <span className="font-semibold text-neutral-700">
                                #{orderId}
                            </span>
                        </p>
                        {state && <Badges.Primary title={state} />}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                        <div className="flex flex-row gap-2">
                            <Image alt="clock" src={Icons.clock} width={18} />
                            <p className="text-neutral-300 font-medium text-sm">
                                {formatTime(createdAtDate)}
                            </p>
                        </div>
                        <p className="text-neutral-700 text-sm font-medium">
                            {lineItemCount} items
                        </p>
                        <p className="text-neutral-700 font-semibold text-base">
                            {currencyData[currency].icon} {total}
                        </p>
                    </div>
                </div>
            </Link>
            <a className="text-blue-500 font-medium underline p-0 m-0 cursor-pointer" onClick={() => generateInvoice(data?.number)}>Download Invoice</a>
        </div>
    );
};

export default OrderItem;
