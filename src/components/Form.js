import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* First name */}
      <label htmlFor="firstName">First name</label>
      <input
        id="firstName"
        placeholder="Name"
        aria-invalid={errors.firstName ? 'true' : 'false'}
        {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors.firstName && <span role="alert">First name is required</span>}
      <br />
      {/* Last name */}
      <label htmlFor="lastName">Last name</label>
      <input
        id="lastName"
        placeholder="Last name"
        aria-invalid={errors.lastName ? 'true' : 'false'}
        {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
      />
      {errors.lastName && 'Last name is required'}
      <br />
      {/* Age */}
      <label htmlFor="age">How old are you?</label>
      <input
        type="number"
        placeholder="Age"
        {...register('age', { min: 1, max: 99, required: true })}
      />
      {errors.age && 'Age is required'}
      <br />
      {/* Honorific title */}
      <label htmlFor="honorificTitle">Honorific title</label>
      <select {...register('Honorific title', { required: true })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Ms">Ms</option>
        <option value="Mx">Mx</option>
        <option value="Dr">Dr</option>
      </select>
      <br />
      {/* Phone */}
      <label htmlFor="phone">Phone number</label>
      <input
        type="number"
        placeholder="Phone number"
        {...register('phone', { min: 5, max: 10, required: true })}
      />
      {errors.phone && 'Phone number is required'}
      <br />
      <input type="submit" />
    </form>
  );
};

export default Form;
