import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Dashboard from './pages/Dashboard';
import DashboardHome from './pages/Dashboard/Routes/DashboardHome';
import AddItem from './pages/Dashboard/Routes/Delifood/AddItem';
import AddCategory from './pages/Dashboard/Routes/Delifood/AddCategory';
import Foods from './pages/Dashboard/Routes/Delifood';
import Delifood from './pages/Delifood';
import Items from './pages/Delifood/Items';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import PageNotFound from './pages/Shared/PageNotFound';
import AdminLogin from './pages/AdminLogin';
import RequireAdmin from './pages/Shared/RequireAdmin';

function App() {
  const path = useLocation().pathname;
  return (
    <>
      {!path.includes('/admin-dashboard') && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/admin-dashboard/login" element={<AdminLogin />}></Route>
        <Route
          path="/admin-dashboard"
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="add-category" element={<AddCategory />} />
          <Route path="manage-items" element={<Foods />} />
        </Route>
        <Route path="/projects/delifood/menu" element={<Delifood />}>
          <Route path=":category" element={<Items />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      {!path.includes('/admin-dashboard') &&
        !path.includes('/projects/delifood') && <Footer />}

      <ToastContainer />
    </>
  );
}

export default App;
