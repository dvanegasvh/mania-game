import { useState } from 'react';

export const useCollapse = (): { toggleCollapse: () => void; collapse: boolean } => {
	const [collapse, setCollapse] = useState<boolean>(false);

	const toggleCollapse = () => {
		setCollapse(!collapse);
	};

	return {
		toggleCollapse,
		collapse,
	};
};
