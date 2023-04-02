import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    const token = localStorage.getItem("userToken");
    const email = localStorage.getItem("userEmail");
    const toast = useToast();

    if (!email || !token) {
        return (
            toast({
                title: "Cannot access, Plese login !",
                status: "error",
                position: "top",
                isClosable: true,
            }),
            <Navigate to="/login" />
        )
    }

    return children;
};