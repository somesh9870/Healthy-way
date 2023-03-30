import React from 'react'
import { Route, Routes } from "react-router-dom";
import Admin from "./Admin/AdminLogin";
import Home from "./Home";
import AdminUser from "./Admin/AdminUser";
import AdminNutriData from "./Admin/AdminNutriData";
import AdminAddNutridata from "./Admin/AdminAddNutridata";
import AdminHome from "./Admin/AdminHome";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/login" element={<Admin />} />
        <Route path="/admin/users" element={<AdminUser />} />
        <Route path="/admin/nutridata" element={<AdminNutriData />} />
        <Route path="/admin/nutridata/add" element={<AdminAddNutridata />} />
      </Routes>
    </div>
  );
};

export default AllRoutes