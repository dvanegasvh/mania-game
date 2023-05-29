import { Layout } from '@/components/layout';
import { createTheme } from '@/theme';
import { createEmotionCache } from '@/utils/emotionCache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
	const theme = createTheme();
	const emotionCache = createEmotionCache();

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
}
