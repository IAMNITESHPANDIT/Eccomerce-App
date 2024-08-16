import { useState } from 'react';

export const useAuthForm = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleInputChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const resetForm = () => {
    setFormData(initialState);
  };

  return { formData, handleInputChange, resetForm };
};