import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	// handles any change made on inputs such as words typed
	const handleChange = (event) => {
		const { name, value } = event.target;
		setValues((prevValues) => ({
			...prevValues,
			[name]: value,
		}));
	};

	// handles form submission
	const handleSubmit = (event) => {
		event.preventDefault(); //prevent default refresh on submit
		setErrors(validate(values));
		setIsSubmitting(true);
	};
 
	return {
		values, //the value itself
		errors, // error message
		isSubmitting, //stops submiting is there is an empty input
		handleChange,
		handleSubmit,
	};
};

export default useFormValidation;
