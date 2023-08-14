export interface IModalProps {
	children: React.ReactNode | React.ReactNodeArray;
	title?: string;
	open: boolean;
	handleCLose: () => void;
}
