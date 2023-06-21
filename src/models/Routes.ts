/* eslint-disable no-unused-vars */
import { ReactElement } from 'react';

/**
 * This enum is used to define the names of the routes of the application.
 */
export enum ROUTE_NAMES {
	BALANCE,
	INVENTORY,
	INCOME,
	BILLS,
	CONTACTS,
}

/**
 * This enum is used to define the names of the sub routes of the application.
 */
export enum SUB_ROUTES {
	INCOME_CREATE = '/income/create',
	INCOME_REPORT = '/income/report',
	BILLS_CREATE = '/bills/create',
	BILLS_REPORT = '/bills/report',
}

/**
 * This interface is used to define the routes structure.
 *
 * @interface IRoute
 * @property {string} path - The path of the route.
 * @property {string} title - The title of the route.
 * @property {string} icon - Optional icon of the route.
 * @property {boolean} inNav - Optional flag to indicate if the route is in the navigation.
 * @property {boolean} isDropdown - Optional flag to indicate if the route is a dropdown.
 * @property {IRoute[]} subRoutes - Optional array of sub routes.
 * @property {string} childPath - Optional path of the child route.
 * @property {boolean} divider - Optional check if has divider.
 */
export interface IRoute {
	path: string;
	title: string;
	icon?: ReactElement;
	inNav?: boolean;
	isCollapse?: boolean;
	subItems?: IRoute[];
	divider?: boolean;
}

/**
 * This interface is used to define the routes of the application.
 */
export interface IRoutes {
	[key: string]: IRoute;
}
