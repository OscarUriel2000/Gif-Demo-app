import React from "react";
import CategoriesList from "./CategoriesList";
import Categoryinput from "./Categoryinput";
const Categories = ({categories = [], setCategories}) => {
    return (
    <div>
        <Categoryinput categories={categories} setCategories={setCategories}
        />
      <br/>
        <CategoriesList categories={categories} setCategories={setCategories}
        />
    </div>
    )
}
export default Categories