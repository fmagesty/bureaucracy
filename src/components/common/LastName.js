import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const LastName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        placeholder="Last name"
        aria-invalid={errors.lastName ? 'true' : 'false'}
        {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors.lastName && 'Last name is required'}
      <br />
    </div>
  );
};

export default LastName;
