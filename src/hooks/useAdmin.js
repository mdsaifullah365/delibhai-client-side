import { useEffect, useState } from 'react';

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://victorious-gold-garment.cyclic.app/isAdmin?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem(
              'adminAccessToken'
            )}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminLoading(false);
        });
    }
  }, [user?.email]);

  return [admin, adminLoading];
};

export default useAdmin;
