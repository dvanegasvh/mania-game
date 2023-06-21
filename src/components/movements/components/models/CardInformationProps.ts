import { SxProps } from '@mui/material';
import { IconName } from '@/components/icon/models/IconTypeNames';

export interface ICardInformationProps {
	sx?: SxProps;
	icon: IconName;
	value: string;
	name: string;
}
