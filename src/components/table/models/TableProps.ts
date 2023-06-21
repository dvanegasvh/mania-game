import { ReactNode } from 'react';
import { SxProps } from '@mui/material';

export type MainTableProps = {
	title: string;
	sx?: SxProps;
	rowSpan?: number;
	colSpan?: number;
};

export interface ITableProps {
	headers: MainTableProps[];
	children: ReactNode[] | ReactNode;
}
