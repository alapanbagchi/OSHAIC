<script>
	import { faker } from '@faker-js/faker';
	import { onMount } from 'svelte';
	$: height = 0;
	onMount(() => {
		height = document.getElementsByClassName('pageHeader')[0].clientHeight;
	});

	console.log(height);
</script>

<div style="height:calc(100vh - {height}px - 130px)" class="wrapper">
	<div class="header">
		<div class="owner">
			<p class="label">Started By</p>
			<p class="value">Alapan Bagchi</p>
		</div>
		<div class="status">
			<p class="label">Status</p>
			<p class="status">Pending</p>
		</div>
		<div class="tags">
			<p class="label">Status</p>
			<p class="tags">Design</p>
		</div>
		<div class="deadline">
			<p class="label">Deadline:</p>
			<p class="value">25th December 2022</p>
		</div>
	</div>
	<div class="description">
		<p class="title">Project Details</p>
		<p class="content">{faker.lorem.paragraphs(20)}</p>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		overflow: auto;
		flex-shrink: 0;
	}
	.header {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		margin-top: 20px;
		width: 100%;
	}
	.header > * {
		display: flex;
		opacity: 0.6;
	}
	.label {
		margin-right: 10px;
		width: 8ch;
	}
	.description {
		margin-top: 30px;
	}
	.title {
		font-size: 23px;
		opacity: 0.9;
		padding-bottom: 30px;
	}
	.description .content {
		opacity: 0.7;
		line-height: 30px;
	}
</style>
