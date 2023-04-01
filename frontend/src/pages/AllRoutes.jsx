import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/AdminLogin";
import Home from "./Home";
import AdminUser from "./Admin/AdminUser";
import AdminNutriData from "./Admin/AdminNutriData";
import AdminAddNutridata from "./Admin/AdminAddNutridata";
import AdminHome from "./Admin/AdminHome";

import Login from './User.login';
import Signup from './signup';
import AdminUsersNutriData from "./Admin/AdminUsersNutriData";
import Support from "./Support/Support";
import Blog from "./Blog/Blog";
import About from './About/About';




const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/support" element={<Support />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path="/admin/users" element={<AdminUser />} />
        <Route path="/admin/users/:id" element={<AdminUsersNutriData />} />
        <Route path="/admin/nutridata" element={<AdminNutriData />} />
        <Route path="/admin/nutridata/add" element={<AdminAddNutridata />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
