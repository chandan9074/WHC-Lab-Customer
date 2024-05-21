"use client";
import Buttons from "@/components/Buttons";
import { Spin, Table, Input } from "antd";
import { useEffect, useState } from "react";
import CreditService from "@/services/CreditBalanceService";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";

const { Search } = Input;

const CreditBalance = () => {
    const [creditBalance, setCreditBalance] = useState([]);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const token = getCookie("accessToken");

    // Function to format the date
    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" };
        const date = new Date(dateString);
        return new Intl.DateTimeFormat("en-US", options).format(date);
    };

    const handleGetCreditBalance = async () => {
        try {
            setLoading(true);
            const res = await CreditService.getCredits(page, token);
            if (res?.status === 200) {
                console.log(res);
                const updatedDocs = res.docs.map((doc, index) => ({
                    ...doc,
                    key: index + 1, // Adding the 'key' property
                    createdAt: formatDate(doc.createdAt),
                }));
                res.docs = updatedDocs;
                setCreditBalance(res);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    const handlePay = async (number) => {
        try {
            setLoading(true);
            const res = await CreditService.makePayment(number, token);

            if (res?.status === 200) {
                toast.success(res?.message);
                const paymentLink = res?.link;

                if (paymentLink) {
                    // window.open(paymentLink, "_blank");
                    window.location.href = paymentLink;
                } else {
                    toast.error("Payment link not found.");
                }
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

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
            title: "Order Number",
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
                            record.status === "unpaid"
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
        {
            title: "Action",
            align: "center",
            width: 0,
            render: (_, record) => {
                return (
                    <>
                        <button
                            onClick={() => handlePay(record?.orderNumber)}
                            className="py-2 px-4 bg-brand-blue-500 text-white rounded-md font-medium text-center text-sm"
                        >
                            Pay now
                        </button>
                    </>
                );
            },
        },
    ];

    useEffect(() => {
        handleGetCreditBalance();
    }, [page]);

    const handleStatusChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onMonthChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const handleChange = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    };

    console.log(creditBalance);

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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div>
                            <input
                                placeholder="input order number"
                                className="border py-[7px] px-2"
                                onChange={(e) => handleChange(e)}
                            />
                            <button className="py-2 px-4 bg-brand-blue-500 text-white rounded-e-md font-medium text-center text-sm">
                                Search
                            </button>
                        </div>
                        {/* <Select
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
                                    value: "paid",
                                    label: "Paid",
                                },
                                {
                                    value: "unpaid",
                                    label: "Unpaid",
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
                        /> */}
                    </div>

                    <h4 className="leading-6 text-neutral-500 whitespace-nowrap">
                        Total Transactions:{" "}
                        <span className="text-brand-blue-500 font-medium">
                            {creditBalance?.totalDocuments}
                        </span>
                    </h4>
                </div>
                <Table
                    className="tab-scroll"
                    columns={columns}
                    dataSource={creditBalance?.docs}
                    pagination={{
                        total: creditBalance?.totalDocuments,
                        pageSize: 10,
                        onChange: (page) => {
                            setPage(page);
                        },
                    }}
                    // scroll={{
                    //     y: 340,
                    // }}
                />
            </div>
        </div>
    );
};

export default CreditBalance;
