import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ cookies }) => {
	const token = cookies.get('token');
	// get the user from the token
	const user = { name: 'Aman', id: 1 };
	return {
		user: token ? user : null
	};
};
