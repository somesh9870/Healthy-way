import React from "react";
import SidebarWithNav from "../../components/SidebarWithNav";
import UserStats from "../../components/UserStats";
import { Heading } from "@chakra-ui/react";

const AdminHome = () => {
  return (
    <div>
      <SidebarWithNav />
      <div style={{ margin: "auto", marginLeft: "20%" }}>
        <Heading textAlign={"center"} mt={"50px"} mb={"50px"}>
          DashBoard
        </Heading>
        <UserStats />
      </div>
    </div>
  );
};

export default AdminHome;
