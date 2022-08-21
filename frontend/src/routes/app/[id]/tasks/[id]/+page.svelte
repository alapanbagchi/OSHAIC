<script lang="ts">
	import PageHeader from '$lib/components/PageInfo/PageHeader.svelte';
	import People from '$lib/Tasks/People.svelte';
import Submissions from '$lib/Tasks/Submissions.svelte';
	import Summary from '$lib/Tasks/Summary.svelte';
	let tabs = ['Summary', 'Assignees', 'Submissions'];
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
				},
				{
					icon: '/icons/shared/upload.svg',
					title: 'Submit Task'
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
	{:else if option == 'Assignees'}
		<People />
	{:else if option == 'Submissions'}
		<Submissions />
	{/if}
</div>

<style>
	.wrapper {
		width: 100%;
		padding: 20px 40px 0 40px;
		height: calc(100vh - 81px);
		display: flex;
		overflow: auto;
		flex-direction: column;
		top: 0;
		z-index: 999;
		background-color: var(--background);
	}
	@media screen and (max-width: 750px) {
		.wrapper {
			padding: 25px 20px 0 20px;
			height: calc(100vh - 161px);
		}
	}
</style>
