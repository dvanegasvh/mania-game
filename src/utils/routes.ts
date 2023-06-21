import { ROUTES } from '@/constants/Routes';
import { ROUTE_NAMES } from '@/models/Routes';

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
