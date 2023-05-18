<script lang="ts">
    import NavBar from "../components/NavBar.svelte";
    import { queryTables, tables } from "../store/store";
    import { onMount } from "svelte";

    onMount(async () => {
        await queryTables();
    });
</script>

<NavBar />
<div>
    {#each $tables as table}
        <div class="row">
            <div class="col-md-6"><span>{table.tablename}</span></div>
            <div class="col-md-6"><span>{table.is_technical}</span></div>
        </div>
    {/each}
</div>
