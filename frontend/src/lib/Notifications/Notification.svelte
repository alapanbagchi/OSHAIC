<script lang="ts">
	import { onDestroy } from 'svelte';
	import { alert } from '../../stores/Notifications';

	export let ms = 30;
	let timeout: any;
	let width = 0;
	const onMessageChange = (message: any, ms: any) => {
		if (message != '') {
			width = 100;
			clearTimeout(timeout);
			//Set Interval to reduce width to 0
			if (ms > 0) timeout = setInterval(() => (width != 0 ? width-- : null), ms);
		}
	};
	$: onMessageChange($alert.title, ms);
	onDestroy(() => clearTimeout(timeout));
	const icon = (type:string) => {
		if (type === 'SUCCESS') return '/icons/shared/success.svg';
		else if (type === 'ERROR') return '/icons/shared/error.svg';
		else if (type === 'INFO') return '/icons/shared/info.svg';
	};
</script>

<div class="wrapper {width == 0 ? 'hide' : ''}">
	<div class="container">
		<div style="width:{width}%" class="progressbar" />
		<div class="content">
			<div class="icon">
				<img src={icon($alert.type)} alt="" />
			</div>
			<div class="text">
				<div class="title">{$alert.title}</div>
				<div class="description">
					{$alert.description}
				</div>
			</div>
		</div>
	</div>
	<slot />
</div>

<style>
	.container {
		position: absolute;
		width: 400px;
		z-index: 99999999999999;
		bottom: 0;
		right: 0;
		background-color: var(--surface);
		display: flex;
		line-height: 25px;
		align-items: flex-start;
		flex-direction: column;
	}
	.content {
		width: 100%;
		display: flex;
		gap: 20px;
		padding: 20px 25px;
	}
	.progressbar {
		height: 4px;
		width: 100%;
		background-color: var(--success);
	}
	.hide {
		opacity: 0;
		transition: all 0.3s ease-in-out;
	}
	.icon {
		width: 30px;
		height: 30px;
		min-width: 30px;
		min-height: 30px;
		max-width: 30px;
		max-height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 5px;
		border-radius: 50%;
	}
	.title {
		font-weight: 500;
		font-size: 0.9rem;
		margin-bottom: 5px;
		opacity: 1 !important;
	}
	.description {
		font-size: 0.9rem;
		opacity: 0.7;
	}
</style>
