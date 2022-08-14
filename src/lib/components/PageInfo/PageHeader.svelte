<script>
	import Tabs from '$lib/components/Tabs/Tabs.svelte';
import Button from '../shared/Button.svelte';
</script>

<section>
	<div class="header">
		<div class="details">
			<p class="title">Tasks & Projects</p>
		</div>
		<Button icon="/icons/shared/plus.svg" title="Add Task"  />
	</div>
	<div class="tabs">
		<Tabs />
	</div>
</section>

<style>
	section {
		width: 100%;
		height: 100vh;
		overflow: auto;
	}
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.header .title {
		font-size: 30px;
		font-weight: 500;
		opacity: 0.9;
	}
</style>
