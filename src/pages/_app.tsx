import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { Layout } from '@/components/layout';
import { createTheme } from '@/theme';
import { createEmotionCache } from '@/utils/emotionCache';
import '@/styles/globals.css';

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const theme = createTheme();
	const emotionCache = createEmotionCache();
	const AnyComponent = Component as any;

	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<Layout>
					<AnyComponent {...pageProps} />
				</Layout>
			</ThemeProvider>
		</CacheProvider>
	);
};

export default App;
