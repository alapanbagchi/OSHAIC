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

<a
	on:click={changeCompany}
	class="wrapper  {isCurrent ? 'current' : ''}"
	href={!isCurrent ? link() : ''}
>
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
		height: 89px;
		display: flex;
		align-items: center;
		cursor: pointer;
		padding: 15px;
	}
	.current {
		padding: 20px 15px;
	}
	.wrapper:hover {
		background-color: var(--onSurface);
		transition: all 0.2s ease-in-out;
	}
	.logo {
		width: 30px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-right: 20px;
		border-radius: 7px;
	}
	.logo img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}

	.name {
		font-weight: 400;
		font-size: 16px;
		color: var(--text);
		white-space: nowrap;
		opacity: 0.9;
	}
	.members {
		margin-top: 4px;
		font-size: 13px;
		opacity: 0.5;
		white-space: nowrap;
	}
	@media only screen and (max-width: 1150px) {
		.wrapper.current {
			padding: 0;
			width: 100%;
			justify-content: center;
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
			width: 100%;
			padding: 0;
			width: fit-content;
			min-height: unset;
		}

		.wrapper.current .logo {
			margin-right: unset;
			padding: 0;
			width: 40px;
			height: 40px;
		}
		.wrapper.current {
			width: 100%;
			height: 55px;
			padding: unset;
		}

	}
</style>
