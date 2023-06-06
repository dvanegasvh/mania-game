import { Stack, Typography } from '@mui/material';
import { ITitleSectionProps } from './models/TitleSection';

export const TitleSection: React.FC<ITitleSectionProps> = ({ children, title }) => {
	return (
		<Stack spacing={3}>
			<Stack direction="row" justifyContent="space-between" spacing={4}>
				<Stack spacing={1}>
					<Typography variant="h4">{title}</Typography>
				</Stack>
				<Stack direction="row" spacing={2}>
					{children}
				</Stack>
			</Stack>
		</Stack>
	);
};
