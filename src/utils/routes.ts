import { ROUTES, SUB_ROUTES } from '@/constants/Routes';
import { ROUTE_NAMES, SUB_ROUTES_NAMES } from '@/models/Routes';

/**
 * Util to get route title
 * @param {string} - Name route to search.
 * @returns {string}
 */
export const getTitleRoute = (route: ROUTE_NAMES): string => {
	return ROUTES[route].title;
};

/**
 * Util to get a route path name
 * @param {string} - Name route to search>
 * @returns  {string}
 */
export const getRoutePath = (route: ROUTE_NAMES): string => {
	return ROUTES[route].path;
};

/**
 * Util to get route title
 * @param {string} - Name route to search.
 * @returns {string}
 */
export const getSubRouteTitle = (route: SUB_ROUTES_NAMES): string => {
	return SUB_ROUTES[route].title;
};

/**
 * Util to get a route path name
 * @param {string} - Name route to search>
 * @returns  {string}
 */
export const getSubRoutePath = (route: SUB_ROUTES_NAMES): string => {
	return SUB_ROUTES[route].path;
};
