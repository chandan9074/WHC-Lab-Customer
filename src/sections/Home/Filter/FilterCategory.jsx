import React, { useEffect, useState } from "react";
import { Tree, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { TreeNode } = Tree;

const FilterCategory = ({ data, setSearchQuery, searchQuery, name }) => {
    // const [checkedKeys, setCheckedKeys] = useState([]);
    // useEffect(() => {
    //     setCheckedKeys(searchQuery.category.split("&"));
    // }, [searchQuery.category]);

    const renderTreeNodes = (data) => {
        return data?.map((item) => {
            const isNodeChecked = searchQuery[name]
                ?.split("&")
                .includes(item.name);
            const nodeClass = isNodeChecked ? "font-semibold" : "font-normal";

            return (
                <TreeNode
                    title={
                        <div className="flex justify-between items-center mt-0.5">
                            <span
                                className={`${nodeClass} text-brand-blue-800 text-sm`}
                            >
                                {item.name} &nbsp;
                            </span>
                            <span className="text-neutral-100 text-sm">
                                ({item.quantity})
                            </span>
                        </div>
                    }
                    key={item.name}
                />
            );
        });
    };

    const handleCheck = (checkedKeys, info) => {
        // setCheckedKeys(checkedKeys);
        console.log("Selected data:", info.checkedNodes);
        let searchStr = "";
        for (let i = info.checkedNodes.length - 1; i >= 0; i--) {
            searchStr += info.checkedNodes[i].key;
            if (i !== 0) {
                searchStr += "&";
            }
        }
        console.log(searchStr);
        setSearchQuery({ ...searchQuery, [name]: searchStr });
    };

    return (
        <div className="flex items-center">
            <Tree
                checkable
                defaultExpandAll
                // defaultCheckedKeys={data.map((name) =>
                //     name._id.toString()
                // )}
                switcherIcon={<DownOutlined />}
                onCheck={handleCheck}
                checkedKeys={searchQuery[name]?.split("&")}
            >
                {renderTreeNodes(data)}
            </Tree>
        </div>
    );
};

export default FilterCategory;
