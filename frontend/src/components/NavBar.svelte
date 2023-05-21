<script lang="ts">
    import NavLink from "../components/NavLink.svelte";
    import Fa from "svelte-fa";
    import { faUser, faAngleDown } from "@fortawesome/free-solid-svg-icons";
    import { user } from "../store/store";
    import Transition from "svelte-transition";
    import { location } from "svelte-spa-router";
    import { onMount } from "svelte";
    import { queryTables, tables } from "../store/store";
    let showUserMenu = false;
    let showSettings = false;
    onMount(async () => {
        await queryTables();
    });
</script>

{#if $user}
    <nav class="bg-gray-800">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex h-16 items-center justify-between">
                <div class="flex items-center">
                    <div class="hidden md:block">
                        <div class="ml-10 flex items-baseline space-x-4">
                            <NavLink
                                classNames="{$location == '/'
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium"
                                to="/">Home</NavLink
                            >
                            <!-- TODO: Temp, change this when menu is op -->
                            {#each $tables.filter((table) => !table.is_technical) as table}
                                <NavLink
                                    classNames="{$location ==
                                    `/generic/${table.tablename}`
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium"
                                    to="/generic/{table.tablename}"
                                    >{table.tablename}</NavLink
                                >
                            {/each}
                            <button
                                on:click={() => (showSettings = !showSettings)}
                                class="{showSettings ||
                                $location.includes('/settings/')
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium"
                            >
                                Settings<Fa
                                    class="inline px-2"
                                    icon={faAngleDown}
                                />
                            </button>
                            <Transition
                                show={showSettings}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <div
                                    class="relative right-10 top-10 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabindex="-1"
                                >
                                    <NavLink
                                        classNames="{$location ==
                                        '/settings/tables'
                                            ? 'bg-gray-700 text-white'
                                            : 'text-gray-700'} block rounded-md px-4 py-2 mx-1 text-sm hover:bg-gray-700 hover:text-white"
                                        role="menuitem"
                                        id="user-menu-item-0"
                                        to="/settings/tables"
                                        >Table editor
                                    </NavLink>
                                    <NavLink
                                        classNames="{$location ==
                                        '/settings/menu'
                                            ? 'bg-gray-700 text-white'
                                            : 'text-gray-700'} block rounded-md px-4 py-2 mx-1 text-sm hover:bg-gray-700 hover:text-white"
                                        role="menuitem"
                                        id="user-menu-item-0"
                                        to="/settings/menu"
                                        >Menu
                                    </NavLink>
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block">
                    <div class="ml-4 flex items-center md:ml-6">
                        <!-- Profile dropdown -->
                        <div class="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    class="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded="false"
                                    aria-haspopup="true"
                                    on:click={() =>
                                        (showUserMenu = !showUserMenu)}
                                >
                                    <span class="sr-only">Open user menu</span>
                                    <Fa icon={faUser} />
                                </button>
                            </div>
                            <Transition
                                show={showUserMenu}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <div
                                    class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabindex="-1"
                                >
                                    <NavLink
                                        classNames="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        id="user-menu-item-0"
                                        to="/logout">Log out</NavLink
                                    >
                                </div>
                            </Transition>
                        </div>
                    </div>
                </div>
                <div class="-mr-2 flex md:hidden">
                    <!-- Mobile menu button -->
                    <button
                        type="button"
                        class="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span class="sr-only">Open main menu</span>
                        <!-- Menu open: "hidden", Menu closed: "block" -->
                        <svg
                            class="block h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                        <!-- Menu open: "block", Menu closed: "hidden" -->
                        <svg
                            class="hidden h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu, show/hide based on menu state. -->
        <div class="md:hidden" id="mobile-menu">
            <div class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <NavLink
                    classNames="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    to="/">Home</NavLink
                >
                <NavLink
                    classNames="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                    to="/books">Books</NavLink
                >
            </div>
            <div class="border-t border-gray-700 pb-3 pt-4">
                <div class="flex items-center px-5">
                    <div class="flex-shrink-0">
                        <Fa icon={faUser} />
                    </div>
                    <div class="ml-3">
                        <div
                            class="text-base font-medium leading-none text-white"
                        >
                            {$user.name}
                        </div>
                        <div
                            class="text-sm font-medium leading-none text-gray-400"
                        >
                            {$user.login}
                        </div>
                    </div>
                    <button
                        type="button"
                        class="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span class="sr-only">View notifications</span>
                        <svg
                            class="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                            />
                        </svg>
                    </button>
                </div>
                <div class="mt-3 space-y-1 px-2">
                    <NavLink
                        classNames="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        role="menuitem"
                        to="/logout">Log out</NavLink
                    >
                </div>
            </div>
        </div>
    </nav>
{/if}

<style></style>
