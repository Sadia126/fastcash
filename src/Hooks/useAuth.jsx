import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
