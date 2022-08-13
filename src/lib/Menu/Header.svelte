<script lang="ts">
	export let companies: any[];
	import Company from './Company.svelte';
	$: showDropdown = false;
	$: current = companies[0];

	//Change the current company in the dropdown
	const companyChange = (event: any) => {
		current = event.detail;
	};
</script>

<div class="wrapper">
	<div on:click={() => (showDropdown = !showDropdown)} class="current">
		<Company isCurrent={true} company={current} />
		<svg xmlns="http://www.w3.org/2000/svg" width="12.828" height="18" viewBox="0 0 12.828 18">
			<path
				id="Path_13"
				data-name="Path 13"
				d="M7,15l5,5,5-5M7,9l5-5,5,5"
				transform="translate(-5.586 -3)"
				fill="none"
				opacity="0.5"
				stroke="#fff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
			/>
		</svg>
	</div>
	<div on:click={() => (showDropdown = !showDropdown)} class="dropdown {showDropdown ? 'active' : ''}">
		{#each companies as company}
			<Company on:changeCompany={companyChange} {company} isCurrent={false} />
		{/each}
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
		position: relative;
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
		padding-right: 20px;
	}
	.current:hover{
		background-color: var(--onSurface);
		transition: all 0.2s ease-in-out;
		border-radius: 7px;
	}
	@media only screen and (max-width: 1150px) {
		.current svg{
			display: none;
		}
		.current{
			overflow: hidden;
			padding: 0rem;
		}
		.dropdown{
			background-color: var(--onBackgroundLight);
			width: auto;
			padding: 5px;
			top: 20px;
			left: 100px;
		}
	}
</style>
