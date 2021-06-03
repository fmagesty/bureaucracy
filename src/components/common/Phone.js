import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Phone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label htmlFor="phone">Phone number</label>
      <input
        type="text"
        placeholder="Phone number"
        {...register('phone', {
          minLength: 5,
          maxLength: 10,
          required: true,
          pattern: /^[1-9]+$/i,
        })}
      />
      {errors.phone && 'Phone number is required'}
      <br />
    </div>
  );
};

export default Phone;
