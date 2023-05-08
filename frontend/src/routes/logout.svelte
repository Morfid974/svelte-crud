<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";
    import { push } from "svelte-spa-router";

    onMount(() => {
        const path = "/backend/login/logout";
        axios
            .post(path, { withCredentials: true })
            .then(() => {
                push("/login");
            })
            .catch(() => {
                push("/login");
            });
    });
</script>
