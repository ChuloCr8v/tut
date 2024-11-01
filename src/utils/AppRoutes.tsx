import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/*" />
        <Route element={<Home />} path="/home" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
