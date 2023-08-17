import { useRouter } from 'next/router';

export const useRedirect = (): { redirect: (route: string) => void } => {
	const router = useRouter();
	const redirect = (path: string): void => {
		void router.push(path);
	};

	return {
		redirect,
	};
};
