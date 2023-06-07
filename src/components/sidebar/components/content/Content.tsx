import React from 'react';
import NextLink from 'next/link';
import { Box, Collapse, Divider, List, Typography } from '@mui/material';
import { Icon } from '@/components/icon';
import { Item } from '@/components/sidebar/components/item/Item';
import { IContentProps } from '../models/ContentProps';
import { useCollapse } from '../../hooks/useCollapse';
import { useSidebar } from '../../hooks/useSidebar';

export const Content: React.FC<IContentProps> = ({ onNavOpen }) => {
	const { navItems, validateActiveRoute, setCurrentSelected } = useSidebar();

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<Box sx={{ p: 3 }}>
				<Box
					component={NextLink}
					href="/"
					sx={{
						display: 'flex',
						width: '100%',
					}}
				>
					<Icon name="logo" height={40} width={40} />
				</Box>
				<Box
					sx={{
						alignItems: 'center',
						backgroundColor: 'rgba(255, 255, 255, 0.04)',
						borderRadius: 1,
						cursor: 'pointer',
						display: 'flex',
						justifyContent: 'space-between',
						mt: 2,
						p: '12px',
					}}
				>
					<div>
						<Typography color="inherit" variant="subtitle1">
							Mania Juegos
						</Typography>
						<Typography color="neutral.400" variant="body2">
							Videojuegos y consolas
						</Typography>
					</div>
				</Box>
			</Box>
			<Divider sx={{ borderColor: 'neutral.700' }} />
			<Box
				component="nav"
				sx={{
					flexGrow: 1,
					px: 2,
					py: 3,
				}}
			>
				<List
					sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: 1,
					}}
				>
					{navItems.map(({ path, title, icon, isCollapse, subItems, divider }, index) => {
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const { collapse, toggleCollapse } = useCollapse(validateActiveRoute(path, subItems, isCollapse));
						return (
							<React.Fragment key={`${path}-${index}`}>
								{divider && <Divider sx={{ borderColor: 'neutral.700', my: 2 }} />}
								<Item
									key={path}
									active={validateActiveRoute(path, subItems, isCollapse)}
									path={path}
									title={title}
									disabled={false}
									onClick={(): void => {
										!isCollapse && onNavOpen();
										toggleCollapse();
									}}
									icon={icon}
									isCollapse={isCollapse}
									collapse={collapse}
								/>
								{isCollapse && (
									<Collapse in={collapse} timeout="auto" unmountOnExit>
										{subItems?.map(({ path, title, icon }) => (
											<Item
												key={path}
												active={validateActiveRoute(path)}
												path={path}
												title={title}
												disabled={false}
												onClick={(): void => {
													onNavOpen();
													setCurrentSelected(title);
												}}
												icon={icon}
												isSubItem={true}
												sxMain={{
													backgroundColor: 'transparent',
													'&:hover': {
														backgroundColor: 'transparent',
													},
												}}
												sxContainerBox={{
													ml: 2,
												}}
											/>
										))}
									</Collapse>
								)}
							</React.Fragment>
						);
					})}
				</List>
			</Box>
		</Box>
	);
};
