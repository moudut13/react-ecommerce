import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import User from "./User/User/Home";
import Permission from "./User/Permission/Permission";
import Role from "./User/Role/Role";
import Tags from "./Product/Tags/Tags";
import Category from "./Product/Category/Category";
import Product from "./Product/Product/Product";

const Main = () => {
    return(
        <div className="main-wrapper">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="user" element={<User/>} />
                <Route path="role" element={<Role/>} />
                <Route path="permission" element={<Permission/>} />
                <Route path="tags" element={<Tags/>} />
                <Route path="category" element={<Category/>} />
                <Route path="product" element={<Product/>} />
            </Routes>
        </div>
    )
}
export default Main;