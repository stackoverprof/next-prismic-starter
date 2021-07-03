import { useState } from 'react';

const useForm = (format: unknown): any[] => {
	const [form, setForm] = useState(format);

	const mutateForm = ({ target: { name, value } }) => {
		setForm((prev) => ({ ...prev, [name]: value }));
	};

	const resetForm = () => {
		setForm(format);
	};

	return [form, mutateForm, resetForm];
};

export default useForm;
