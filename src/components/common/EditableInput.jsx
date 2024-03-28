import { Form } from "antd";
import Image from "next/image";
import React, { useCallback, useEffect, useRef } from "react";
import Icons from "../../../public/assets/Icons";

const EditableInput = ({
    label,
    formValue,
    setFormValue,
    name,
    forwardedRef,
    setIsEdit,
    isEdit,
    handleNavigate,
}) => {
    const inputRef = useRef(null);

    const handleFocusRef = useCallback(() => {
        if (forwardedRef) {
            forwardedRef.current = {
                focus: () => {
                    inputRef.current.focus();
                },
            };
        }
    }, [forwardedRef]);

    useEffect(() => {
        handleFocusRef();
    }, [handleFocusRef]);

    const handleInputChange = (e) => {
        setFormValue((prev) => ({ ...prev, [name]: e.target.value }));
    };

    const handleEditClick = () => {
        setIsEdit(name);
        if (handleNavigate) {
            handleNavigate(name);
        } else {
            if (inputRef.current) inputRef.current.focus();
        }
    };
    return (
        <Form.Item
            // key={}
            label={label}
            className="text-neutral-100 text-sm font-medium "
        >
            <div
                // className={`flex h-12 border ${
                //     field.isEditing
                //         ? "border-magenta-600"
                //         : "border-[#DFE2E6]"
                // } focus:outline-none pr-2 rounded-sm bg-[#FAFBFB]`}
                className={`flex h-12 border border-[#DFE2E6] focus:outline-none pr-2 rounded-[4px] bg-[#FAFBFB] ${
                    isEdit === name ? "border-magenta-600" : "border-[#DFE2E6]"
                } `}
            >
                <input
                    value={formValue[name]}
                    ref={inputRef}
                    onChange={(e) => handleInputChange(e)}
                    readOnly={!(isEdit === name)}
                    className={`w-full bg-[#FAFBFB]  rounded-md text-neutral-700 text-sm font-normal border-none outline-none active:outline-none focus:outline-none pl-3`}
                />
                {isEdit === name ? (
                    <Image
                        alt="save"
                        src={Icons.save}
                        width={24}
                        height={24}
                        onClick={() => setIsEdit("")}
                        className="cursor-pointer"
                    />
                ) : (
                    <Image
                        alt="edit-icon"
                        src={Icons.edit}
                        width={24}
                        height={24}
                        onClick={() => handleEditClick()}
                        className="cursor-pointer"
                    />
                )}
            </div>
        </Form.Item>
    );
};

export default EditableInput;
