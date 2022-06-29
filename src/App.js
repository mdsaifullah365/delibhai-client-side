import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import AddItem from './Pages/Dashboard/AddItem';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome';
import Delifood from './Pages/Delifood/Delifood';
import ItemDetails from './Pages/Delifood/Items/ItemDetails/ItemDetails';
import Items from './Pages/Delifood/Items/Items';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Foods from './Pages/Dashboard/Foods';
import AdminLogin from './Pages/Dashboard/AdminLogin';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddCategory from './Pages/Dashboard/AddCategory';

function App() {
  const path = useLocation().pathname;
  return (
    <>
      {!path.includes('/admin-dashboard') && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route
          path='/admin-dashboard'
          element={
            <RequireAdmin>
              <Dashboard />
            </RequireAdmin>
          }>
          <Route index element={<DashboardHome />} />
          <Route path='add-item' element={<AddItem />} />
          <Route path='add-category' element={<AddCategory />} />
          <Route path='manage-items' element={<Foods />} />
        </Route>
        <Route path='/admin-dashboard/login' element={<AdminLogin />}></Route>
        <Route path='/projects/delifood/menu' element={<Delifood />}>
          <Route path=':category' element={<Items />} />
        </Route>
        <Route path='/projects/delifood/item/:id' element={<ItemDetails />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      {!path.includes('/admin-dashboard') &&
        !path.includes('/projects/delifood') && <Footer />}

      <ToastContainer />
    </>
  );
}

export default App;
