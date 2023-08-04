import { ReactNode } from 'react';
import { SxProps } from '@mui/material';
import { IconName } from '@/components/icon/models/IconTypeNames';

export interface ICardInformationProps {
	sx?: SxProps;
	icon: IconName | ReactNode;
	value: string;
	name: string;
	background?: string;
}
