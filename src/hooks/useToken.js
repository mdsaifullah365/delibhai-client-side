import { useEffect, useState } from 'react';
const useToken = (user) => {
  const [token, setToken] = useState('');

  console.log(user);
  const email = user?.user?.email;
  const displayName = user?.user?.displayName;
  const firstName = user?._tokenResponse?.firstName;
  const lastName = user?._tokenResponse?.lastName;
  const emailVerified = user?.user?.emailVerified;
  const photoURL = user?.user?.photoURL;
  const phoneNumber = user?.user?.phoneNumber;

  useEffect(() => {
    const userInfo = {
      email,
      displayName,
      firstName,
      lastName,
      emailVerified,
      photoURL,
      phoneNumber,
    };

    if (email) {
      fetch(`https://victorious-gold-garment.cyclic.app/user/${email}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem('accessToken', accessToken);
          setToken(accessToken);
        });
    }
  }, [
    email,
    displayName,
    firstName,
    lastName,
    emailVerified,
    photoURL,
    phoneNumber,
  ]);

  return [token];
};
export default useToken;
