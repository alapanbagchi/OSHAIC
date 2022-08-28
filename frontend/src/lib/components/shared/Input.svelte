<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let title: string;
	export let placeholder: string;
	export let type: string;
	export let error: any = undefined;
	$: isFocused = false;
	const dispatch = createEventDispatcher();
	$: change = (e: any, action: 'input' | 'blur' | 'focus') => {
		if (action === 'input') {
			console.log(error);
			dispatch('input', {
				name: e.target.name,
				value: e.target.value
			});
		} else if (action === 'blur') {
			dispatch('blur', {
				name: e.target.name,
				value: e.target.value
			});
		} else if (action === 'focus') {
			dispatch('focus', {
				name: e.target.name,
				value: e.target.value
			});
		}
	};
	$: showError = error === undefined ? false : true;
</script>

<label for="">
	<p>{title}</p>
	<div class="container {showError ? 'error' : ''} {isFocused ? 'active' : ''}">
		<input
			on:input={(e) => change(e, 'input')}
			on:focus={(e) => {
				change(e, 'focus');
				return (isFocused = true);
			}}
			on:blur={(e) => {
				change(e, 'blur');
				return (isFocused = false);
			}}
			name={title.toLowerCase().replace(' ', '_')}
			{type}
			{placeholder}
		/>
		<svg
			width="22"
			height="22"
			viewBox="0 0 24 24"
			fill="var(--error)"
			xmlns="http://www.w3.org/2000/svg"
			class={showError ? '' : 'hide'}
		>
			<path
				d="M12 8V12M12 16H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
				stroke="var(--background)"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	</div>
	<p class={showError ? 'error_message' : 'hidevisibility'}>
		{error ? error : undefined}
	</p>
</label>

<style>
	input {
		width: 100%;
		outline: none;
		border: none;
		background-color: var(--surface);
		color: white;
		border: 1px solid transparent;
	}
	input:-webkit-autofill {
		border: none;
		box-shadow: 0 0 0 1000px var(--surface) inset !important;
		-webkit-text-fill-color: white !important;
		color: white;
	}
	.hide {
		display: none;
	}
	.hidevisibility {
		visibility: hidden;
	}
	.container {
		display: flex;
		align-items: center;
		background-color: var(--surface);
		padding: 12px 15px;
		border-radius: 7px;
		border: 1px solid transparent;
		transition: all 0.2s ease-in-out;
	}
	.active {
		border: 1px solid var(--primary);
		transition: all 0.2s ease-in-out;
	}
	.error {
		border: 1px solid var(--error);
	}
	.error_message {
		color: var(--error);
		font-size: 0.9rem;
		margin-top: 10px;
		height: 0.9rem;
	}
	label {
		width: 100%;
	}
	label p {
		font-size: 0.9rem;
		margin-bottom: 10px;
		opacity: 0.9;
	}
</style>
