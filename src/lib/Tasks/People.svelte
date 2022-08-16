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
		grid-row-gap: 30px;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		overflow: scroll;
		padding-top: 20px;
    }
</style>