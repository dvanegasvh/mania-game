import { type IMainTableProps } from '@/components/table/models/TableProps';

export const TABLE_HEADER: IMainTableProps[] = [
	{ title: 'Concepto', sx: { minWidth: 500 } },
	{ title: 'Valor' },
	{ title: 'Medio de pago', sx: { minWidth: { xs: 140 } } },
	{ title: 'Fecha' },
	{ title: 'Estado' },
];
