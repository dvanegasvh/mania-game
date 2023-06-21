import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { Icon } from '@/components/icon';
import { ICardInformationProps } from '../models/CardInformationProps';

export const CardInformation: React.FC<ICardInformationProps> = ({ icon, sx, name, value }) => {
	return (
		<Card sx={{ cursor: 'pointer' }}>
			<CardContent>
				<Stack alignItems="center" direction="row" spacing={5}>
					<Avatar
						sx={{
							background: '#D7F4E8',
							height: 60,
							width: 60,
							...sx,
						}}
					>
						<Icon name={icon} height={35} width={35} />
					</Avatar>
					<Stack spacing={1}>
						<Typography color="text.secondary" variant="overline">
							{name}
						</Typography>
						<Typography variant="h4">{value}</Typography>
					</Stack>
				</Stack>
			</CardContent>
		</Card>
	);
};
