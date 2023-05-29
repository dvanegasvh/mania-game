import { ILayoutProps } from './models/LayoutProps';
import { Sidebar } from '@/components/sidebar';
import { LayoutContainer, LayoutRoot } from './styles';

export const Layout: React.FC<ILayoutProps> = ({ children }) => {
	return (
		<LayoutRoot>
			<Sidebar />
			<LayoutContainer>{children}</LayoutContainer>
		</LayoutRoot>
	);
};
