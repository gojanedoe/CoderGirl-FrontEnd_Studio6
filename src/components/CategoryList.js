import React, { useState } from "react";

const CategoryList = (props) => {
    const { categoryName, filteredGroceryList } = props;

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter") {
            // TODO: Update groceryList state to add new item
        }
    };

    return (
        <div className="List">
            <h2>{categoryName}</h2>
            <ul>
                {filteredGroceryList.map((item) => (
                    <li>{item.name}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add new item"
                value=""
                onKeyDown={handleInputKeyPress}
                onChange={() => {}}
            />
        </div>
    );
};

export default CategoryList;
