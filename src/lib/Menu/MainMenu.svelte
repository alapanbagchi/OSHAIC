<script lang="ts">
	import Header from './Header.svelte';
	import Option from './Option.svelte';

    export let companies: any[];
    export let options:any[]
</script>

<div class="wrapper">
	<div class="header">
		<Header {companies} />
	</div>
	{#each options as option}
		<Option name={option} />
	{/each}
    <div class="systemoptions">
		<Option name="Settings" />
		<Option name="Help" />
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
	}
    .systemoptions {
        margin-top: 100%;
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
        .systemoptions{
            display: flex;
            margin-top: unset;
        }
	}
</style>
