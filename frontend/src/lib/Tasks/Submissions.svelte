<script>
	import Attachment from '$lib/components/shared/Attachment.svelte';
	import Button from '$lib/components/shared/Button.svelte';
	import { faker } from '@faker-js/faker';
	import { clickOutside } from '../../utils/clickOutside';
	import Comments from './Comments.svelte';
	import SubmissionMemberBlock from './SubmissionMemberBlock.svelte';
	let modalOpen = false;
	$: dropdownOpen = false;
	let submissions = [
		{
			id: '1',
			title: 'Added new button element',
			description: faker.lorem.paragraph(50),
			attachments: [
				{
					id: '1',
					title: 'Screenshot',
					url: 'https://via.placeholder.com/150',
					type: 'image'
				}
			]
		},
		{
			id: '2',
			title: 'Added new dropdown element',
			description: faker.lorem.paragraph(50),
			attachments: [
				{
					id: '1',
					title: 'Screenshot',
					url: 'https://via.placeholder.com/150',
					type: 'image'
				}
			]
		},
		{
			id: '3',
			title: 'Added new header element',
			description: faker.lorem.paragraph(50),
			attachments: [
				{
					id: '1',
					title: 'Screenshot',
					url: 'https://via.placeholder.com/150',
					type: 'image'
				}
			]
		},
		{
			id: '4',
			title: 'Added new searchbar element',
			description: faker.lorem.paragraph(50),
			attachments: [
				{
					id: '1',
					title: 'Screenshot',
					url: 'https://via.placeholder.com/150',
					type: 'image'
				}
			]
		},
		{
			id: '5',
			title: 'Added new menu element',
			description: faker.lorem.paragraph(50),
			attachments: [
				{
					id: '1',
					title: 'Screenshot',
					url: 'https://via.placeholder.com/150',
					type: 'image'
				}
			]
		}
	];
	$: currentData = submissions[0];
</script>

<div class="wrapper">
	<SubmissionMemberBlock on:openModal={() => (modalOpen = !modalOpen)} />

	<div class="modal {modalOpen ? '' : 'hide'}">
		<div on:click={() => (dropdownOpen = !dropdownOpen)} class="header">
			<div class="current">
				<p class="title">{currentData.title}</p>
				<div class="dropdownbuttonsvg {dropdownOpen?'flip':''}">
					<img src="/icons/shared/dropdown.svg" alt="" />
				</div>
			</div>
			<div
				use:clickOutside
				on:click_outside={() => (dropdownOpen = false)}
				class={dropdownOpen ? 'dropdown' : 'hide'}
			>
				{#each submissions as submission}
					<p on:click={() => (currentData = submission)} class="title">
						{submission.title}
					</p>
				{/each}
			</div>
		</div>
		<div class="submuitter_data">
			<div class="owner">
				<p class="label">Submission by</p>
				<p class="value">Alapan Bagchi</p>
			</div>
			<div class="status">
				<p class="label">Date of submission</p>
				<p class="status">12th July 2022</p>
			</div>
			<div class="tags">
				<p class="label">Status</p>
				<p class="tags">Completed</p>
			</div>
			<div class="tags">
				<p class="label">Review Status</p>
				<p class="tags">Pending</p>
			</div>
		</div>
		<div class="description">
			<p class="title">Description</p>
			<p class="content">{currentData.description}</p>
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
		<div class="description">
			<p class="title">Comments</p>
			<div class="comments">
				<Comments />
				<Comments />
				<Comments />
				<Comments />
				<Comments />
				<Comments />
			</div>
			<div class="input">
				<input type="text" placeholder="Add a comment" />
				<Button title="Send" />
			</div>
		</div>
	</div>
</div>

<style>
	.modal {
		position: absolute;
		padding: 30px 40px 0 40px;
		width: 100%;
		height: calc(100vh - 80px);
		top: 81px;
		overflow: auto;
		left: 0;
		background-color: var(--background);
	}
	.hide {
		display: none;
	}
	.current {
		cursor: pointer;
		display: flex;
		align-items: center;
		gap: 20px;
	}
	.dropdownbuttonsvg {
		display: flex;
		opacity: 0.5;
		transition: all 0.2s ease-in-out;

	}
	.title {
		font-size: 30px;
		font-weight: 500;
		opacity: 0.9;
	}
	.header {
		display: flex;
		justify-content: space-between;
		width: fit-content;
		flex-direction: column;
		position: relative;
	}
	.flip{
		transform: rotate(180deg);
		transition: all 0.2s ease-in-out;
	}
	.dropdown {
		display: flex;
		flex-direction: column;
		padding: 12px 10px;
		width: fit-content;
		background-color: var(--surface);
		margin-top: 60px;
		z-index: 999;
		border-radius: 7px;
		width: 100%;
		position: absolute;
	}
	.dropdown p {
		opacity: 0.4;
		font-size: 16px;
		padding: 12px 10px;
		border-radius: 7px;
		cursor: pointer;
	}
	.dropdown p:hover {
		opacity: 0.8;
		background-color: var(--onSurface);
		transition: all 0.2s ease-in-out;
	}

	.description .title {
		font-size: 23px;
		margin: 40px 0 20px 0;
		font-weight: 500;
		opacity: 0.9;
	}
	.description .content {
		opacity: 0.7;
		line-height: 30px;
	}
	.submuitter_data {
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		margin-top: 30px;
		width: 100%;
	}
	.submuitter_data > * {
		display: flex;
		opacity: 0.6;
	}
	.label {
		margin-right: 10px;
		width: 15ch;
	}
	.attachments {
		width: 100%;
		display: grid;
		grid-column-gap: 30px;
		grid-row-gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		overflow: scroll;
		padding-top: 20px;
	}
	.comments {
		display: flex;
		flex-direction: column;
		gap: 30px;
		margin: 40px 0;
	}
	.input {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin-top: 20px;
		padding: 0 20px;
		border: 1px solid var(--onSurface);
		background-color: var(--surface);
		border-radius: 7px;
	}
	.input input {
		width: 90%;
		height: 100%;
		padding: 20px 0;
		font-size: 15px;
		border-radius: 7px;
		border: none;
		background-color: transparent;
		outline: none;
		color: var(--text);
	}
	@media screen and (max-width:750px){
		.modal{
			padding: 30px 20px 0 20px;
		}
		.current{
			gap: 20px;
		}
	}
</style>
