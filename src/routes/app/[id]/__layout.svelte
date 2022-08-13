<script>
	import MainMenu from '$lib/Menu/MainMenu.svelte';
</script>

<div class="menu">
	<MainMenu />
</div>

<style>
	.menu {
		width: 20%;
		min-width: 300px;
	}
    @media only screen and (max-width: 1150px) {
        .menu {
            width: 90px;
            min-width: unset;
        }
    }
    @media only screen and (max-width: 750px) {
        .menu {
            width: 100%;
            height: 90px;
            position: absolute;
            bottom:-10px;
        }
    }
</style>
