import { useEffect, useState } from 'react';

export const useCollapse = (currentActive?: boolean): { toggleCollapse: () => void; collapse: boolean } => {
	const [collapse, setCollapse] = useState<boolean>(false);

	useEffect(() => {
		setCollapse(currentActive || false);
	}, [currentActive]);

	const toggleCollapse = () => {
		setCollapse(!collapse);
	};

	return {
		toggleCollapse,
		collapse,
	};
};
