import { Children, useState } from 'react';
import { Box, Tab, Tabs as MuiTabs } from '@mui/material';
import { ITabsProps } from './models/TabsProps';

export const Tabs: React.FC<ITabsProps> = ({ titleTabs = [], children }) => {
	const [currentTab, setCurrentTab] = useState<number>(0);
	const tabsContent = Children.toArray(children);

	const handleChange = (_: React.SyntheticEvent, newValue: number) => {
		setCurrentTab(newValue);
	};

	return (
		<Box>
			<MuiTabs value={currentTab} onChange={handleChange} variant="fullWidth" sx={{ mb: 3.5 }}>
				{titleTabs.map((title, index) => (
					<Tab
						key={index}
						label={title}
						value={index}
						sx={{
							fontSize: 16,
						}}
					/>
				))}
			</MuiTabs>
			<div role="tabpanel">{tabsContent[currentTab]}</div>
		</Box>
	);
};
