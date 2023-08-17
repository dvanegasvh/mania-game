import { Box, Button, TextField } from '@mui/material';
import { Modal } from '@/components/modal';
import { type ICreationModalProps } from './models/CreationModal';

export const CreationModal: React.FC<ICreationModalProps> = ({ open, handleCLose, data, edit, title }) => {
	return (
		<Modal open={open} handleCLose={handleCLose} title={title}>
			<Box sx={{ maxWidth: 500 }}>
				<TextField value={edit ? data?.name : ''} sx={{ width: '100%', mb: 2 }} label="Nombre" required />
				<TextField
					value={edit ? data?.description : ''}
					sx={{ width: '100%' }}
					label="Descripción"
					multiline
					minRows={3}
				/>
				<Button variant="contained" sx={{ width: '100%', mt: 2 }} onClick={handleCLose}>
					Crear categoría
				</Button>
			</Box>
		</Modal>
	);
};
