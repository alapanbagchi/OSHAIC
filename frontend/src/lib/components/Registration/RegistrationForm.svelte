<script lang="ts">
	import Input from '$lib/components/shared/Input.svelte';
	import { extractErrors } from '../../../utils/yupErrors';
	import * as yup from 'yup';
	import API from '../../../utils/API';
	import { alert } from '../../../stores/Notifications';
	import { goto } from '$app/navigation';

	//Fields
	let fields: any = {
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirm_password: ''
	};

	//Schema
	const schema = yup.object().shape({
		first_name: yup.string().required('First name is required'),
		last_name: yup.string().required('Last name is required'),
		email: yup.string().email('Email is invalid').required('Email is required'),
		password: yup
			.string()
			.required('Password is required')
			.min(10, 'Password must be at least 10 characters'),

		confirm_password: yup
			.string()
			.required('Confirm password is required')
			.oneOf([yup.ref('password'), null], 'Passwords must match')
	});

	//Error Object
	let error: any = {};
	const validateEmail = async (email: string) => {
		try {
			const res = await API.post('/user/canRegister', { email: email });
			error.email = undefined;
			return true;
		} catch (err: any) {
			error.email = err.response.data.message;
			return false;
		}
	};
	//Validation
	const validation = async (field: string, value?: any) => {
		let result = {};
		if (value != undefined) fields[field] = value;
		try {
			result = await schema.validateAt(field, fields, { abortEarly: false });
			error[field] = undefined;
			return result;
		} catch (err) {
			error = extractErrors(err);
			return error;
		}
	};
	const postUser = async (data: any) => {
		try {
			const res = await API.post('/user/register', data);
			$alert.type = 'SUCCESS';
			$alert.title = 'Registration Successful';
			$alert.description =
				'You have been successfully registered to OSHAIC. Welcome to our family!';
		} catch (err: any) {
			$alert.type = 'ERROR';
			$alert.title = 'Registration Failed';
			$alert.description = err.response.data.message;
		}
	};

	const formSubmit = async (e: any) => {
		e.preventDefault();
		let result = {};
		try {
			result = await schema.validate(fields, { abortEarly: false });
			const res = await validateEmail(fields.email);
			if (res) {
				await postUser(result);
				setTimeout(() => {
					goto('/login');
				}, 3000);
			}
		} catch (err) {
			error = extractErrors(err);
			return error;
		}
	};
</script>

<form on:submit={formSubmit} action="">
	<div class="block">
		<Input
			on:input={(e) => {
				validation('first_name', e.detail.value);
			}}
			on:blur={() => {
				validation('first_name');
			}}
			title="First Name"
			placeholder="Enter your first name"
			type="text"
			error={error.first_name}
		/>
		<Input
			on:input={(e) => {
				validation('last_name', e.detail.value);
			}}
			on:blur={() => {
				validation('last_name');
			}}
			title="Last Name"
			placeholder="Enter your last name"
			type="text"
			error={error.last_name}
		/>
	</div>
	<div class="block">
		<Input
			on:input={(e) => {
				validation('email', e.detail.value);
			}}
			on:blur={(e) => {
				validateEmail(e.detail.value);
			}}
			title="Email"
			placeholder="Enter your email"
			type="email"
			error={error.email}
		/>
	</div>
	<div class="block">
		<Input
			on:input={(e) => {
				validation('password', e.detail.value);
			}}
			on:blur={() => {
				validation('password');
			}}
			title="Password"
			placeholder="Enter your password"
			type="password"
			error={error.password}
		/>
		<Input
			on:input={(e) => {
				validation('confirm_password', e.detail.value);
			}}
			on:blur={() => {
				validation('confirm_password');
			}}
			title="Confirm Password"
			placeholder="Confirm your password"
			type="password"
			error={error.confirm_password}
		/>
	</div>
	<div class="terms">
		<span
			>By clicking on sign up you agree to our Privacy Policy, Terms and Conditions and our use of
			cookies</span
		>
	</div>
	<button>Sign Up</button>
</form>

<style>
	.terms {
		opacity: 0.7;
		line-height: 30px;
	}

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
		gap: 40px;
	}
	.terms {
		font-size: 0.9rem;
		margin-bottom: 20px;
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
	@media screen and (max-width:500px){
		.block{
			flex-direction: column;
			gap: 0;
		}
		button{
			width: 100%;
			justify-content: center;
		}
	}
</style>
