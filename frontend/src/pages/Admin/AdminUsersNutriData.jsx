import React, { useEffect } from "react";
import SidebarWithNav from "../../components/SidebarWithNav";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AdminSingleUserNutriData } from "../../redux/Admin/admin.action";
import AdminNutriData from "./AdminNutriData";

const AdminUsersNutriData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AdminSingleUserNutriData(id));
  }, []);

  return (
    <div>
      <AdminNutriData />
    </div>
  );
};

export default AdminUsersNutriData;
