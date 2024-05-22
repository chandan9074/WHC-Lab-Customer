import { formatDate, formatTime } from "@/helpers/utils";
import Badges from "@/components/Badges";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import { currencyData } from "@/libs/common";

const OrderItem = ({
    createdAt,
    orderId,
    state,
    lineItemCount,
    total,
    currency,
}) => {
    const createdAtDate = new Date(createdAt);

    return (
        <div className="flex flex-row justify-between py-6 px-8 bg-neutral-10 border border-neutral-30 rounded-[8px]  duration-500 cursor-pointer">
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
    );
};

export default OrderItem;
