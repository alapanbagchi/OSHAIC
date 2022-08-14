<script lang="ts">
	let options: string[] = ['Pending', 'Awaiting Review', 'Completed'];
	$: active = options[0];
</script>

<div class="wrapper">
	{#each options as option}
		<div on:click={() => (active = option)} class="tab {active === option ? 'active' : ''}">
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
