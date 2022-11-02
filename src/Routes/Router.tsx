import React from "react";
import { Routes, Route } from "react-router-dom";
import CarMain from "@/Pages/CarMain/CarMain";
import CarDetail from "@/Pages/CarDetail/CarDetail";
import Layout from "@/Components/Layouts/Layout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<CarMain />} />
        <Route path="/carDetail/:id" element={<CarDetail />} />
      </Route>
    </Routes>
  );
};

export default Router;
