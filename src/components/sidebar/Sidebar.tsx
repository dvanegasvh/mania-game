import { Drawer, Theme, useMediaQuery } from '@mui/material';
import { Content } from './components/content';
import { ISidebarProps } from './models/SidebarProps';

export const Sidebar: React.FC<ISidebarProps> = ({ onNavOpen, openMenu }) => {
	const lgUp = useMediaQuery((theme: Theme) => theme.breakpoints.up('lg'));

	return (
		<Drawer
			anchor="left"
			variant={lgUp ? 'permanent' : 'temporary'}
			open={openMenu}
			onClose={onNavOpen}
			PaperProps={{
				sx: {
					backgroundColor: 'neutral.800',
					color: 'common.white',
					width: 280,
				},
			}}
			sx={{ zIndex: lgUp ? 'auto' : theme => theme.zIndex.appBar + 100 }}
		>
			<Content onNavOpen={onNavOpen} />
		</Drawer>
	);
};
