<script lang="ts">
	export let data: PageData;
	import PageHeader from '$lib/components/PageInfo/PageHeader.svelte';
	import TaskCard from '$lib/Tasks/TaskCard.svelte';
	import type { PageData } from '@sveltejs/kit/types/internal';
	const buttons = [
		{
			icon: '/icons/shared/plus.svg',
			title: 'Add Task'
		}
	];
	const tabs = ['Pending', 'Awaiting Review', 'Backlog', 'Completed'];
	let dummy = [
		'1',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21'
	];
</script>

<section>
	<div class="pageinfo">
		<PageHeader title="Tasks & Projects" {buttons} {tabs} />
	</div>
	<div class="tasks">
		{#each dummy as task}
			<TaskCard />
		{/each}
	</div>
</section>

<style>
	section {
		padding: 25px 40px 0 40px;
		height: calc(100vh - 80px);
		overflow: auto;
	}
	.pageinfo {
		width: 100%;
		height: fit-content;
		overflow: auto;
	}
	.tasks {
		width: 100%;
		display: grid;
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		overflow: scroll;
		padding-top: 20px;
	}
	@media screen and (max-width: 768px) {
		section {
			padding: 20px 20px 0 20px;
		}
	}
</style>
