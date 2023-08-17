import ContactsIcon from '@mui/icons-material/Contacts';
import InventoryIcon from '@mui/icons-material/Inventory';
import OutboundIcon from '@mui/icons-material/Outbound';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { ICONS_SIZE } from '@/constants/IconsSize';
import { type IRoutes, ROUTE_NAMES, SUB_ROUTES_NAMES } from '@/models/Routes';

export const SUB_ROUTES: IRoutes = {
	[SUB_ROUTES_NAMES.BILLS_CREATE]: {
		path: '/bill/create',
		title: 'Crear venta',
	},

	[SUB_ROUTES_NAMES.BILLS_REPORT]: {
		path: '/bill/report',
		title: 'Reporte de venta',
	},
	[SUB_ROUTES_NAMES.INCOME_CREATE]: {
		path: '/income/create',
		title: 'Crear egreso',
	},

	[SUB_ROUTES_NAMES.INCOME_REPORT]: {
		path: '/income/report',
		title: 'Reporte de egreso',
	},
	[SUB_ROUTES_NAMES.CATEGORIES]: {
		path: '/inventory/categories',
		title: 'Categorías',
	},
	[SUB_ROUTES_NAMES.PRODUCTS]: {
		path: '/inventory/products',
		title: 'Productos',
	},
};

/**
 * This const is used to define the routes of the application.
 */
export const ROUTES: IRoutes = {
	[ROUTE_NAMES.BALANCE]: {
		path: '/',
		title: 'Movimientos',
		inNav: true,
		icon: <ReceiptIcon fontSize="small" sx={ICONS_SIZE} />,
	},

	[ROUTE_NAMES.INVENTORY]: {
		path: '#',
		title: 'Inventario',
		inNav: true,
		icon: <InventoryIcon fontSize="small" sx={ICONS_SIZE} />,
		isCollapse: true,
		subItems: [
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.PRODUCTS].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.PRODUCTS].title,
			},
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.CATEGORIES].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.CATEGORIES].title,
			},
		],
	},
	[ROUTE_NAMES.INCOME]: {
		path: '#',
		title: 'Ingresos',
		inNav: true,
		icon: <OutboundIcon fontSize="small" sx={ICONS_SIZE} />,
		isCollapse: true,
		subItems: [
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.BILLS_CREATE].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.BILLS_CREATE].title,
			},
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.BILLS_REPORT].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.BILLS_REPORT].title,
			},
		],
	},
	[ROUTE_NAMES.BILLS]: {
		path: '#',
		title: 'Gastos',
		inNav: true,
		icon: <OutboundIcon fontSize="small" sx={ICONS_SIZE} />,
		isCollapse: true,
		subItems: [
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.INCOME_CREATE].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.INCOME_CREATE].title,
			},
			{
				path: SUB_ROUTES[SUB_ROUTES_NAMES.INCOME_REPORT].path,
				title: SUB_ROUTES[SUB_ROUTES_NAMES.INCOME_REPORT].title,
			},
		],
	},
	[ROUTE_NAMES.CONTACTS]: {
		path: '#',
		title: 'Contactos',
		inNav: true,
		icon: <ContactsIcon fontSize="small" sx={ICONS_SIZE} />,
		isCollapse: true,
		subItems: [
			{
				path: '/contacts/clients',
				title: 'Clientes',
			},
			{
				path: '/contacts/create',
				title: 'Crear cliente',
			},
		],
	},
};
