import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import BackIcon from '@mui/icons-material/KeyboardBackspace';
import { Box, Button, Stack, Typography } from '@mui/material';
import ModalMaterial from '@mui/material/Modal';
import { IModalImportantInfoProps, IModalProps } from './models/ModalProps';

export const Modal: React.FC<IModalProps> = ({ children, title, handleCLose, open }) => {
	return (
		<ModalMaterial open={open} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
			<Box
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					boxShadow: 24,
					height: { xs: '100%', lg: 'auto' },
					width: { xs: '100%', lg: 'auto' },
					transform: { lg: 'translate(-20%, -50%)', xs: 'translate(-50%, -50%)' },
					background: 'white',
					outline: 0,
					borderRadius: { lg: 1 },
				}}
			>
				<Box
					component={'header'}
					sx={{
						color: 'neutral.700',
						py: 2,
						borderTopRightRadius: 8,
						borderTopLeftRadius: 8,
						mb: 4,
						boxShadow: '0px 1px 8px rgba(0, 0, 0, 0.1)',
					}}
				>
					<Box
						sx={{
							backgroundColor: 'neutral.800',
							borderRadius: { lg: '100%' },
							borderBottomLeftRadius: { xs: 10 },
							position: 'absolute',
							top: 0,
							right: 0,
							mt: { lg: -2 },
							mr: { lg: -2 },
							height: 35,
							width: 35,
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							cursor: 'pointer',
						}}
						onClick={handleCLose}
					>
						<CloseRoundedIcon sx={{ color: 'neutral.300' }} />
					</Box>
					{title && (
						<Box component={'h2'} sx={{ textAlign: 'center' }}>
							{title}
						</Box>
					)}
				</Box>
				<Box
					sx={{
						px: 4,
						pb: 4,
					}}
				>
					{children}
				</Box>
			</Box>
		</ModalMaterial>
	);
};

export const ModalImportantInfo: React.FC<IModalImportantInfoProps> = ({
	actionBack,
	actionConfirm,
	children,
	handleCLose,
	open,
}) => {
	return (
		<Modal open={open} handleCLose={handleCLose} title="Importante">
			<Box sx={{ minWidth: { xs: '100%', lg: 500 }, textAlign: 'center', maxWidth: { xs: '100%', lg: 500 } }}>
				{children}
				<Stack sx={{ mt: 5 }} direction="row" justifyContent="center" spacing={4}>
					<Button
						variant="contained"
						startIcon={<BackIcon />}
						onClick={actionConfirm}
						sx={{
							backgroundColor: 'neutral.700',
						}}
					>
						Volver
					</Button>
					<Button
						variant="contained"
						onClick={actionBack}
						sx={{
							backgroundColor: 'neutral.700',
						}}
					>
						Confirmar
					</Button>
				</Stack>
			</Box>
		</Modal>
	);
};
