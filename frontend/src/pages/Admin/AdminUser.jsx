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
      <div
        style={{
          margin: "auto",
          width: "70%",
          marginLeft: "20%",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "15px",
        }}
      >
        {users.map((item) => (
          <>
            <AdminUsercard key={item.id} {...item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default AdminUser;
