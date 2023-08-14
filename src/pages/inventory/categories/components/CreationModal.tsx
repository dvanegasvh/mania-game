import { Box, Button, TextField } from '@mui/material';
import { Modal } from '@/components/modal';
import { IModalProps } from '@/components/modal/models/ModalProps';

export const CreationModal: React.FC<Omit<IModalProps, 'children'>> = props => {
	return (
		<Modal {...props} title="Crear categoría">
			<Box sx={{ maxWidth: 500 }}>
				<TextField sx={{ width: '100%', mb: 2 }} label="Nombre" required />
				<TextField sx={{ width: '100%' }} label="Descripción" multiline minRows={3} />
				<Button variant="contained" sx={{ width: '100%', mt: 2 }} onClick={props.handleCLose}>
					Crear categoría
				</Button>
			</Box>
		</Modal>
	);
};
