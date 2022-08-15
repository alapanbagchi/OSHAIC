<script>
	import Header from '$lib/Header/Header.svelte';
	import MainMenu from '$lib/Menu/MainMenu.svelte';

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
		<Header {companies} />
		<slot {companies} />
	</div>
</main>

<style>
	main {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		display: flex;
	}
	.menu {
		width: 20%;
		min-width: 300px;
	}
	.content {
		width: 80%;
		overflow: hidden;
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
		.content {
			width: 100%;
		}
	}
</style>
