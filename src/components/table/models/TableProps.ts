import { type ReactNode } from 'react';
import { type SxProps } from '@mui/material';

export interface IMainTableProps {
	title: string;
	sx?: SxProps;
	rowSpan?: number;
	colSpan?: number;
}

export interface ITableProps {
	headers: IMainTableProps[];
	children: ReactNode[] | ReactNode;
}
