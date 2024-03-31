import { orderStatusColor } from "@/libs/common";
import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const Primary = ({ title }) => {
    return (
        <div
            style={{
                color: BadgeColor(title).color,
                backgroundColor: BadgeColor(title).bgColor,
            }}
            className="flex items-center justify-center px-[10px] py-[5px] rounded-md"
        >
            <Text
                className={`font-bold`}
                style={{ color: BadgeColor(title).color }}
            >
                {title}
            </Text>
        </div>
    );
};

export default Primary;

const BadgeColor = (title) => {
    const status = orderStatusColor.find((item) => item.title === title);
    return status;
};
