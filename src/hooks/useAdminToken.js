import { useEffect, useState } from 'react';
const useAdminToken = (user) => {
  const [token, setToken] = useState('');

  const email = user?.user?.email;
  console.log(email);
  useEffect(() => {
    if (email) {
      fetch(`https://delibhai.herokuapp.com/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem('adminAccessToken', accessToken);
          setToken(accessToken);
          console.log(accessToken);
        })
        .catch((err) => {
          console.log(err);
          console.log(err.message);
        });
    }
  }, [email]);

  return [token];
};
export default useAdminToken;
