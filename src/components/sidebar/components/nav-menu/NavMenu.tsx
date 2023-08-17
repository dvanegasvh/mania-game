/* eslint-disable no-tabs */
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Stack, type Theme, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { type INavMenuProps } from '../models/NavMenuProps';

export const NavMenu: React.FC<INavMenuProps> = ({ onNavOpen }: INavMenuProps) => {
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));
	const SIDE_NAV_WIDTH = 280;
	const TOP_NAV_HEIGHT = 64;

	return (
		<Box
			component="header"
			sx={{
				backdropFilter: 'blur(6px)',
				backgroundColor: theme => alpha(theme.palette.background.default, 0.8),
				position: 'sticky',
				left: {
					lg: `${SIDE_NAV_WIDTH}px`,
				},
				top: 0,
				width: {
					lg: `calc(100% - ${SIDE_NAV_WIDTH}px)`,
				},
				zIndex: theme => theme.zIndex.appBar,
				boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);',
			}}
		>
			<Stack
				alignItems="center"
				direction="row"
				justifyContent={{ lg: 'flex-end', xs: 'space-between' }}
				spacing={2}
				sx={{
					minHeight: TOP_NAV_HEIGHT,
					px: 2,
				}}
			>
				<Stack alignItems="center" direction="row" spacing={2} sx={{ display: { lg: 'none' } }}>
					{!lgUp && (
						<IconButton onClick={onNavOpen}>
							<MenuIcon />
						</IconButton>
					)}
				</Stack>
				<Stack alignItems="center" direction="row" spacing={2}>
					<Avatar
						sx={{
							cursor: 'pointer',
							height: 40,
							width: 40,
						}}
					/>
				</Stack>
			</Stack>
		</Box>
	);
};
