import type { EmotionCache } from '@emotion/react';
import createCache from '@emotion/cache';

export const createEmotionCache = (): EmotionCache => {
	return createCache({ key: 'css' });
};
