<script lang="ts">
	export let icon: string = '';
	export let title: string;
</script>

<button>
	{#if icon != ''}
		<img width="18px" src={icon} alt="" />
	{/if}
	{title}
</button>

<style>
	button {
		display: flex;
		gap: 15px;
		background-color: var(--primary);
        border: 1px solid var(--onSurface);
		height: 45px;
		align-items: center;
		padding: 0 15px;
		border-radius: 7px;
		cursor: pointer;
		color: #fff;
		font-size: 14px;
        outline: none;
	}
	button:hover {
		background-color: var(--onSurface);
	}
</style>
