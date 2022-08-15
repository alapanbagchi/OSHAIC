<script>
	import { page } from '$app/stores';
	import Badge from '$lib/components/shared/Badge.svelte';
	import { faker } from '@faker-js/faker';
	let dummy = ['', '', '', '', '', ''];

    let url = $page.url.pathname.split('/').slice
    console.log(url)
</script>

<a href="">
	<div class="wrapper">
		<div class="header">
			<p class="title">Make a Design System</p>
			<p class="description">
				Make a design system using FIGMA and realize it using Svelte, Plain CSS, faker, etc
			</p>
		</div>
		<div class="badge">
			<Badge title="Design" />
		</div>
		<div class="progress">
			<div class="progress_bar" style="width: 100%;" />
		</div>
		<div class="footer">
			<div class="deadline">
				<Badge title="28th Decemeber, 2020" />
			</div>
			<div class="avatars">
				{#each dummy as avatar}
					<div class="avatar">
						<img src={faker.image.avatar()} alt="avatar" />
					</div>
				{/each}
			</div>
		</div>
	</div>
</a>

<style>
	.wrapper {
		width: 100%;
		background-color: var(--surface);
		padding: 20px;
		border-radius: 7px;
		cursor: pointer;
		border: 1px solid transparent;
		opacity: 0.8;
	}
	.wrapper:hover {
		transform: translateY(-5px);
		opacity: 1;
		transition: all 0.3s ease;
	}
	.title {
		font-size: 1.1rem;
	}
	.description {
		opacity: 0.5;
		font-size: 0.9rem;
		margin-top: 20px;
		line-height: 28px;
	}
	.badge {
		margin-top: 30px;
	}
	.progress {
		margin-top: 20px;
		height: 2px;
		border-radius: 7px;
		overflow: hidden;
	}
	.progress_bar {
		background-color: var(--success);
		width: 100%;
		height: 100%;
	}
	.footer {
		margin-top: 20px;
		display: flex;
		justify-content: space-between;
	}
	.avatars {
		display: flex;
	}
	.avatar {
		width: 30px;
		height: 30px;
		overflow: hidden;
		border-radius: 50%;
		margin-left: -12px;
		border: 3px solid var(--surface);
	}
	.avatar img {
		width: 100%;
		height: 100%;
	}
</style>
