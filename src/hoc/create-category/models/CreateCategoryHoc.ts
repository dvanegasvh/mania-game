import { type ButtonProps } from '@mui/material';

export interface ICreateCategoryHocProps {
	Button?: (props: ButtonProps) => JSX.Element;
	edit?: boolean;
}
