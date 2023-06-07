import { useRouter } from 'next/router';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box, ListItemButton } from '@mui/material';
import { IItemProps } from '../models/ItemProps';

export const Item: React.FC<IItemProps> = ({
	active = false,
	path = '',
	disabled = false,
	title = '',
	onClick = (): void => {},
	icon = '',
	isCollapse = false,
	collapse = false,
	sxMain = {},
	sxContainerBox = {},
	isSubItem = false,
}) => {
	const router = useRouter();
	return (
		<ListItemButton
			sx={{
				alignItems: 'center',
				borderRadius: 1,
				display: 'flex',
				justifyContent: 'space-between',
				pl: '16px',
				pr: '16px',
				py: '6px',
				textAlign: 'left',
				width: '100%',
				...(active && {
					backgroundColor: 'rgba(255, 255, 255, 0.04)',
				}),
				'&:hover': {
					backgroundColor: 'rgba(255, 255, 255, 0.04)',
				},
				...sxMain,
			}}
			onClick={(): void => {
				onClick && onClick();
				path !== '#' && router.push(path);
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					...sxContainerBox,
				}}
			>
				{icon && (
					<Box
						component="span"
						sx={{
							alignItems: 'center',
							color: active ? 'common.white' : 'neutral.400',
							display: 'inline-flex',
							justifyContent: 'center',
							mr: 2,
						}}
					>
						{icon}
					</Box>
				)}
				{isSubItem && (
					<Box
						sx={{
							height: 8,
							mr: 2,
							width: 8,
							borderRadius: '50%',
							backgroundColor: active ? 'primary.dark' : 'transparent',
						}}
					/>
				)}
				<Box
					component="span"
					sx={{
						color: 'neutral.400',
						flexGrow: 1,
						fontFamily: theme => theme.typography.fontFamily,
						fontSize: 14,
						fontWeight: 600,
						lineHeight: '24px',
						whiteSpace: 'nowrap',
						...(active && {
							color: 'common.white',
						}),
						...(disabled && {
							color: 'neutral.500',
						}),
					}}
				>
					{title}
				</Box>
			</Box>
			{isCollapse && (
				<>{collapse ? <ExpandLess sx={{ color: 'neutral.400' }} /> : <ExpandMore sx={{ color: 'neutral.400' }} />}</>
			)}
		</ListItemButton>
	);
};
