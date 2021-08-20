import React from "react";

const GroceryItem = (props) => {
    const { item, handleGroceryList } = props;

    const handleItemClick = () => {
        // Toggle checkmark
        let checkmark = !item.checked;

        // Change item to checked or unchecked
        handleGroceryList((prevState) => {
            return prevState.map((groceryItem) => {
                if (groceryItem.name === item.name) {
                    return { ...groceryItem, checked: checkmark };
                } else {
                    return groceryItem;
                }
            });
        });
    };

    const handleDelBtnClick = () => {
        // TODO: Update groceryList state to delete item
    };

    return (
        <li className={item.checked ? "checked" : ""}>
            <p onClick={handleItemClick}>{item.name}</p>
            <button className="delete-btn" onClick={handleDelBtnClick} />
        </li>
    );
};

export default GroceryItem;
