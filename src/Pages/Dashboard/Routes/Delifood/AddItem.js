import React, { useState, useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();

const AddItem = () => {
  // Loading State
  const [loading, setLoading] = useState(false);

  // Load Categories
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    const url = `https://delibhai.onrender.com/delifood/category`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMenu(data));
  }, []);

  // Set Categories from Form Select Input
  const [categories, setCategories] = useState('');
  const handleSelectCategories = (categories) => {
    let value = '';
    categories.forEach((category) => {
      value += category.value + ', ';
    });
    setCategories(value);
  };

  // YUP Validation
  const schema = yup.object({
    name: yup.string().required('Item Name is required'),
    description: yup.string().required('Item Description is required'),
    price: yup.string().required('Price is required'),
    video: yup.string().required('Video Link is required'),
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
    const { name, description, price, video } = data;
    const formData1 = new FormData();
    formData1.append('image', data.img1[0]);
    const formData2 = new FormData();
    formData2.append('image', data.img2[0]);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_API_KEY}`,
      {
        method: 'POST',
        body: formData1,
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 200) {
          const imgURL1 = result.data.url;
          fetch(
            `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGE_BB_API_KEY}`,
            {
              method: 'POST',
              body: formData2,
            }
          )
            .then((res) => res.json())
            .then((result) => {
              if (result.status === 200) {
                const imgURL2 = result.data.url;
                const Item = {
                  name,
                  description,
                  price,
                  img1: imgURL1,
                  img2: imgURL2,
                  video,
                  available: true,
                  categories,
                };
                axios
                  .post(`https://delibhai.onrender.com/projects/delifood`, Item)
                  .then((data) => {
                    toast.success('Item Added Successfully');
                    reset();
                    setLoading(false);
                  });
              }
            });
        }
      });
  };
  return (
    <div className='p-5 my-5'>
      <div className='flex justify-center items-center py-4'>
        <div className='flex flex-col w-full max-w-xl shadow-lg p-8'>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Item Name</span>
              </label>
              <input
                type='text'
                placeholder='Item Name'
                className='input input-bordered w-full'
                {...register('name')}
              />
              <p className='mt-2 text-sm text-error'>{errors.name?.message}</p>
            </div>

            {/* Price */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Price</span>
              </label>
              <input
                type='text'
                placeholder='Price'
                className='input input-bordered w-full'
                {...register('price')}
              />
              <p className='mt-2 text-sm text-error'>{errors.price?.message}</p>
            </div>

            {/* Description */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Item Description</span>
              </label>
              <textarea
                type='text'
                placeholder='Item Description'
                className='textarea textarea-bordered w-full'
                {...register('description')}
              />
              <p className='mt-2 text-sm text-error'>
                {errors.description?.message}
              </p>
            </div>

            {/* Categories */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Categories</span>
              </label>

              <Select
                options={menu}
                isMulti
                components={animatedComponents}
                closeMenuOnSelect={false}
                placeholder='Categories'
                onChange={handleSelectCategories}
              />
            </div>

            {/* Video Link */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Video Link</span>
              </label>
              <input
                type='text'
                placeholder='Video Link'
                className='input input-bordered w-full'
                {...register('video')}
              />
              <p className='mt-2 text-sm text-error'>{errors.video?.message}</p>
            </div>

            {/* First Image */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>First Image</span>
              </label>
              <input
                type='file'
                placeholder='First Image'
                className='input input-bordered w-full'
                {...register('img1')}
              />
              <p className='mt-2 text-sm text-error'>{errors.img1?.message}</p>
            </div>

            {/* Second Image */}
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text text-base'>Second Image</span>
              </label>
              <input
                type='file'
                placeholder='Second Image'
                className='input input-bordered w-full'
                {...register('img2')}
              />
              <p className='mt-2 text-sm text-error'>{errors.img2?.message}</p>
            </div>

            <input
              type='submit'
              value='Add Item'
              className='btn btn-primary bg-gray-900 hover:bg-gray-700 text-white w-full mt-5 mb-2'
              disabled={loading}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
