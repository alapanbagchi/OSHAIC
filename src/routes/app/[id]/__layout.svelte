<script>
	import Header from '$lib/Menu/Header.svelte';
	import MainMenu from '$lib/Menu/MainMenu.svelte';
	import { faker } from '@faker-js/faker';
	//Menu Options
	let options = ['Dashboard', 'Tasks', 'Automated Lessons', 'Management', 'Forms', 'Reports'];

	//Companies to be passed as a prop to the Header component
	let companies = [
		{
			id: 1,
			name: 'Google LLC',
			icon: 'google',
			members: '4500'
		},
		{
			id: 2,
			name: 'Apple',
			icon: 'apple',
			members: '2352'
		},
		{
			id: 3,
			name: 'Microsoft',
			icon: 'microsoft',
			members: '3521'
		}
	];
</script>

<main>
	<div class="menu">
		<MainMenu {companies} {options} />
	</div>
	<div class="content">
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
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
	}
	.header {
		width: 100%;
		height: 90px;
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
	}
	

	.menu {
		width: 20%;
		min-width: 300px;
	}
	.content {
		width: 80%;
		overflow: auto;
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
	@media only screen and (max-width: 1150px) {
		.menu {
			width: 90px;
			min-width: unset;
		}
		.content {
			width: calc(100% - 90px);
		}
	}
	@media only screen and (max-width: 750px) {
		.menu {
			width: 100%;
			height: 90px;
			position: absolute;
			bottom: -10px;
		}
		.header {
			display: flex;
			height: 80px;
			padding: 10px;
			background-color: var(--surface);
			gap: 10px;
		}
		.content {
			width: 100%;
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
