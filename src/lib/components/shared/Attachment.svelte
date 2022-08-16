<script lang="ts">
	import { page } from '$app/stores';
	import Badge from '$lib/components/shared/Badge.svelte';
	import { faker } from '@faker-js/faker';
	let dummy = ['', '', '', '', '', ''];
	const link = (id: string) => {
		return $page.url.pathname.split('/').slice(0, 4).join('/') + '/' + id;
	};
</script>

<div class="wrapper">
	<div class="thumbnail">
		<img src={faker.image.business()} alt="" />
	</div>
	<div class="title">
		<p>Design Guide.jpg</p>
		<p class="size">1.98MB</p>
	</div>
</div>



<style>
	.wrapper {
		width: 100%;
		background-color: var(--surface);
		padding: 10px;
		border-radius: 7px;
		cursor: pointer;
		border: 1px solid transparent;
		opacity: 0.8;
	}
	.thumbnail {
		width: 100%;
		height: 200px;
		background-color: var(--surface);
		border-radius: 7px;
		border: 1px solid var(--border);
		margin-bottom: 20px;
		overflow: hidden;
	}
	.thumbnail img {
		width: 100%;
		height: 100%;
	}
	.wrapper:hover {
		transform: translateY(-5px);
		opacity: 1;
		transition: all 0.3s ease;
	}
	.size {
		opacity: 0.5;
	}

</style>
