import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import FirstName from '../common/FirstName';
import LastName from '../common/LastName';
import Age from '../common/Age';
import HonorificTitle from '../common/HonorificTitle';
import Phone from '../common/Phone';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FirstName />
      <LastName />
      <Age />
      <Phone />
      <HonorificTitle />
      <input type="submit" />
    </form>
  );
};

export default Form;
