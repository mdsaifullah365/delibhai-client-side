import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';
import Loading from '../Shared/Loading';
import useToken from '../../hooks/useToken';
import auth from '../../firebase.init';

const Registration = () => {
  // YUP Validation
  const signupSchema = yup.object({
    fullName: yup.string().required('আপনার পুরো নাম লিখুন'),
    email: yup.string().email('সঠিক ইমেইল লিখুন').required('আপনার ইমেইল লিখুন'),
    password: yup
      .string()
      .required('একটি নতুন পাসওয়ার্ড লিখুন')
      .min(6, 'পাসওয়ার্ড ন্যূনতম ৬ ডিজিট হতে হবে'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'পাসওয়ার্ড মিলে নি')
      .required('কনফার্ম পাসওয়ার্ড লিখুন'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  // React Firebase hooks
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    const { fullName, email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: fullName });
  };

  // Assign token and Navigate
  const navigate = useNavigate();
  const [token] = useToken(user || googleUser);
  if (token) {
    navigate('/');
  }

  // Loading
  if (loading || googleLoading || updating) {
    return <Loading />;
  }

  // Firebase Error
  let signUpError;
  if (error || googleError || updateError) {
    signUpError = (
      <p className="text-center text-error mb-3">
        {error?.message || googleError?.message || updateError?.message}
      </p>
    );
  }

  return (
    <div className="min-h-[calc(100vh-80px)] sm:min-h-[calc(100vh-96px)] flex justify-center items-center my-5">
      <div className="flex flex-col w-full max-w-md shadow-2xl p-8">
        {/* Title */}
        <h2 className="text-center text-4xl font-semibold mb-10">
          রেজিস্ট্রেশন করুন
        </h2>
        {/* Error */}
        {signUpError}
        {/* Signup with Google */}
        <button
          onClick={() => signInWithGoogle()}
          className="btn border-black border-2 hover:border-primary bg-transparent hover:bg-primary hover:text-base-100 font-semibold mb-2"
        >
          গুগল একাউন্ট দিয়ে দিয়ে রেজিস্ট্রেশন করুন
        </button>

        <div className="divider my-5">অথবা</div>
        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">পুরো নাম</span>
            </label>
            <input
              type="text"
              placeholder="আপনার পুরো নাম লিখুন"
              className="input input-bordered w-full"
              {...register('fullName')}
            />
            <p className="mt-2 text-sm text-error">
              {errors.fullName?.message}
            </p>
          </div>

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
              placeholder="একটি নতুন পাসওয়ার্ড লিখুন"
              className="input input-bordered w-full"
              {...register('password')}
            />
            <p className="mt-2 text-sm text-error">
              {errors.password?.message}
            </p>
          </div>

          {/* Confirm password */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text text-base">কনফার্ম পাসওয়ার্ড</span>
            </label>
            <input
              type="password"
              placeholder="পাসওয়ার্ড কনফার্ম করুন"
              className="input input-bordered w-full"
              {...register('confirmPassword')}
            />
            <p className="mt-2 text-sm text-error">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Submit */}
          <input
            type="submit"
            value="রেজিস্ট্রেশন"
            className="btn btn-primary text-base-100 w-full mt-5 mb-2"
          />
        </form>

        {/* Login Link */}
        <p className="text-center text-sm">
          অলরেডি একাউন্ট আছে?{' '}
          <Link to="/login" className="text-primary">
            লগইন করুন
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
