<script lang="ts">
	import { clickOutside } from '../../utils/clickOutside';
	export let companies: any[];
	import Company from './Company.svelte';
	$: showDropdown = false;
	$: current = companies[0];
	//Change the current company in the dropdown
	const companyChange = (event: any) => {
		current = event.detail;
	};
</script>

<div use:clickOutside on:click_outside={() => (showDropdown = false)} class="wrapper">
	<div on:click={() => (showDropdown = !showDropdown)} class="current">
		<Company isCurrent={true} company={current} />
	</div>
	<div
		on:click={() => (showDropdown = !showDropdown)}
		class="dropdown {showDropdown ? 'active' : ''}"
	>
		{#each companies as company,i}
			<Company on:changeCompany={companyChange} {company} isCurrent={false} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		position: relative;
		border-bottom: 1px solid var(--border);
	}
	.dropdown {
		width: calc(20% - 30px);
		overflow: hidden;
		position: absolute;
		width: 100%;
		height: 0;
		background-color: var(--background);
		border-radius: 7px;
		display: none;
	}
	.active {
		display: flex;
		flex-direction: column;
		height: auto;
		max-height: 300px;
		overflow: auto;
		position: absolute;
		z-index: 99;
		transition: all 0.5s ease-in-out;
	}
	.current {
		display: flex;
		width: 100%;
		align-items: center;
	}

	@media only screen and (max-width: 1150px) {
		.current {
			overflow: hidden;
			border-radius: 7px;
		}
		.dropdown {
			background-color: var(--onBackgroundLight);
			width: auto;
			padding: 5px;
			top: 20px;
			left: 100px;
		}
	}
	@media only screen and (max-width: 750px) {
		.wrapper {
			width: 100%;
			border-bottom: none;
		}

		.dropdown {
			top: 80px;
			left: 0;
			max-width: unset;
			width: calc(100vw - 20px);
		}
	}
</style>
