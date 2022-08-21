<script lang="ts">
	import { clickOutside } from '../../../utils/clickOutside';
	export let showDropdown: boolean = false;
</script>

<div
	use:clickOutside
	on:click_outside={() => (showDropdown = false)}
	on:click={() => (showDropdown = !showDropdown)}
	class="button"
>
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5Z"
			fill="white"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
			fill="white"
		/>
	</svg>
	<div class="dropdown {showDropdown ? 'active' : ''}">
		<p>See Submission</p>
		<p>Change Status</p>
		<p>Alert</p>
		<p>View profile</p>
	</div>
</div>

<style>
	.button {
		width: 100%;
		height: fit-content;
		display: flex;
		flex-direction: column;
		position: relative;
		width: 40px;
		height: 40px;
        justify-content: center;
        align-items: center;
		border-radius: 7px;
	}
	.button:hover {
		background-color: var(--onSurface);
		transition: all 0.2s ease-in-out;
	}
	.button:active {
		background-color: var(--background);
		transition: all 0.2s ease-in-out;
	}
	.dropdown {
		position: absolute;
		top: 60px;
		right: 0;
		width: 200px;
		height: fit-content;
		flex-direction: column;
		background-color: var(--onBackground);
		padding: 10px;
		border-radius: 7px;
		font-size: 0.9rem;
		display: none;
		z-index: 99999999;
		gap: 0.5rem;
	}
	.active {
		display: flex;
	}
	.dropdown p {
		padding: 10px 15px;
		border-radius: 7px;
	}
	.dropdown p:hover {
		background-color: var(--primary);
		transition: all 0.3s ease-in-out;
	}
</style>
