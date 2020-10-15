import React from 'react';
import { toast } from '../utils/toast';

function useFormValidation(initialState, validate, action) {
	const [values, setValues] = React.useState(initialState);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setIsSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				action();
				setValues(initialState);
				setIsSubmitting(false);
			} else {
				toast(Object.values(errors).join(' '));
				setIsSubmitting(false);
			}
		}
	}, [errors]);

	function handleChange(event) {
		setValues((prevValues) => ({
			...prevValues,
			[event.target.name]: event.target.value,
		}));
	}

	function handleSubmit() {
		const validationErrors = validate(values);
		setErrors(validationErrors);
		setIsSubmitting(true);
	}

	return { handleSubmit, handleChange, values, setValues, isSubmitting };
}

export default useFormValidation;
