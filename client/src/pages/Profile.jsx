import React from 'react';
import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';

import customFetch from '../utils/customFetch';
import Wrapper from '../styledComponents/DashboardFormPage';
import { FormBtnSubmit, FormInput } from '../components';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');

    if (file && file.size > 500000) {
      toast.error(
        'Image size too large, please select an image that is < 0.5 MB.'
      );
      return null;
    }

    try {
      await customFetch.patch('/users/update-user', formData);
      queryClient.invalidateQueries(['user']);
      toast.success('Profile updated successfully!');
      return redirect('/dashboard');
      return { success: true };
    } catch (error) {
      toast.error(error?.response?.data?.msg || 'An error occurred');
      return { error: true };
    }
  };

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>Profile</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='avatar' className='form-label'>
              Select an image file (max: 0.5 MB)
            </label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              className='form-input'
              accept='image/*'
            />
          </div>

          <FormInput type='text' name='name' defaultValue={name} />
          <FormInput
            type='text'
            name='lastName'
            labelText='Last Name'
            defaultValue={lastName}
          />
          <FormInput type='email' name='email' defaultValue={email} />
          <FormInput type='text' name='location' defaultValue={location} />

          <FormBtnSubmit formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
