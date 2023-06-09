import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	return {
		values,
		errors,
		isSubmitting,
		handleChange,
		handleSubmit,
	};
};

export default useFormValidation;
