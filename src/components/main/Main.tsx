import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { type IMainProps } from './models/IMainProps';

export const Main: React.FC<IMainProps> = ({ children, title = 'test' }) => {
	return (
		<Box component="main" sx={{ flexGrow: 1, pt: 4, pb: 8 }}>
			<Head>
				<title>{`${title} | Mania juegos`}</title>
			</Head>
			<Container sx={{ display: 'flex', flexDirection: 'column', rowGap: 5 }} maxWidth={false}>
				{children}
			</Container>
		</Box>
	);
};
