<script lang="ts">
	import PageHeader from '$lib/components/PageInfo/PageHeader.svelte';
	import Summary from '$lib/Tasks/Summary.svelte';
	let tabs = ['Summary', 'Tasks', 'People', 'Discussions', 'Attachments'];
	$: option = tabs[0];
	const onTabClick = (event: CustomEvent) => {
		option = event.detail;
	};
</script>

<div class="wrapper">
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

	{#if option == 'Summary'}
		<Summary />
	{:else}
		asgasg
	{/if}
</div>

<style>
	.wrapper {
		width: 100%;
		min-height: 100vh;
		padding: 25px 40px 0 40px;
	}
    @media screen and (max-width: 750px){
        .wrapper {
            padding: 25px 20px 0 20px;
        }
    }
</style>
