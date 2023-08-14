export interface IModalProps {
	children: React.ReactNode | React.ReactNodeArray;
	title?: string;
	open: boolean;
	handleCLose: () => void;
}

export interface IModalImportantInfoProps extends IModalProps {
	actionBack: () => void;
	actionConfirm: () => void;
}
