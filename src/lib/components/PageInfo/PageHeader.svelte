<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Button from '../shared/Button.svelte';

	export let title: string;
	export let buttons: any[] = [];
	export let tabs: any[] = [];
</script>

<section>
	<div class="header">
		<div class="details">
			<p class="title">{title}</p>
		</div>
		{#if buttons.length > 0}
			{#each buttons as button}
				<Button icon={button.icon} title={button.title} />
			{/each}
		{/if}
	</div>
	{#if tabs.length > 0}
		<div class="tabs">
			<Tabs options={tabs} />
		</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		height: fit-content;
		overflow: auto;
	}
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header .title {
		font-size: 30px;
		font-weight: 500;
		opacity: 0.9;
	}
	.tabs {
		margin-top: 10px;
	}
</style>
