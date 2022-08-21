<script>
	import Attachment from '$lib/components/shared/Attachment.svelte';
	import { faker } from '@faker-js/faker';
</script>

<div class="wrapper">
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
			<p class="label">Progress</p>
			<p class="tags">20% completed</p>
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
	<div class="description">
		<p class="title">Attachments</p>
		<div class="attachments">
			<Attachment />
			<Attachment />
			<Attachment />
			<Attachment />
			<Attachment />
			<Attachment />
			<Attachment />
			<Attachment />
		</div>
	</div>
</div>

<style>
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top:10px;
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
	.attachments{
		width: 100%;
		display: grid;
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		overflow: scroll;
		padding-top: 20px;
	}
</style>
