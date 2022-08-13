<script lang="ts">
	import { page } from '$app/stores';
	export let name: string;

	const path = name.toLowerCase().replace(' ', '_');

	
	$: isActive = $page.routeId?.toString().split('/')[2] === path;

	//Returns the link to navigate to when the option is clicked
	const link = () => {
		const linkArr = $page.url.pathname.split('/');
		//Remove everything after the 2nd index
		linkArr.splice(3);
		//Add the new path
		linkArr.push(path);
		//Join the array back together
		const link = linkArr.join('/');
		return link;
	};
</script>

<a href={link()}>
	<div class="wrapper {isActive ? 'active' : ''}">
		<img src="/icons/menu/{path}.svg" alt="menu_icon" />
		<p class="title">{name}</p>
	</div>
</a>

<style>
	.wrapper {
		width: 100%;
		font-size: 16px;
		display: flex;
		padding: 15px;
		border-radius: 7px;
		border: 1px solid transparent;
		margin-bottom: 5px;
		display: flex;
	}
	.wrapper img {
		margin-right: 20px;
		opacity: 0.5;
	}
	.title {
		opacity: 0.5;
	}
	.active {
		background-color: var(--onSurface);
		border: 1px solid var(--border);
		opacity: 1;
		transition: all 0.2s ease-in-out;
	}
	.active img,
	.active .title {
		opacity: 1;
	}
	.wrapper:hover {
		border: 1px solid var(--border);
		transition: all 0.2s ease-in-out;
	}

	@media only screen and (max-width: 1150px) {
		.wrapper {
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.title {
			display: none;
			opacity: 1;
		}
		.wrapper img {
			margin-right: 0;
		}
		.wrapper:hover .title {
			display: flex;
			background-color: var(--surface);
			padding: 20px;
			position: absolute;
			left: 100px;
		}
	}
	@media only screen and (max-width: 750px) {
		.wrapper {
			flex-direction: column;
		}
		.wrapper:hover .title {
			display: none;
		}
		.wrapper img {
			margin-right: 0;
		}

	}
</style>
