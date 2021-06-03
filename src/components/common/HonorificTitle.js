import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const HonorificTitle = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div>
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
    </div>
  );
};

export default HonorificTitle;
