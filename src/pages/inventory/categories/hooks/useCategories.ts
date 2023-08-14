import { useState } from 'react';

export const useCategories = (): {
	openCreationModal: boolean;
	handleCreationModal: () => void;
	handleOpenConfirmDelete: () => void;
	openConfirmDelete: boolean;
} => {
	const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);
	const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);

	const handleCreationModal = (): void => {
		setOpenCreationModal(!openCreationModal);
	};

	const handleOpenConfirmDelete = (): void => {
		setOpenConfirmDelete(!openConfirmDelete);
	};

	return { openCreationModal, handleCreationModal, handleOpenConfirmDelete, openConfirmDelete };
};
