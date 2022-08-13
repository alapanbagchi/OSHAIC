// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	// interface PrivateEnv {}

	// interface PublicEnv {}

	// interface Session {}

	// interface Stuff {}
}
declare namespace svelte.JSX {
	interface DOMAttributes<T> {
		onclick_outside?: CompositionEventHandler<T>;
	}
}