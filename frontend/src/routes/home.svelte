<script lang="ts">
    import NavBar from "../components/NavBar.svelte";
    import { user } from "../store/store";
</script>

<NavBar />
{#if $user}
    <div>
        <h1 class="text-lg">Hi {$user.name}</h1>
    </div>
{/if}
