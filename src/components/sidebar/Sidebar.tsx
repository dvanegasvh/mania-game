import NextLink from 'next/link';
import { Box, Button, Divider, Drawer, Stack, Theme, ThemeOptions, Typography, useMediaQuery } from '@mui/material';

const content = (
	<Box
		sx={{
			display: 'flex',
			flexDirection: 'column',
			height: '100%',
		}}
	>
		<Box sx={{ p: 3 }}>
			<Box
				component={NextLink}
				href="/"
				sx={{
					display: 'inline-flex',
					height: 32,
					width: 32,
				}}
			>
				{/* <Logo /> */}
			</Box>
			<Box
				sx={{
					alignItems: 'center',
					backgroundColor: 'rgba(255, 255, 255, 0.04)',
					borderRadius: 1,
					cursor: 'pointer',
					display: 'flex',
					justifyContent: 'space-between',
					mt: 2,
					p: '12px',
				}}
			>
				<div>
					<Typography color="inherit" variant="subtitle1">
						Devias
					</Typography>
					<Typography color="neutral.400" variant="body2">
						Production
					</Typography>
				</div>
				{/* <SvgIcon fontSize="small" sx={{ color: 'neutral.500' }}>
					<ChevronUpDownIcon />
				</SvgIcon> */}
			</Box>
		</Box>
		<Divider sx={{ borderColor: 'neutral.700' }} />
		<Box
			component="nav"
			sx={{
				flexGrow: 1,
				px: 2,
				py: 3,
			}}
		>
			<Stack
				component="ul"
				spacing={0.5}
				sx={{
					listStyle: 'none',
					p: 0,
					m: 0,
				}}
			>
				1
			</Stack>
		</Box>
		<Divider sx={{ borderColor: 'neutral.700' }} />
		<Box
			sx={{
				px: 2,
				py: 3,
			}}
		>
			<Typography color="neutral.100" variant="subtitle2">
				Need more features?
			</Typography>
			<Typography color="neutral.500" variant="body2">
				Check out our Pro solution template.
			</Typography>
			<Box
				sx={{
					display: 'flex',
					mt: 2,
					mx: 'auto',
					width: '160px',
					'& img': {
						width: '100%',
					},
				}}
			>
				{/* <img alt="Go to pro" src="/assets/devias-kit-pro.png" /> */}
			</Box>
			<Button
				component="a"
				// endIcon={
				// 	<SvgIcon fontSize="small">
				// 		<ArrowTopRightOnSquareIcon />
				// 	</SvgIcon>
				// }
				fullWidth
				href="https://material-kit-pro-react.devias.io/"
				sx={{ mt: 2 }}
				target="_blank"
				variant="contained"
			>
				Pro Live Preview
			</Button>
		</Box>
	</Box>
);
export const Sidebar: React.FC = () => {
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

	return (
		<Drawer
			anchor="left"
			variant={lgUp ? 'permanent' : 'temporary'}
			PaperProps={{
				sx: {
					backgroundColor: 'neutral.800',
					color: 'common.white',
					width: 280,
				},
			}}
			sx={{ zIndex: lgUp ? 'auto' : theme => theme.zIndex.appBar + 100 }}
		>
			{content}
		</Drawer>
	);
};
