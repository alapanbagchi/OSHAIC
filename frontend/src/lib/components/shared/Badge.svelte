<script lang="ts">
    export let title: string;
    export let color: string = 'var(--onSurface)'
</script>
<div style="background-color: {color}" class="badge">
    <p>{title}</p>
</div>

<style>
    .badge{
        width: fit-content;
        height: fit-content;
        border-radius: 7px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.8rem;
        padding: 6px 10px;
    }
</style>