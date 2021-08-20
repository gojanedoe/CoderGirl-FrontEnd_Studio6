import React, { useState } from "react";
import "./App.css";
import { STARTER_LIST } from "./data/starterList";
import { CATEGORIES } from "./data/categoriesList";

import CategoryList from "./components/CategoryList";

const App = () => {
    const [groceryList, setGroceryList] = useState(STARTER_LIST);

    console.log(groceryList);

    return (
        <div className="App">
            <h1>Grocery List</h1>
            <div className="List__Container">
                {/* TODO: Map over CategoRries to display a <CategoryList> component for each category */}
                {/* First try to just make the category names appear before implementing <CategoryList> components */}
                {CATEGORIES.map((category) => (
                    <CategoryList
                        key={category}
                        categoryName={category}
                        filteredGroceryList={groceryList.filter(
                            (item) => item.category === category
                        )}
                        handleGroceryList={setGroceryList}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
