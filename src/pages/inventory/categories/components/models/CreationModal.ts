import { IModalProps } from '@/components/modal/models/ModalProps';

export type DataEditModal = {
	id: string;
	name: string;
	description: string;
};

export interface ICreationModalProps extends Omit<IModalProps, 'children'> {
	data?: DataEditModal;
	edit?: boolean;
}
