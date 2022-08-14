<script lang="ts">
	import Header from '$lib/Menu/Header.svelte';
	import { faker } from '@faker-js/faker';
	export let companies: any;
</script>

<div class="header">
	<div class="company">
		<Header {companies} />
	</div>
	<div class="profile">
		<div class="avatar">
			<img src={faker.image.avatar()} alt="" />
		</div>
		<div class="details">
			<p class="name">Alapan Bagchi</p>
			<p class="email">alapanbagchi2002@gmail.com</p>
		</div>
	</div>
</div>

<style>
	.header {
		width: 100%;
		height: 90px;
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
	}

	.profile {
		display: flex;
		margin-left: auto;
		height: 100%;
		align-items: center;
		padding: 0 30px 0 10px;
		cursor: pointer;
	}
	.profile:hover {
		background-color: var(--surface);
	}
	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.avatar {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 20px;
	}
	.avatar img {
		width: 100%;
		height: 100%;
	}
	.details .name {
		opacity: 0.8;
		font-size: 16px;
		font-weight: 500;
		color: var(--text);
	}
	.details .email {
		color: var(--text);
		opacity: 0.5;
		font-size: 14px;
		margin-top: 5px;
	}
	.header .company {
		display: none;
	}

	@media only screen and (max-width: 750px) {
		.header {
			display: flex;
			height: 80px;
			padding: 10px;
			background-color: var(--surface);
			gap: 10px;
		}
		.profile .details {
			display: none;
		}
		.profile {
			padding: unset;
		}
		.header .company {
			display: flex;
			width: 55px;
			height: 55px;
			align-items: center;
			justify-content: center;
		}
	}
</style>
