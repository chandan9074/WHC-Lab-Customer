"use client";
import { useState, useRef, useEffect } from "react";
import { Form } from "antd";
import Buttons from "@/components/Buttons";
import { useRouter } from "next/navigation";
import { CHANGE_PASSWORD_PATH } from "@/helpers/slug";
import Images from "../../../public/assets/Images";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import EditableInput from "@/components/common/EditableInput";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { setCookie } from "cookies-next";

const MyAccountSection = ({ data }) => {
    console.log(data);
    const [image, setImage] = useState(
        data?.profilePicture
            ? `${GET_IMAGE_RENDER}?key=${data?.profilePicture}`
            : null
    );
    const inputRef = useRef(null);
    const editFieldRef = useRef();
    const [isEdit, setIsEdit] = useState("");
    const [formValue, setFormValue] = useState({
        firstName: data?.firstName,
        lastName: data?.lastName,
        companyName: data?.companyName,
        primaryEmail: data?.primaryEmail,
        primaryPhone: data?.primaryPhone,
    });

    const [fields, setFields] = useState([
        {
            id: 1,
            title: "First Name",
            value: data?.firstName || "",
            isEditing: false,
        },
        {
            id: 2,
            title: "Last Name",
            value: data?.lastName || "",
            isEditing: false,
        },
        {
            id: 3,
            title: "Company Name",
            value: data?.companyName || "",
            isEditing: false,
        },
        {
            id: 4,
            title: "Phone Number",
            value: data?.primaryPhone || "",
            isEditing: false,
        },
        {
            id: 5,
            title: "Email",
            value: data?.primaryEmail || "",
            isEditing: false,
        },
    ]);

    const router = useRouter();

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleClick = () => {
        inputRef.current.click();
    };

    const toggleEditing = (fieldId) => {
        setFields((prevFields) =>
            prevFields.map((field) => ({
                ...field,
                isEditing: field.id === fieldId ? !field.isEditing : false,
            }))
        );
    };

    const handleSave = (fieldId) => {
        setFields((prevFields) =>
            prevFields.map((field) => ({
                ...field,
                isEditing: field.id === fieldId ? false : field.isEditing,
            }))
        );
    };

    // const handleInputChange = (e, fieldId) => {
    //     setFields((prevFields) =>
    //         prevFields.map((field) =>
    //             field.id === fieldId
    //                 ? { ...field, value: e.target.value }
    //                 : field
    //         )
    //     );
    // };

    const handleInputChange = (e) => {
        // setFields((prevFields) =>
        //     prevFields.map((field) =>
        //         field.id === fieldId
        //             ? { ...field, value: e.target.value }
        //             : field
        //     )
        // );
        setFormValue({ ...formValue, name: e.target.value });
    };

    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const handleNavigate = (name) => {
        router.push(
            `${name === "primaryPhone" ? "/change-phone" : "/change-email"}`
        );
    };

    useEffect(() => {
        setCookie("userInfo", `${JSON.stringify(data)}`);
    }, [data]);

    return (
        <div className="py-12 flex flex-col gap-y-10">
            <div className="w-[296px] lg:w-[400px] flex flex-col items-center">
                <div className="relative">
                    {image ? (
                        <Image
                            alt="profile-picture"
                            src={image}
                            width={1000}
                            height={1000}
                            className="w-[120px] h-[120px] rounded-full"
                        />
                    ) : (
                        <Image
                            alt="profile-picture"
                            src={
                                data?.profilePicture
                                    ? data.profilePicture
                                    : Images.profile_avatar
                            }
                            width={1000}
                            height={1000}
                            className="w-[120px] h-[120px] rounded-full"
                        />
                    )}
                    <div
                        onClick={handleClick}
                        className="absolute bottom-0 right-0 w-[30px] h-[30px] flex justify-center items-center bg-[#8790AB] rounded-full cursor-pointer"
                    >
                        <Image
                            alt="camera-icon"
                            src={Icons.camera}
                            width={15}
                            height={15}
                        />
                    </div>
                </div>
                <input
                    type="file"
                    accept="image/*"
                    ref={inputRef}
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
            </div>

            <Form layout="vertical" onFinish={onFinish} className="space-y-4">
                {/* {fields.map((field) => (
                    
                ))} */}
                <EditableInput
                    label={"First Name"}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    name={"firstName"}
                    forwardedRef={editFieldRef}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />
                <EditableInput
                    label={"Last Name"}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    name={"lastName"}
                    forwardedRef={editFieldRef}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />

                <EditableInput
                    label={"Company Name"}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    name={"companyName"}
                    forwardedRef={editFieldRef}
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />

                <EditableInput
                    label={"Phone Number"}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    name={"primaryPhone"}
                    handleNavigate={handleNavigate}
                    // isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />
                <EditableInput
                    label={"Email"}
                    formValue={formValue}
                    setFormValue={setFormValue}
                    name={"primaryEmail"}
                    handleNavigate={handleNavigate}
                    // isEdit={isEdit}
                    setIsEdit={setIsEdit}
                />
                <Form.Item className="pt-4">
                    <Buttons.OutlinedIconWithLabel
                        // className="h-[52px] rounded-full mt-4"
                        width="w-full"
                        label="Change Password"
                        leftIcon={Icons.password}
                        alt="lock-icon"
                        align="left"
                        // width={24}
                        // height={24}
                        onClick={() => router.push(CHANGE_PASSWORD_PATH)}
                    />
                </Form.Item>
            </Form>
            {/* <Buttons.IconWithLabel
                className="w-full h-12 border border-neutral-700 rounded-sm mt-4"
                label="Change Password"
                icon={Icons.password}
                alt="lock-icon"
                width={24}
                height={24}
                onClick={() => router.push(CHANGE_PASSWORD_PATH)}
            /> */}
        </div>
    );
};

export default MyAccountSection;
