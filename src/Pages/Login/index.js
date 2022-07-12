import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
import auth from '../../firebase.init';

const Login = () => {
  // YUP Validation
  const loginSchema = yup.object({
    email: yup.string().email('সঠিক ইমেইল লিখুন').required('আপনার ইমেইল লিখুন'),
    password: yup.string().required('আপনার পাসওয়ার্ড লিখুন'),
  });

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });

  // React Firebase hooks
  const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  // Event Handler
  const onSubmit = async (data) => {
    const { email, password } = data;
    await signInWithEmailAndPassword(email, password);
  };

  // Asign token and Navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const [token] = useToken(emailUser || googleUser);
  if (token) {
    navigate(from, { replace: true });
  }

  // Loading
  if (emailLoading || googleLoading) {
    return <Loading />;
  }

  // Firebase Error
  let signInError;
  if (emailError || googleError) {
    signInError = (
      <p className="text-center text-error mb-3">
        {emailError?.message || googleError?.message}
      </p>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex justify-center items-center my-5">
      <div className="flex flex-col w-full max-w-md shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-center text-4xl font-semibold mb-10">লগইন করুন</h2>
        {/* Error */}
        {signInError}

        {/* Signin with Google */}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border-black border-2 hover:border-primary bg-transparent hover:bg-primary hover:text-base-100 font-semibold mb-2"
        >
          গুগল একাউন্ট দিয়ে দিয়ে লগইন করুন
        </button>

        <div className="divider my-5">অথবা</div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">ইমেইল</span>
            </label>
            <input
              type="text"
              placeholder="আপনার ইমেইল লিখুন"
              className="input input-bordered w-full"
              {...register('email')}
            />
            <p className="mt-2 text-sm text-error">{errors.email?.message}</p>
          </div>

          {/* Password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">পাসওয়ার্ড</span>
            </label>
            <input
              type="password"
              placeholder="আপনার পাসওয়ার্ড লিখুন"
              className="input input-bordered w-full"
              {...register('password')}
            />
            <p className="mt-2 text-sm text-error">
              {errors.password?.message}
            </p>
            <label className="label">
              <span className="label-text-alt text-primary">
                পাসওয়ার্ড ভুলে গেছেন?
              </span>
            </label>
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="লগইন"
            className="btn btn-primary text-base-100 w-full mt-5 mb-2"
          />
        </form>

        {/* Registration Link */}
        <p className="text-center text-sm">
          ডেলিভাই-এ নতুন?{' '}
          <Link to="/registration" className="text-primary">
            রেজিস্ট্রেশন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
