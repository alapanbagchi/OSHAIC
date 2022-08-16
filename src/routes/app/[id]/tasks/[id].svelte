<script lang="ts">
	import PageHeader from '$lib/components/PageInfo/PageHeader.svelte';
	import People from '$lib/Tasks/People.svelte';
	import Summary from '$lib/Tasks/Summary.svelte';
	let tabs = ['Summary', 'People', 'Discussions', 'Attachments'];
	$: option = tabs[0];
	const onTabClick = (event: CustomEvent) => {
		option = event.detail;
	};
</script>

<div class="wrapper">
	<div class="header">
		<PageHeader
			buttons={[
				{
					icon: '/icons/shared/pencil.svg',
					title: 'Edit Task'
				}
			]}
			title="Make Design Changes"
			{tabs}
			backIcon={true}
			on:tab={onTabClick}
		/>
	</div>
	{#if option == 'Summary'}
		<Summary />
	{:else if option == 'Tasks'}
		<People />
	{/if}
</div>

<style>
	.wrapper {
		width: 100%;
		padding: 25px 40px 0 40px;
		height: calc(100vh - 80px);
		max-height: 1000vh;
		display: flex;
		overflow: auto;
		flex-direction: column;
	}
	@media screen and (max-width: 750px) {
		.wrapper {
			padding: 25px 10px 0 20px;
		}
	}
</style>
