import React, { useEffect, useState } from "react";
import { Tree, Checkbox } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { TreeNode } = Tree;

const Category = ({ data, setSearchQuery, searchQuery }) => {
    // const [checkedKeys, setCheckedKeys] = useState([]);
    // useEffect(() => {
    //     setCheckedKeys(searchQuery.category.split("&"));
    // }, [searchQuery.category]);

    const renderTreeNodes = (data) => {
        return data?.map((category) => {
            const isNodeChecked = searchQuery?.category
                .split("&")
                .includes(category.name);
            const nodeClass = isNodeChecked ? "font-semibold" : "font-normal";

            return (
                <TreeNode
                    title={
                        <div className="flex justify-between items-center">
                            <span
                                className={`${nodeClass} text-neutral-700 text-sm`}
                            >
                                {category.name} &nbsp;
                            </span>
                            <span className="text-neutral-100 text-sm">
                                ({category.quantity})
                            </span>
                        </div>
                    }
                    key={category.name}
                />
            );
        });
    };

    const handleCheck = (checkedKeys, info) => {
        // // setCheckedKeys(checkedKeys);
        // console.log("Selected data:", checkedKeys);
        // let searchStr = "";
        // for (let i = info.checkedNodes.length - 1; i >= 0; i--) {
        //     searchStr += info.checkedNodes[i].title;
        //     if (i !== 0) {
        //         searchStr += "&";
        //     }
        // }
        // setSearchQuery({ ...searchQuery, category: searchStr });
    };

    return (
        <div className="flex items-center">
            <Tree
                checkable
                defaultExpandAll
                // defaultCheckedKeys={data.map((category) =>
                //     category._id.toString()
                // )}
                switcherIcon={<DownOutlined />}
                onCheck={handleCheck}
                checkedKeys={searchQuery?.category.split("&")}
            >
                {renderTreeNodes(data)}
            </Tree>
        </div>
    );
};

export default Category;
