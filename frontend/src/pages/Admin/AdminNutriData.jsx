import { Grid, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminNutriCard from "../../components/AdminNutriCard";
import SidebarWithNav from "../../components/SidebarWithNav";
import { getAdminNutriData } from "../../redux/Admin/admin.action";

const AdminNutriData = () => {
  const { isLoading, isError, nutriData } = useSelector((store) => store.admin);
  const dispatch = useDispatch();


  useEffect(() => {
    if (nutriData.length === 0) {
      dispatch(getAdminNutriData());
    }
  }, []);

  return (
    <div>
      <SidebarWithNav />

      <Heading textAlign={"center"} mb={"50px"} mt={"30px"}>
        NutriData
      </Heading>
      <Grid
        margin={"auto"}
        marginLeft="20%"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          xl: "repeat(3,1fr)",
        }}
        gap={{ base: "10", md: "10", xl: "15" }}
      >
        {nutriData.map((item) => (
          <>
            <AdminNutriCard key={item._id} {...item} />
          </>
        ))}
      </Grid>
    </div>
  );
};

export default AdminNutriData;
