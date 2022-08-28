<script>
	import { user } from '../../stores/user';

	import { onMount } from 'svelte';
	import API from '../../utils/API';
import { goto } from '$app/navigation';
	onMount(async () => {
		try{
		const res = await API.get('/user/me', {});

	}catch(err){
		console.log(err);
		goto('/login')
	}
		
	});
</script>

<slot />
