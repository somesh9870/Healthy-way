import { Grid, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminUsercard from "../../components/AdminUsercard";
import SidebarWithNav from "../../components/SidebarWithNav";
import { getAdminUsers } from "../../redux/Admin/admin.action";

const AdminUser = () => {
  const { isLoading, isError, users } = useSelector((store) => store.admin);
  const dispatch = useDispatch();
  console.log(users);
  useEffect(() => {
    if (users.length === 0) {
      dispatch(getAdminUsers());
    }
  }, []);

  return (
    <div>
      <SidebarWithNav />
      {/* <div
        style={{
          margin: "auto",
          width: "70%",
          marginLeft: "20%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
        }}
      > */}
      <Heading textAlign={"center"} mb={"50px"} mt={"30px"}>
        Users
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
        {users.map((item) => (
          <>
            <AdminUsercard key={item._id} {...item} />
          </>
        ))}
      </Grid>
    </div>
  );
};

export default AdminUser;
