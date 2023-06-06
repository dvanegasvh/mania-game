import ContactsIcon from '@mui/icons-material/Contacts';
import InventoryIcon from '@mui/icons-material/Inventory';
import OutboundIcon from '@mui/icons-material/Outbound';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { ICONS_SIZE } from '@/constants/IconsSize';
import { IRoutes, ROUTE_NAMES } from '@/models/Routes';

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
				path: '/inventory/items',
				title: 'Items de venta',
			},
			{
				path: '/inventory-value',
				title: 'Valor del inventario',
			},
			{
				path: '/categories',
				title: 'Categorías',
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
				path: '/income/create',
				title: 'Crear venta',
			},
			{
				path: '/income/report',
				title: 'Reporte de ingresos',
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
				path: '/bills/create',
				title: 'Crear gasto',
			},
			{
				path: '/bills/report',
				title: 'Reporte de gastos',
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
