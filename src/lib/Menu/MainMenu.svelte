<script lang="ts">
	import Header from './Header.svelte';
	import Option from './Option.svelte';
	export let companies: any[];
	export let options: any[];
</script>

<div class="wrapper">
	<div class="header">
		<Header {companies} />
	</div>
	<div class="useroptions">
		{#each options as option}
			<Option name={option} />
		{/each}
	</div>
	<div class="systemoptions">
		<Option name="Settings" />
		<Option name="Help" />
		<Option name="Logout" />
	</div>
</div>

<style>
	.header {
		padding: 0 0 25px 0;
	}
	.wrapper {
		background-color: var(--surface);
		width: 100%;
		height: 100vh;
		position: relative;
		z-index: 999999;
	}
	.useroptions {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 0 15px;
	}
	.systemoptions {
		padding: 0 15px;
		position: absolute;
		bottom: 20px;
		width: 100%;
	}

	@media only screen and (max-width: 750px) {
		.wrapper {
			width: 100%;
			max-width: 100vw;
			overflow: auto;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.header {
			display: none;
		}
		.useroptions {
			width: fit-content;
			flex-direction: row;
			padding: 0 0;
		}
		.systemoptions {
			width: fit-content;
			position: initial;
			display: flex;
			padding: 0 0;
		}
	}
	@media only screen and (max-width: 480px) {
		.wrapper{
			justify-content: flex-start;
		}
	}
</style>
