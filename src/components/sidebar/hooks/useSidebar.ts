import { Dispatch, SetStateAction, useState } from 'react';
import { usePathname } from 'next/navigation';
import { map } from 'lodash';
import { ROUTES } from '@/constants/Routes';
import { IRoute } from '@/models/Routes';

export const useSidebar = (): {
	navItems: IRoute[];
	validateActiveRoute: (route: string, subRoute?: IRoute[], isCollapse?: boolean) => boolean;
	currentSelected: string;
	setCurrentSelected: Dispatch<SetStateAction<string>>;
} => {
	const [currentSelected, setCurrentSelected] = useState<string>('');

	const pathname = usePathname();
	const generateNavItems = (): IRoute[] => {
		return map(ROUTES, route => route);
	};

	const validateActiveRoute = (route: string, subRoute?: IRoute[], isCollapse?: boolean): boolean => {
		if (!isCollapse) {
			return pathname === route;
		}
		if (pathname === '/inventory/items') {
			console.log('first');
			console.log(subRoute?.some(subRoute => subRoute.path === pathname));
		}
		// console.log(pathname);
		return subRoute?.some(subRoute => subRoute.path === pathname) || false;
	};

	return {
		navItems: generateNavItems(),
		validateActiveRoute,
		currentSelected,
		setCurrentSelected,
	};
};
