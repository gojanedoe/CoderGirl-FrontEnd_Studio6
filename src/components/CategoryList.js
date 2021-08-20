import React, { useState } from "react";

import GroceryItem from "./GroceryItem";

const CategoryList = (props) => {
    const { categoryName, filteredGroceryList, handleGroceryList } = props;
    const [inputVal, setInputVal] = useState("");

    const handleInputKeyPress = (e) => {
        if (e.key === "Enter" && inputVal !== "") {
            // Update groceryList state to add new item
            handleGroceryList((prevState) => {
                return [
                    ...prevState,
                    { name: inputVal, checked: false, category: categoryName },
                ];
            });

            // Clear the text input after an item is entered
            setInputVal("");
        }
    };

    return (
        <div className="List">
            <h2>{categoryName}</h2>
            <ul>
                {filteredGroceryList.map((item) => (
                    <GroceryItem
                        key={item.name}
                        item={item}
                        handleGroceryList={handleGroceryList}
                    />
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add new item"
                value={inputVal}
                onKeyDown={handleInputKeyPress}
                onChange={(e) => {
                    setInputVal(e.target.value);
                }}
            />
        </div>
    );
};

export default CategoryList;
