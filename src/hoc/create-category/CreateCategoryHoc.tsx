import { useState } from 'react';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import EditIcon from '@mui/icons-material/Edit';
import { CreationModal } from '@/components/creation-modal/CreationModal';
import { type ICreateCategoryHocProps } from './models/CreateCategoryHoc';

export const CreateCategoryHoc: React.FC<ICreateCategoryHocProps> = ({ Button, edit }) => {
	const [modalConfirm, setModalConfirm] = useState<boolean>(false);

	return (
		<div>
			<CreationModal
				open={modalConfirm}
				handleCLose={(): void => {
					setModalConfirm(!modalConfirm);
				}}
				title={edit ? 'Editar categoría' : 'Crear categoría'}
			/>
			{!edit && Button ? (
				<Button
					onClick={(): void => {
						setModalConfirm(!modalConfirm);
					}}
					startIcon={<ControlPointIcon />}
				>
					Crear categoría
				</Button>
			) : (
				<EditIcon
					onClick={(): void => {
						setModalConfirm(!modalConfirm);
					}}
					sx={{
						cursor: 'pointer',
						color: 'neutral.500',
						'&:hover': {
							color: 'primary.main',
						},
					}}
				/>
			)}
		</div>
	);
};
