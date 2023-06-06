import { ReactElement } from 'react';
import { SxProps } from '@mui/material';

export interface IItemProps {
	active?: boolean;
	disabled?: boolean;
	path?: string;
	title: string;
	icon?: ReactElement;
	onClick?: () => void;
	isCollapse?: boolean;
	collapse?: boolean;
	sxMain?: SxProps;
	sxContainerBox?: SxProps;
	isSubItem?: boolean;
}
