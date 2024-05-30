import Buttons from "@/components/Buttons";
import CustomModal from "@/components/common/CustomModal";
import React, { useState } from "react";
import { Flex, Select } from "antd";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { hasCookie, setCookie } from "cookies-next";
import { useUserContext } from "@/contexts/UserContext";
import Image from "next/image";
import { toast } from "react-toastify";
import { currencyData } from "@/libs/common";

function CountrySelectionModal({ handleLocation }) {
    const [selectLocation, setSelectLocation] = useState();
    const { locations, currency, setCurrency } = useUserContext();
    const selected_locations = hasCookie("selected_location");
    const [selected, setSelected] = useState(true);

    const handleChange = (value) => {
        // console.log(value, locations);
        setSelectLocation(value);
        // const locationObj = locations.find((item) => item._id === value);
        // console.log(locationObj, "lcoation");
    };

    const handleSelectLocation = () => {
        if (!!selectLocation) {
            const locationObj = locations.find(
                (item) => item.value === selectLocation
            );
            setCookie("selected_location", JSON.stringify(selectLocation), {
                maxAge: 60 * 60 * 12,
            });
            setCookie("selected_currency", locationObj.currency);
            const getCurrencyKey = currencyData[locationObj.currency];
            setCurrency(getCurrencyKey);
            handleLocation(selectLocation);
            setSelected(false);
        } else {
            toast.info("Please select your country first.");
        }
    };

    return (
        <CustomModal
            title="Select Your Country. "
            open={!selected_locations && selected}
            footer={null}
            wrapClassName="custom-modal"
            centered={true}
            onCancel={() =>
                !!selectLocation
                    ? ""
                    : toast.info("Please select your country first.")
            }
        >
            <Flex vertical={"column"} align="end" gap={20} className="mt-10">
                <Select
                    placeholder="Please select your country"
                    style={{
                        backgroundColor: "#FAFBFB",
                        height: 50,
                        borderRadius: "20px",
                        width: "100%",
                    }}
                    onChange={handleChange}
                    options={locations?.map((location, index) => ({
                        ...location,
                        label: (
                            <div className="flex justify-start items-center align-middle text-[#354764] gap-4">
                                {location.flag && (
                                    <Image
                                        width={1000}
                                        height={1000}
                                        alt="product-image"
                                        src={`${GET_IMAGE_RENDER}?key=${location.flag}`}
                                        className="w-[30px] h-[20px]"
                                    />
                                )}

                                {location.label}
                            </div>
                        ),
                    }))}
                />
                <Buttons.PrimaryButton
                    label={"Continue"}
                    className="h-12 whitespace-nowrap"
                    onClick={handleSelectLocation}
                ></Buttons.PrimaryButton>
            </Flex>
        </CustomModal>
    );
}

export default CountrySelectionModal;
