import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Age = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <label htmlFor="age">How old are you?</label>
      <input
        type="number"
        placeholder="Age"
        {...register('age', { min: 1, max: 99, required: true })}
      />
      {errors.age && 'Age is required'}
      <br />
    </div>
  );
};

export default Age;
