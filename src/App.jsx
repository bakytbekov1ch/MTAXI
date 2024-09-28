import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./widgets/layout/Layout";
import Home from "./shared/home/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
