"use client";
import Buttons from "@/components/Buttons";
import { DatePicker, Select, Space, Spin, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import Icons from "../../../../../public/assets/Icons";
import Image from "next/image";
import CreditService from "@/services/CreditBalanceService";
import { getCookie } from "cookies-next";

const CreditBalance = () => {
    const [creditBalance, setCreditBalance] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const token = getCookie("accessToken");
    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            width: 60,
            render: (text) => (
                <a className="text-[#696F8C] text-sm font-medium">{text}</a>
            ),
        },
        {
            title: "Order ID",
            dataIndex: "orderNumber",
            key: "orderId",
            width: 174.5,
            render: (text) => (
                <a className="text-[#696F8C] text-sm font-medium">{text}</a>
            ),
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            key: "date",
            width: 174.5,
            render: (text) => (
                <a className="text-[#696F8C] text-sm font-medium">{text}</a>
            ),
        },
        {
            title: "Status",
            key: "status",
            dataIndex: "status",
            width: 174.5,
            align: "center",
            render: (_, record) => (
                <div className="flex justify-center">
                    <p
                        className={`py-1 px-4 text-sm font-medium leading-[21px] rounded-sm ${
                            record.status === "On Progress"
                                ? "bg-[#FDF7F4] text-[#FFB020]"
                                : record.status === "Order Shipped"
                                ? "bg-[#E8F6FC] text-[#16A6DF]"
                                : "bg-[#F6FAF0] text-[#A8C866]"
                        }`}
                    >
                        {record.status}
                    </p>
                </div>
            ),
        },
        {
            title: "Amount",
            key: "amount",
            width: 174.5,
            align: "center",

            render: (_, text) => (
                <a className="text-[#696F8C] text-sm font-medium">
                    {text.amount}
                </a>
            ),
        },
    ];

    const handleGetCreditBalance = async () => {
        try {
            setLoading(true);
            const res = await CreditService.getCredits(page, token);
            console.log(res);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        handleGetCreditBalance();
        console.log("asdf");
    }, [page]);

    const data = [
        {
            key: "1",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 648.00",
            status: "On Progress",
        },
        {
            key: "2",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 508.00",
            status: "Order Shipped",
        },
        {
            key: "3",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 158.00",
            status: "Delivered",
        },
        {
            key: "4",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 648.00",
            status: "On Progress",
        },
        {
            key: "5",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 508.00",
            status: "Order Shipped",
        },
        {
            key: "6",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 158.00",
            status: "Delivered",
        },
        {
            key: "7",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 648.00",
            status: "On Progress",
        },
        {
            key: "8",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 508.00",
            status: "Order Shipped",
        },
        {
            key: "9",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 158.00",
            status: "Delivered",
        },
        {
            key: "10",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 648.00",
            status: "On Progress",
        },
        {
            key: "11",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 508.00",
            status: "Order Shipped",
        },
        {
            key: "12",
            orderId: "13a5s4dfa6dsf2",
            date: "Jan 24,2024",
            amount: "$ 158.00",
            status: "Delivered",
        },
    ];

    const handleStatusChange = (value) => {
        console.log(`selected ${value}`);
    };
    const onMonthChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="p-4 md:p-8 flex flex-col gap-y-5 md:gap-y-6">
            <Spin spinning={loading} fullscreen />
            <div className="p-0 px-4 py-6 md:p-8 flex flex-col md:flex-row gap-y-6 md:justify-between md:items-center">
                <div className="px-4 py-6 flex justify-between md:gap-x-12">
                    <div className="space-y-1">
                        <p className="text-brand-blue-800 text-sm leading-[21px]">
                            Credit Limit
                        </p>
                        <p className="text-brand-blue-500 text-xl md:text-2xl font-medium leading-[30px] md:leading-9">
                            €8000
                        </p>
                    </div>

                    <div className="space-y-1">
                        <p className="text-brand-blue-800 text-sm leading-[21px]">
                            Credit Balance
                        </p>
                        <p className="text-brand-blue-500 text-xl md:text-2xl font-medium leading-[30px] md:leading-9">
                            €4320.80
                        </p>
                    </div>
                </div>

                <Buttons.PrimaryButton
                    label={"Apply for Credit"}
                    className="h-12 whitespace-nowrap"
                />
            </div>

            <div className="p-8 border border-[#EBEDF0] rounded-[4px] space-y-6">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <h4 className="leading-6 text-neutral-500 whitespace-nowrap">
                        Total Transactions:{" "}
                        <span className="text-brand-blue-500 font-medium">
                            04
                        </span>
                    </h4>

                    <div className="flex flex-col lg:flex-row gap-6">
                        <Select
                            className="w-full lg:w-[100px] xl:w-[166px]"
                            style={{
                                height: "40px",
                                borderRadius: "2px",
                                boxShadow: "none",
                            }}
                            suffixIcon={
                                <Image
                                    alt="suffix-icon"
                                    src={Icons.suffixIcon}
                                    width={1000}
                                    height={1000}
                                    className="w-3 h-3"
                                />
                            }
                            allowClear
                            defaultValue="Status"
                            options={[
                                {
                                    value: "On Progress",
                                    label: "On Progress",
                                },
                                {
                                    value: "Order Shipped",
                                    label: "Order Shipped",
                                },
                                {
                                    value: "Delivered",
                                    label: "Delivered",
                                },
                            ]}
                            onChange={handleStatusChange}
                        />

                        <DatePicker
                            className="w-full lg:w-[100px] xl:w-[166px]"
                            onChange={onMonthChange}
                            picker="month"
                            format={(value) => `Month: ${value.format("MMMM")}`}
                            suffixIcon={
                                <Image
                                    alt="suffix-icon"
                                    src={Icons.suffixIcon}
                                    width={1000}
                                    height={1000}
                                    className="w-3 h-3"
                                />
                            }
                        />

                        <DatePicker
                            className="w-full lg:w-[100px] xl:w-[166px]"
                            onChange={onMonthChange}
                            picker="year"
                            format={(value) => `Year: ${value.format("YYYY")}`}
                            suffixIcon={
                                <Image
                                    alt="suffix-icon"
                                    src={Icons.suffixIcon}
                                    width={1000}
                                    height={1000}
                                    className="w-3 h-3"
                                />
                            }
                        />
                    </div>
                </div>
                <Table
                    className="tab-scroll"
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        total: 100,
                        pageSize: 5,
                        onChange: (page) => {
                            setPage(page);
                        },
                    }}
                    scroll={{
                        y: 340,
                    }}
                />
            </div>
        </div>
    );
};

export default CreditBalance;
