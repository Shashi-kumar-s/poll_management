import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../features/login";
import HomePage from "../pages/HomePage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  );
};
export default AllRoutes;
