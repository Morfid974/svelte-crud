<script>
    import { link } from "svelte-spa-router";
    export let to = "";
    export let classNames = "";
    export let role = "";
    export let id = "";
</script>

<a href={to} {id} {role} class={classNames} use:link>
    <slot />
</a>
