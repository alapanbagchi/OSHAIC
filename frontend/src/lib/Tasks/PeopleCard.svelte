<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/shared/Badge.svelte';
	import Menu from '$lib/components/shared/Menu.svelte';
	import { faker } from '@faker-js/faker';
</script>

<div class="wrapper">
	<div class="profile">
		<div class="avatar">
			<img src={faker.image.avatar()} alt="" />
		</div>
		<div class="name_designation">
			<p class="name">{faker.name.fullName()}</p>
			<p class="designation">{faker.commerce.department()}</p>
		</div>
	</div>

	<div class="status">
		<Badge title="Pending" />
	</div>
	<div class="startDate">
		<div class="label">Assigned On</div>
		<div class="date">24th January 2022</div>
	</div>
	<div class="deadline">
		<div class="label">Completed On</div>
		<div class="date">24th January 2022</div>
	</div>
	<div class="menu">
		<Menu />
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		height: fit-content;
		background-color: var(--surface);
		padding: 10px;
		border-radius: 7px;
		cursor: pointer;
		border: 1px solid transparent;
		display: flex;
		justify-content: space-between;
	}
	.profile {
		width: 20%;
		height: fit-content;
		display: flex;
		align-items: center;
	}
	.avatar {
		width: 40px;
		min-width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.name_designation {
		margin-left: 20px;
	}
	.designation {
		opacity: 0.6;
		font-size: 0.9rem;
		margin-top: 5px;
	}
	.date:not(.date .label) {
		opacity: 0.6;
		font-size: 0.95rem;
	}
	.label {
		display: none;
	}
	@media screen and (max-width: 950px) {
		.wrapper {
			flex-direction: column;
			position: relative;
			padding: 20px 10px;
		}
		.profile {
			width: calc(100% - 60px);
		}
		.menu {
			position: absolute;
			right: 10px;
		}
		.status {
			margin: 20px 0;
		}
		.label {
			display: block;
			opacity: 1;
			padding-bottom: 3px;
		}
		.deadline {
			margin-top: 20px;
		}
	}
</style>
