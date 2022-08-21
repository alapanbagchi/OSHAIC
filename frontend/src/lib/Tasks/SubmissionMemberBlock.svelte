<script lang="ts">
	import { faker } from '@faker-js/faker';
	import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher()

    const openModal = () => {
        dispatch('openModal')
    }
</script>

<div on:click={openModal} class="wrapper">

	<div class="profile">
		<div class="avatar">
			<img src={faker.image.avatar()} alt="" />
		</div>
		<div class="name_designation">
			<p class="name">{faker.name.fullName()}</p>
			<p class="designation">{faker.commerce.department()}</p>
		</div>
	</div>
</div>

<style>
	.wrapper {
		width: 100%;
        max-width: 400px;
		height: fit-content;
		background-color: var(--surface);
		padding: 10px;
        flex-direction: column;
		border-radius: 7px;
		cursor: pointer;
		border: 1px solid transparent;
		display: flex;
		justify-content: space-between;
	}
	.wrapper:hover {
		transform: translateY(-2px);
		transition: all 0.2s ease-in-out;
	}
	.details{
		margin-bottom: 15px;
	}
    .title{
        font-size: 18px;
        font-weight: 500;
        color: var(--text);
        margin-bottom: 5px;
    }
	.profile {
		width: 100%;
		height: fit-content;
		display: flex;
		align-items: center;
	}
	.avatar {
		width: 40px;
		min-width: 40px;
		height: 40px;
		overflow: hidden;
		border-radius: 50%;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.name_designation {
		margin-left: 20px;
	}
	.designation {
		opacity: 0.6;
		font-size: 0.9rem;
		margin-top: 5px;
	}
</style>
