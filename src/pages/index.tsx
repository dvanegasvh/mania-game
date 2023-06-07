import { Inter } from 'next/font/google';
import { Box } from '@mui/material';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<Box>Main page</Box>
		</main>
	);
}
