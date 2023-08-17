import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { type ILayoutProps } from './models/LayoutProps';
import { NavMenu } from '../sidebar/components/nav-menu';
import { LayoutContainer, LayoutRoot } from './styles';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
	const [openMenu, setOpenMenu] = useState<boolean>(false);

	return (
		<>
			<NavMenu
				onNavOpen={(): void => {
					setOpenMenu(!openMenu);
				}}
			/>
			<Sidebar
				openMenu={openMenu}
				onNavOpen={(): void => {
					setOpenMenu(!openMenu);
				}}
			/>
			<LayoutRoot>
				<LayoutContainer>{children}</LayoutContainer>
			</LayoutRoot>
		</>
	);
};
