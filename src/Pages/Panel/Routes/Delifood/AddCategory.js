import React, { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddCategory = () => {
  // Loading State
  const [loading, setLoading] = useState(false);

  // YUP Validation
  const schema = yup.object({
    label: yup.string().required('Category in Bengali is required'),
    value: yup.string().required('Category in English is required'),
    colorCode: yup
      .string()
      .min(6, 'Color Code Must be 6 Characters')
      .max(6, 'Color Code Must be 6 Characters')
      .required('Color code is required'),
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  // Event Handler (On Submit)
  const onSubmit = async (data) => {
    setLoading(true);
    const { label, value, colorCode } = data;
    const category = {
      label,
      value: value.replace(/\s+/g, '-').toLowerCase(),
      color: colorCode.replace(/\s+/g, '').toLowerCase(),
    };
    axios
      .post(`https://delibhai.onrender.com/delifood/category`, category)
      .then((res) => {
        toast.success('Category Added Successfully');
        reset();
        setLoading(false);
      });
  };
  return (
    <div className='p-5 my-5'>
      <div className='flex justify-center items-center py-4'>
        <div className='flex flex-col w-full max-w-xl shadow-lg p-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Label */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>
                  ক্যাটাগরি নাম (বাংলা)
                </span>
              </label>
              <input
                type='text'
                placeholder='ক্যাটাগরি নাম (বাংলা)'
                className='input input-bordered w-full'
                {...register('label')}
              />
              <p className='mt-2 text-sm text-error'>{errors.label?.message}</p>
            </div>

            {/* Value */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>
                  Category Name (English)
                </span>
              </label>
              <input
                type='text'
                placeholder='Category Name (English)'
                className='input input-bordered w-full'
                {...register('value')}
              />
              <p className='mt-2 text-sm text-error'>{errors.value?.message}</p>
            </div>

            {/* Color Code */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Color Code</span>
              </label>
              <input
                type='text'
                placeholder='Six Digit Color Code'
                className='input input-bordered w-full'
                {...register('colorCode')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.colorCode?.message}
              </p>
            </div>

            <input
              type='submit'
              value='Add Category'
              className='btn btn-primary bg-gray-900 hover:bg-gray-700 text-white w-full mt-5 mb-2'
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
