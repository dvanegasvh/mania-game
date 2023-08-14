import { useState } from 'react';

export const useCategories = (): { openCreationModal: boolean; handleCreationModal: () => void } => {
	const [openCreationModal, setOpenCreationModal] = useState<boolean>(false);

	const handleCreationModal = (): void => {
		setOpenCreationModal(!openCreationModal);
	};

	return { openCreationModal, handleCreationModal };
};
