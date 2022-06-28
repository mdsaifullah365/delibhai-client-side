import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    fetch(`https://delibhai.herokuapp.com/isAdmin?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('adminAccessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        setAdminLoading(false);
      });
  }, [user?.email]);

  return [admin, adminLoading];
};

export default useAdmin;
