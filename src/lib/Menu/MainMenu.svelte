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
		padding: 20px 0;
	}
	.wrapper {
		background-color: var(--surface);
		width: 100%;
		height: 100vh;
		padding: 0 15px;
		position: relative;
	}
	.useroptions {
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.systemoptions {
		position: absolute;
		bottom: 20px;
		width: calc(100% - 30px);
	}

	@media only screen and (max-width: 750px) {
		.wrapper {
			width: 100%;
			max-width: 100vw;
			overflow: auto;
			height: 80px;
			display: flex;
			align-items: center;
			justify-content: flex-start;
		}
		.header {
			display: none;
		}
		.useroptions {
			flex-direction: row;
		}
		.systemoptions {
			position: initial;
			display: flex;
		}
	}
</style>
