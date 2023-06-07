import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { IMainProps } from './models/IMainProps';

export const Main: React.FC<IMainProps> = ({ children, title = 'test' }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, py: 8 }}>
			<Head>
				<title>{`${title} | Mania juegos`}</title>
			</Head>
			<Container maxWidth="xl">{children}</Container>
		</Box>
	);
};
