import { useEffect, useState } from 'react';
const useAdminToken = (user) => {
  const [token, setToken] = useState('');

  const email = user?.user?.email;
  useEffect(() => {
    if (email) {
      fetch(`https://delibhai.herokuapp.com/user/${email}`)
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          sessionStorage.setItem('adminAccessToken', accessToken);
          setToken(accessToken);
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
