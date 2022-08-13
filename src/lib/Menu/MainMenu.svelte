<script>
	import Header from './Header.svelte';
	import Option from './Option.svelte';

    //Menu Options
	let options = ['Dashboard', 'Tasks', 'Automated Lessons', 'Management', 'Forms', 'Reports'];

    //Companies to be passed as a prop to the Header component
	let companies = [
		{
			id: 1,
			name: 'Google LLC',
			icon: 'google',
			members: '4500'
		},
		{
			id: 2,
			name: 'Apple',
			icon: 'apple',
			members: '2352'
		},
		{
			id: 3,
			name: 'Microsoft',
			icon: 'microsoft',
			members: '3521'
		}
	];
</script>

<div class="wrapper">
	<div class="header">
		<Header {companies} />
	</div>
	{#each options as option}
		<Option name={option} />
	{/each}
    <div class="systemoptions">
		<Option name="Settings" />
		<Option name="Help" />
    </div>
</div>

<style>
	.header {
		padding: 20px 0;
	}
	.wrapper {
		background-color: var(--surface);
		width: 100%;
		height: 100vh;
		padding: 0 15px;
	}
    .systemoptions {
        margin-top: 100%;
    }
	@media only screen and (max-width: 750px) {
		.wrapper {
			width: 100%;
            max-width: 100vw;
            overflow: auto;
			height: 80px;
			display: flex;
			align-items: center;
            justify-content: flex-start;
		}
		.header {
			display: none;
		}
        .systemoptions{
            display: flex;
            margin-top: unset;
        }
	}
</style>
