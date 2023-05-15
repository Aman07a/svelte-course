// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Error {
			code?: string;
		}
		interface Locals {
			user?: {
				id: number;
				name: string;
			};
		}
		// interface PageData {
		// 	products?: { id: number }[];
		// }
		// interface Platform {}
	}
}

export {};
