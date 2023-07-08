import { Stack, Typography } from '@mui/material';
import { ITitleSectionProps } from './models/TitleSection';

export const TitleSection: React.FC<ITitleSectionProps> = ({ children, title }) => {
	return (
		<Stack spacing={3}>
			<Stack direction={{ xs: 'column', lg: 'row' }} justifyContent="space-between" spacing={4}>
				<Stack spacing={1}>
					<Typography variant="h4">{title}</Typography>
				</Stack>
				<Stack direction={{ lg: 'row', xs: 'column' }} spacing={2} justifyContent={{ xs: 'center', lg: 'initial' }}>
					{children}
				</Stack>
			</Stack>
		</Stack>
	);
};
