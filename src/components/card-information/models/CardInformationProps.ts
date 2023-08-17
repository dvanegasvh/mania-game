import { type ReactNode } from 'react';
import { type SxProps } from '@mui/material';
import { type IconName } from '@/components/icon/models/IconTypeNames';

export interface ICardInformationProps {
	sx?: SxProps;
	icon: IconName | ReactNode;
	value: string;
	name: string;
	background?: string;
}
