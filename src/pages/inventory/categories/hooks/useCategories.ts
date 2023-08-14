import { useState } from 'react';

export const useCategories = (): {
	handleOpenConfirmDelete: () => void;
	openConfirmDelete: boolean;
} => {
	const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);

	const handleOpenConfirmDelete = (): void => {
		setOpenConfirmDelete(!openConfirmDelete);
	};

	return { handleOpenConfirmDelete, openConfirmDelete };
};
