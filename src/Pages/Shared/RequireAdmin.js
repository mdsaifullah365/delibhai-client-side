import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import Loading from './Loading';

const RequireAdmin = ({ children }) => {
  let location = useLocation();
  const [user, loading] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);

  if (loading || adminLoading) {
    return <Loading />;
  }
  console.log(admin);
  if (!admin) {
    return (
      <Navigate
        to='/admin-dashboard/login'
        state={{ from: location }}
        replace
      />
    );
  }
  if (admin) {
    return children;
  }
};

export default RequireAdmin;
