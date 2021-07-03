import { useEffect } from 'react';

const useDebug = (variable: unknown): void => {
	useEffect(() => {
		console.log(variable);
	}, [variable]);
};

export default useDebug;
