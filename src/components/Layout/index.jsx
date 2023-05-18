import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";
import { useEffect } from "react";
import { AXIOS } from "../../configs/axios.configs";

export const Layout = ({ children }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // context isAuth = true
      AXIOS.defaults.headers.common.Authorization = "Bearer " + token;
    }
  }, []);

  return (
    <>
      <Header />
      <div className="p-3 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
