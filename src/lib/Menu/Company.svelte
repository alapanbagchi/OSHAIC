<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { page } from '$app/stores';
	export let isCurrent: boolean;
	const dispatch = createEventDispatcher();
	export let company: any;

	//Returns the link to navigate to
	const link = () => {
		const linkArr = $page.url.pathname.split('/');
		//Remove everything after the 2nd index
		linkArr.splice(2);
		//Add the new path
		linkArr.push(company.id);
		//Join the array back together
		const link = linkArr.join('/');
		return link + '/dashboard';
	};

	//Dispatches an event to the parent component to change the current company in the dropdown 
	const changeCompany = () => {
		dispatch('changeCompany', company);
	};

	//Display company member count in x.yzk format
	const formatCount = (count: number) => {
		if (count > 999) {
			return (count / 1000).toFixed(2) + 'k';
		} else {
			return count;
		}
	};
</script>

<a on:click={changeCompany} class="wrapper  {isCurrent ? 'current' : ''}" href={link()}>
	<div class="logo">
		<img src="/images/logo/{company.icon}.svg" alt="{company.name} logo" />
	</div>
	<div class="details">
		<p class="name">{company.name}</p>
		<p class="members">{formatCount(company.members)} members</p>
	</div>
</a>

<style>
	.wrapper {
		width: 100%;
		min-height: 70px;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 0 14px;
	}
	.wrapper:hover {
		background-color: var(--onSurface);
		transition: all 0.2s ease-in-out;
		border-radius: 7px;
	}
	.logo {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: var(--onSurface);
		box-shadow: 0px 0px 0px 2px var(--surface), 0px 0px 0px 3px var(--border);
		margin-right: 20px;
		border-radius: 7px;
	}
	.logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.name {
		font-weight: 500;
		font-size: 16px;
		color: var(--text);
		white-space: nowrap;
	}
	.members {
		margin-top: 4px;
		font-size: 14px;
		opacity: 0.6;
		white-space: nowrap;

	}
	@media only screen and (max-width: 1150px) {
		.wrapper.current {
			padding: 0;
			width: 60px;
			min-height: unset;
		}
		.current .details {
			display: none;
		}
		.wrapper.current .logo {
			margin-right: 0;
			padding: 0;
			width: 60px;
			height: 50px;
		}
		.current {
			padding: unset;
		}
	}
	@media only screen and (max-width: 750px) {
		.wrapper.current {
			width: fit-content;
			padding: 0;
			width: fit-content;
			min-height: unset;
		}

		.wrapper.current .logo {
			margin-right: 15px;
			padding: 0;
			width: 40px;
			height: 40px;
		}
		.current {
			padding: unset;
		}
	}
</style>
