import type { IModalProps } from '@/components/modal/models/ModalProps';

export interface DataEditModal {
	id: string;
	name: string;
	description: string;
}

export interface ICreationModalProps extends Omit<IModalProps, 'children'> {
	data?: DataEditModal;
	edit?: boolean;
}
