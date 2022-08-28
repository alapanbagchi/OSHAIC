<script lang="ts">
	import Header2 from '$lib/Header/Header2.svelte';
	import RegistrationForm from '$lib/components/Registration/RegistrationForm.svelte';
</script>

<div class="wrapper">
	<header>
		<Header2 />
	</header>
	<div class="image">
		<img
			src="https://64.media.tumblr.com/45cf19582eed526714e336cd5e31eba1/tumblr_odqd8a5gAr1smqdb1o1_400.gifv"
			alt=""
		/>
	</div>
	<div class="form">
		<div class="form_header">
			<p class="heading">Sign Up</p>
			<p class="description">
				OSHAIC provides task management, custom forms and automated OSHA compliance lessons for your
				organization. Become a part of our growing community today.
			</p>
		</div>
		<RegistrationForm />
	</div>
</div>

<style>
	header {
		padding: 10px 0;
	}
	.wrapper {
		width: 100%;
		height: 100vh;
		display: flex;
	}
	.image {
		width: 40%;
		height: 100%;
		background-color: var(--onBackground);
	}
	.image img{
		object-fit: cover;
		width: 100%;

	}
	.form_header {
		width: 100%;
		margin-bottom: 50px;
	}
	.form_header .heading {
		font-size: 1.7rem;
		margin-bottom: 1rem;
		font-weight: 500;
		opacity: 0.9;
	}
	.form_header .description {
		opacity: 0.7;
		margin-bottom: 2rem;
		line-height: 30px;
		font-size: 0.9rem;
	}
	.image img {
		width: 100%;
		height: 100%;
	}
	.form {
		height: calc(100vh - 80px);
		margin-top: 110px;
		width: 70%;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
		padding: 0 40px;
	}
	@media screen and (max-width:800px){
		.image{
			display: none;
		}
		.form{
			width: 100%;
			padding: 20px;
			overflow: auto;
		}
	
	}

</style>
