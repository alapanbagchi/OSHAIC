<script lang="ts">
	export let icon: string = '';
	export let title: string;
</script>

<button>
	{#if icon != ''}
		<img width="15px" src={icon} alt="" />
	{/if}
	{title}
</button>

<style>
	button {
		display: flex;
		gap: 10px;
		white-space: nowrap;
		background-color: var(--onBackground);
        border: 1px solid var(--onSurface);
        font-weight: 500;
		align-items: center;
		padding: 12px 15px;
		border-radius: 7px;
		cursor: pointer;
		color: #fff;
		font-size: 14px;
        outline: none;
        transition: all 0.1s ease-in-out;
	}
	button:hover {
		background-color: var(--primary);
        transition: all 0.3s ease-in-out;
	}
    button:active{
        background-color: var(--primaryActive);
        transition: all 0.1s ease-in-out;
		transform: scale(0.97);
    }
</style>
