import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Box, IconButton, Stack, useMediaQuery } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { INavMenuProps } from '../models/NavMenuProps';

export const NavMenu: React.FC<INavMenuProps> = ({ onNavOpen }) => {
	const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
	const SIDE_NAV_WIDTH = 280;
	const TOP_NAV_HEIGHT = 64;
	return (
		<>
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
		</>
	);
};