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

            if (category.children) {
                return (
                    <TreeNode
                        title={category.name}
                        className={`${nodeClass} text-neutral-700 text-sm`}
                        key={category.name}
                    >
                        {renderTreeNodes(category.children)}
                    </TreeNode>
                );
            }
            return (
                <TreeNode
                    title={category.name}
                    className={`${nodeClass} text-neutral-700 text-sm`}
                    key={category.name}
                />
            );
        });
    };

    const handleCheck = (checkedKeys, info) => {
        // setCheckedKeys(checkedKeys);
        console.log("Selected data:", checkedKeys);
        let searchStr = "";
        for (let i = info.checkedNodes.length - 1; i >= 0; i--) {
            searchStr += info.checkedNodes[i].title;
            if (i !== 0) {
                searchStr += "&";
            }
        }
        setSearchQuery({ ...searchQuery, category: searchStr });
    };

    return (
        <div>
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
