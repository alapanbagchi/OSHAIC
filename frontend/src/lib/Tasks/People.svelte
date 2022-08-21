<script>
import PeopleCard from "./PeopleCard.svelte";
</script>
<div class="wrapper">
    <PeopleCard />
    <PeopleCard />
    <PeopleCard />
    <PeopleCard />
    <PeopleCard />
    <PeopleCard />
    <PeopleCard />
</div>

<style>
    .wrapper{
        width: 100%;
		display: grid;
		grid-column-gap: 30px;
		grid-row-gap: 5px;
		grid-template-columns: 1fr;
		padding-top: 20px;
    }
</style>