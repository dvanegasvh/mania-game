import { MainTableProps } from '@/components/table/models/TableProps';

export const TABLE_HEADER: MainTableProps[] = [
	{ title: 'Nombre', sx: { minWidth: { lg: 400, xs: 200 } } },
	{ title: 'Descripción', sx: { minWidth: { lg: 700, xs: 300 } } },
	{ title: 'Acciones' },
];
