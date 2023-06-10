import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdminToken from '../../hooks/useAdminToken';

const AdminLogin = () => {
  // YUP Validation
  const schema = yup.object({
    email: yup.string().email('Enter a valid email').required('Enter email'),
    password: yup.string().required('Enter password'),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // React Firebase hooks
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Event Handler
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
  };

  // Asign token and Navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/admin-dashboard';
  const [token] = useAdminToken(user);
  if (token) {
    navigate(from, { replace: true });
  }

  // Loading
  if (loading) {
    return (
      <div className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <div className='w-24 h-24 border-b-2 border-accent rounded-full animate-spin'></div>
      </div>
    );
  }

  // Firebase Error
  let signInError;
  if (error) {
    signInError = (
      <p className='text-center text-error mb-3'>{error?.message}</p>
    );
  }

  return (
    <div className='min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex justify-center items-center my-5'>
      <div className='flex flex-col w-full max-w-md shadow-2xl p-8'>
        {/* Title */}
        <h2 className='text-center text-4xl font-semibold mb-10'>
          Admin Login
        </h2>

        {/* Error */}
        {signInError}

        {/* Admin Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className='form-control w-full mb-3'>
            <input
              type='text'
              placeholder='Admin Email'
              className='input input-bordered w-full'
              {...register('email')}
            />
            <p className='mt-2 text-sm text-error'>{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className='form-control w-full'>
            <input
              type='password'
              placeholder='Admin Password'
              className='input input-bordered w-full'
              {...register('password')}
            />
            <p className='mt-2 text-sm text-error'>
              {errors.password?.message}
            </p>
          </div>

          {/* Submit */}
          <input
            type='submit'
            value='Login'
            className='btn btn-primary text-base-200 bg-gray-900 hover:bg-gray-700 w-full mt-5 mb-2 border-none'
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
