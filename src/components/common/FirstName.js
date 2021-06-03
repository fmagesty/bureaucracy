import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const FirstName = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        placeholder="Name"
        aria-invalid={errors.firstName ? 'true' : 'false'}
        {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors.firstName && <span role="alert">First name is required</span>}
      <br />
    </div>
  );
};

export default FirstName;
