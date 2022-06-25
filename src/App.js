import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Delifood from './Pages/Delifood/Delifood';
import ItemDetails from './Pages/Delifood/Items/ItemDetails/ItemDetails';
import Items from './Pages/Delifood/Items/Items';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import PageNotFound from './Pages/Shared/PageNotFound';

function App() {
  const path = useLocation().pathname;
  return (
    <>
      {path !== '/admin-dashboard' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/admin-dashboard' element={<Dashboard />} />
        <Route path='/services/delifood' element={<Delifood />}>
          <Route path=':category' element={<Items />} />
        </Route>
        <Route path='/services/delifood/item/:id' element={<ItemDetails />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
      {path !== '/admin-dashboard' && !path.includes('/services/delifood') && (
        <Footer />
      )}
    </>
  );
}

export default App;
