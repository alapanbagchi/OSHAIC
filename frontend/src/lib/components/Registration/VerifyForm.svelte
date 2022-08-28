<script lang="ts">
	import Input from '$lib/components/shared/Input.svelte';
	import { extractErrors } from '../../../utils/yupErrors';
	import * as yup from 'yup';
	import API from '../../../utils/API';
	import { alert } from '../../../stores/Notifications';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { goto } from '$app/navigation';

	//Fields
	let fields: any = {
		value1: '',
		value2: '',
		value3: '',
		value4: '',
		value5: '',
		value6: ''
	};
	let input: NodeListOf<HTMLInputElement>;
	onMount(() => {
		input = document.querySelectorAll('input');
	});
	//Schema
	const schema = yup.object().shape({
		value1: yup.number().required(),
		value2: yup.number().required(),
		value3: yup.number().required(),
		value4: yup.number().required(),
		value5: yup.number().required(),
		value6: yup.number().required()
	});
	const resendOTP = () => {};
	let errors: any = {
		value1: '',
		value2: '',
		value3: '',
		value4: '',
		value5: '',
		value6: ''
	};
	let original = 10 * 60;
	let timer = tweened(original);
	setInterval(() => {
		if ($timer > 0) $timer--;
	}, 1000);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	//Calculate seconds with 2 decimals ex: 05:00. 05:09
	$: seconds = Math.floor($timer % 60)
		.toString()
		.padStart(2, '0');
	$: console.log(minutes, seconds);
	const validateInput = async (e: any, field: any) => {
		e.target.select();
		if (e.target.value !== '') {
			fields[field] = e.target.value.split('')[e.target.value.length - 1];
			input.forEach((item: any, i) => {
				if (item.name === field) {
					if (i == input.length - 1) return;
					input[i + 1].focus();
				}
			});
		}
		if (e.inputType == 'deleteContentBackward') {
			input.forEach((item: any, i) => {
				if (item.name === field) {
					if (i == 0) return;
					input[i - 1].focus();
				}
			});
		}
	};
	const sendOTP = async () => {
		try {
			const res = await API.post('/user/sendOTP', {});
			$alert.title = 'OTP has been sent';
			($alert.description = 'Please check your email for a new OTP'), ($alert.type = 'SUCCESS');
			timer = tweened(10 * 60)
		} catch (err) {
			$alert.title = 'Something went wrong';
			($alert.description = 'Oops seems like something went wrong, please try again'),
				($alert.type = 'ERROR');
		}
	};
	const formSubmit = async (e: any) => {
		e.preventDefault();
		try {
			await schema.validate(fields, { abortEarly: false });
			const { value1, value2, value3, value4, value5, value6 } = fields;
			const otp = value1 + value2 + value3 + value4 + value5 + value6;
			const { data } = await API.post('/user/verifyUser', { otp });
			goto('/app');
		} catch (err) {
			errors = extractErrors(err);
		}
	};
</script>

<form on:submit={formSubmit} action="">
	<div class="block">
		<input
			class={errors.value1 != '' ? 'error' : ''}
			type="number"
			name="value1"
			bind:value={fields.value1}
			on:input={(e) => validateInput(e, 'value1')}
		/>
		<input
			class={errors.value2 != '' ? 'error' : ''}
			name="value2"
			bind:value={fields.value2}
			on:input={(e) => validateInput(e, 'value2')}
			type="number"
		/>
		<input
			class={errors.value3 != '' ? 'error' : ''}
			name="value3"
			bind:value={fields.value3}
			on:input={(e) => validateInput(e, 'value3')}
			type="number"
		/>
		<input
			class={errors.value4 != '' ? 'error' : ''}
			name="value4"
			bind:value={fields.value4}
			on:input={(e) => validateInput(e, 'value4')}
			type="number"
		/>
		<input
			class={errors.value5 != '' ? 'error' : ''}
			name="value5"
			bind:value={fields.value5}
			on:input={(e) => validateInput(e, 'value5')}
			type="number"
		/>
		<input
			class={errors.value6 != '' ? 'error' : ''}
			name="value6"
			bind:value={fields.value6}
			on:input={(e) => validateInput(e, 'value6')}
			type="number"
		/>
	</div>
	<div class="controls">
		<div class="timer">
			{#if minutes > 0 || seconds != '00'}
				{minutes}:{seconds}
			{:else}
				<p class="otp" on:click={sendOTP}>Resend OTP</p>
			{/if}
		</div>
	</div>
	<button>Verify Account</button>
</form>

<style>
	form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	.block {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-bottom: 1rem;
	}
	.otp{
		cursor: pointer;
	}
	input {
		padding: 20px 10px;
		max-width: 70px;
		height: 70px;
		outline: none;
		background-color: var(--surface);
		border: 1px solid transparent;
		color: var(--text);
		border-radius: 7px;
		text-align: center;
		font-size: 1.2rem;
	}
	input:active,
	input:focus-visible {
		border: 1px solid var(--primary);
		transition: all 0.2s ease-in-out;
	}
	.error {
		border-color: var(--error);
	}
	button {
		display: flex;
		width: fit-content;
		gap: 10px;
		white-space: nowrap;
		background-color: var(--onBackground);
		border: 1px solid var(--onSurface);
		font-weight: 500;
		align-items: center;
		padding: 15px 50px;
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
	button:active {
		background-color: var(--primaryActive);
		transition: all 0.1s ease-in-out;
		transform: scale(0.97);
	}
	button {
		margin-top: 2rem;
	}
	.controls {
		display: flex;
	}
	.timer {
		width: fit-content;
		margin-left: auto;
	}
	@media screen and (max-width: 500px) {
		.block {
			flex-direction: column;
			gap: 0;
		}
		button {
			width: 100%;
			justify-content: center;
		}
	}
</style>
