import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	const user = { name: 'Aman', id: 1 };
	return {
		user
	};
};
