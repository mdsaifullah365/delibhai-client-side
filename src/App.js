import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Registration from "./Pages/Registration/Registration";
import Footer from "./Pages/Shared/Footer";
import Navbar from "./Pages/Shared/Navbar";
import PageNotFound from "./Pages/Shared/PageNotFound";

function App() {
  const path = useLocation().pathname;
  console.log(path);
  return (
    <>
      {path !== "/admin-dashboard" && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {path !== "/admin-dashboard" && <Footer />}
    </>
  );
}

export default App;
