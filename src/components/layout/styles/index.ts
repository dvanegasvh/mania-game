import { styled } from '@mui/material';

const SIDE_NAV_WIDTH = 280;

export const LayoutRoot = styled('div')(({ theme }) => ({
	display: 'flex',
	flex: '1 1 auto',
	maxWidth: '100%',
	[theme.breakpoints.up('lg')]: {
		paddingLeft: SIDE_NAV_WIDTH,
	},
}));

export const LayoutContainer = styled('div')({
	display: 'flex',
	flex: '1 1 auto',
	flexDirection: 'column',
	width: '100%',
});
