<script lang="ts">
	import Header from '$lib/Menu/Header.svelte';
	import { faker } from '@faker-js/faker';
	export let companies: any;
</script>

<div class="header">
	<div class="company">
		<Header {companies} />
	</div>
	<div class="search">
		<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C11.8487 18 13.551 17.3729 14.9056 16.3199L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L16.3199 14.9056C17.3729 13.551 18 11.8487 18 10C18 5.58172 14.4183 2 10 2ZM4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10Z" fill="white"/>
			</svg>
			
		<input type="text" placeholder="What are you looking for?" />
	</div>
	<div class="profile">
		<div class="avatar">
			<img src={faker.image.avatar()} alt="" />
		</div>
		<div class="details">
			<p class="name">Alapan Bagchi</p>
			<p class="email">alapanbagchi2002@gmail.com</p>
		</div>
	</div>
</div>

<style>
	.header {
		width: 100%;
		height: 81px;
		border-bottom: 1px solid var(--border);
		display: flex;
		align-items: center;
	}
	.search{
		width: 30%;
		height: 60%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-color: var(--onBackground);
		border-radius: 7px;
		padding: 0 15px;
		gap: 0.4rem;
		margin-left: 40px;
	}
	input{
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 0 10px;
		font-size: 14px;
		color: var(--text);
		background: transparent;
	}
	.profile {
		display: flex;
		margin-left: auto;
		height: 100%;
		align-items: center;
		padding: 0 50px 0 20px;
		cursor: pointer;
	}
	.profile:hover {
		background-color: var(--surface);
	}
	.details {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.avatar {
		width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 20px;
	}
	.avatar img {
		width: 100%;
		height: 100%;
	}
	.details .name {
		opacity: 0.8;
		font-size: 16px;
		font-weight: 500;
		color: var(--text);
	}
	.details .email {
		color: var(--text);
		opacity: 0.5;
		font-size: 14px;
		margin-top: 5px;
	}
	.header .company {
		display: none;
	}

	@media only screen and (max-width: 750px) {
		.header {
			display: flex;
			height: 80px;
			padding: 10px;
			background-color: var(--surface);
			gap: 10px;
		}
		.profile .details {
			display: none;
		}
		.profile {
			padding: unset;
		}.search{
			width: 100%;
			margin-left: 0;
		}
		.header .company {
			display: flex;
			width: 55px;
			height: 55px;
			align-items: center;
			justify-content: center;
		}
	}
</style>
