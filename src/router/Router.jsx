import { Route, Routes } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Details from "../pages/Details";
import Admin from "../components/admin/Admin";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          <Route path="/dashboard" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
