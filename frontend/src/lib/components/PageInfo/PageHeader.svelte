<script lang="ts">
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
	import Button from '../shared/Button.svelte';
	export let title: string;
	export let buttons: any[] = [];
	export let tabs: any[] = [];
	export let backIcon: boolean = false;

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	const navigateBack = () => {
		history.go(-1);
	};

	const tab = (tab: CustomEvent) => {
		dispatch('tab', tab.detail);
	};
</script>

<section class="pageHeader">
	<div class="header">
		<div class="details">
			<!-- <img
				on:click={navigateBack}
				class="arrow {backIcon ? '' : 'hide'}"
				height="35px"
				src="/icons/shared/back.svg"
				alt=""
			/> -->
			<p class="title">{title}</p>
		</div>
		<div class="button_group">
			{#if buttons.length > 0}
				{#each buttons as button}
					<Button icon={button.icon} title={button.title} />
				{/each}
			{/if}
		</div>
	</div>
	{#if tabs.length > 0}
		<div class="tabs">
			<Tabs on:tab={tab} options={tabs} />
		</div>
	{/if}
</section>

<style>
	section {
		width: 100%;
		height: fit-content;
		overflow: auto;
	}
	.hide {
		display: none;
	}
	.button_group{
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
		margin-top: 10px;
		gap: 1rem;
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
	.details {
		display: flex;
		gap: 10px;
	}
	.arrow {
		margin-right: 5px;
		opacity: 0.5;
		cursor: pointer;
	}
	.arrow:hover {
		opacity: 1;
		transition: all 0.2s ease-in-out;
	}
	.tabs {
		margin-top: 20px;
	}
	@media screen and (max-width: 750px) {
		.header {
			flex-direction: column;
			align-items: flex-start;
			gap: 20px;
		}
	}
</style>
