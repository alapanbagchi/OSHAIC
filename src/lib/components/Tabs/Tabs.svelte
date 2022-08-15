<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let options: any[];
	const changeCompany = (option:string) => {
		dispatch('tab', option);
	};
	$: active = options[0];
	const handleClick = (option:string) => {
		active = option
		changeCompany(option);
	};
</script>

<div class="wrapper">
	{#each options as option}
		<div on:click={() => handleClick(option)} class="tab {active === option ? 'active' : ''}">
			{option}
		</div>
	{/each}
</div>

<style>
	.wrapper {
		width: fit-content;
		display: flex;
		border-radius: 7px;
		overflow: hidden;
		border: 3px solid var(--surface);
		padding: 3px;
		gap: 5px;
	}

	.tab {
		width: fit-content;
		height: fit-content;
		padding: 10px;
		font-size: 14px;
		border-radius: 7px;
		opacity: 0.5;
		cursor: pointer;
		position: relative;
	}
	.tab:hover:not(.active) {
		background-color: var(--onBackground);
		transition: all 0.2s ease-in-out;
	}
	.active {
		background-color: var(--onBackground);
		opacity: 1;
	}
</style>
