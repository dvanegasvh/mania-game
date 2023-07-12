import React from 'react';
import { Box, Card, Typography } from '@mui/material';

export const CardDescription: React.FC = () => {
	return (
		<Card
			sx={{
				width: { xs: '80%', lg: 176 },
				height: { xs: 250, lg: 220 },
				py: 1.5,
				px: 2,
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				alignItems: 'center',
				border: '1px solid',
				borderColor: 'neutral.300',
				boxShadow: 'none !important',
				cursor: 'pointer',
				'&:hover': {
					borderWidth: 1,
					borderColor: 'primary.main',
					transition: '0.3s',
				},
			}}
		>
			<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
				<Box
					sx={{
						width: { lg: 90, xs: 130 },
						minHeight: { lg: 80, xs: 130 },
						backgroundColor: 'neutral.200',
						borderRadius: 1,
					}}
				/>
				<Typography
					sx={{ mt: 1, mb: 1, ml: -1, lineHeight: '1rem', fontSize: 14 }}
					variant="overline"
					color="neutral.500"
				>
					$ 60.000
				</Typography>
				<Typography className="card-description-text" fontWeight={500}>
					PlayStation 5
				</Typography>
			</Box>
			<Typography sx={{ fontSize: 14 }} color="text.disabled">
				8 disponibles
			</Typography>
		</Card>
	);
};
