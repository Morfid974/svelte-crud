<script lang="ts">
    import type { Table } from "../models/table";
    import NavBar from "../components/NavBar.svelte";
    import { queryTables, tables } from "../store/store";
    import { onMount } from "svelte";
    import axios from "axios";
    import Fa from "svelte-fa";
    import {
        faCheck,
        faPlus,
        faTimes,
        faWrench,
    } from "@fortawesome/free-solid-svg-icons";
    import Transition from "svelte-transition";

    let addTableForm: Table = {
        tablename: "",
    };
    let editTableForm: Table = {
        tablename: "",
    };
    let addopen = false;
    let updateopen = false;

    onMount(async () => {
        await getTables();
    });

    async function getTables() {
        await queryTables();
    }
    function initForm() {
        addTableForm = {
            tablename: "",
        };
    }

    async function addTable() {
        let tableName: string = addTableForm.tablename;
        const payload = {
            tablename: tableName,
        };
        const path = "/backend/settings/tables";
        await axios
            .post(path, payload)
            .then(async () => {
                await getTables();
                let newTable: Table = await $tables.find(
                    (table) => table.tablename == tableName
                );
                editTable(newTable);
            })
            .catch((error) => {
                console.log(error);
                getTables();
            });

        addtoggle();
    }
    function updateTable() {
        //TODO
        console.log("on update table");
    }
    function addtoggle() {
        initForm();
        addopen = !addopen;
    }
    function updatetoggle() {
        initForm();
        updateopen = !updateopen;
    }
    function editTable(table) {
        updatetoggle();
        editTableForm = table;
    }
    function removeTable(table) {
        const path = `/backend/settings/tables/${table._id}/${table.tablename}`;
        axios
            .delete(path)
            .then(() => {
                getTables();
            })
            .catch((error) => {
                console.error(error);
                getTables();
            });
    }
</script>

<NavBar />
<div>
    <button
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        on:click={addtoggle}>Add Table</button
    >
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Name
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                >
                                    Is technical
                                </th>
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                />
                            </tr>
                        </thead>
                        <tbody>
                            {#each $tables as table}
                                <tr
                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    <td
                                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                        >{table.tablename}</td
                                    >
                                    <td
                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                    >
                                        {#if table.is_technical}
                                            <Fa
                                                icon={faCheck}
                                                class="text-green-800"
                                            />
                                        {/if}
                                        {#if !table.is_technical}
                                            <Fa
                                                icon={faTimes}
                                                class="text-red-800"
                                            />
                                        {/if}
                                    </td>
                                    <td
                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                    >
                                        {#if !table.is_technical}
                                            <button
                                                class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                                on:click={() =>
                                                    editTable(table)}
                                                >Update</button
                                            >
                                            <button
                                                class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                                on:click={() =>
                                                    removeTable(table)}
                                                >Delete</button
                                            >
                                        {/if}
                                    </td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    {#if addopen}
        <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <!--
          Background backdrop, show/hide based on modal state.
      
          Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <!--
              Modal panel, show/hide based on modal state.
      
              Entering: "ease-out duration-300"
                From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                To: "opacity-100 translate-y-0 sm:scale-100"
              Leaving: "ease-in duration-200"
                From: "opacity-100 translate-y-0 sm:scale-100"
                To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            -->
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                    >
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">
                                <div
                                    class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10"
                                >
                                    <svg
                                        class="h-6 w-6 text-green-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="1.5"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <!--    
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                                        />
                                        
                                    -->
                                        <Fa icon={faPlus} />
                                    </svg>
                                </div>
                                <div
                                    class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                                >
                                    <h3
                                        class="text-base font-semibold leading-6 text-gray-900"
                                        id="modal-title"
                                    >
                                        Add a new table
                                    </h3>
                                    <div class="mt-2">
                                        <!--<p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>-->
                                        <div>Name:</div>
                                        <input
                                            type="text"
                                            bind:value={addTableForm.tablename}
                                            placeholder="Table name"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                        >
                            <button
                                on:click={addTable}
                                type="button"
                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                >Create</button
                            >
                            <button
                                on:click={addtoggle}
                                type="button"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                >Cancel</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {/if}
    {#if updateopen}
        <div
            class="relative z-10"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <Transition
                show={updateopen}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div
                    class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                />

                <div class="fixed inset-0 z-10 overflow-y-auto">
                    <div
                        class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                    >
                        <Transition
                            show={updateopen}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0  translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100  translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100  translate-y-0 sm:scale-100"
                            leaveTo="opacity-0  translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                            >
                                <div
                                    class="bg-white dark:bg-gray-800 dark:border-gray-700 px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                                >
                                    <div class="sm:flex sm:items-start">
                                        <div
                                            class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 sm:mx-0 sm:h-10 sm:w-10"
                                        >
                                            <svg
                                                class="h-6 w-6 text-orange-600"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke-width="1.5"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <Fa icon={faWrench} />
                                            </svg>
                                        </div>
                                        <div
                                            class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                                        >
                                            <h3
                                                class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
                                                id="modal-title"
                                            >
                                                Update table
                                            </h3>
                                            <div class="grid gap-y-4">
                                                <div>
                                                    <label
                                                        for="edittitle"
                                                        class="block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"
                                                        >Name</label
                                                    >
                                                    <div class="relative">
                                                        <input
                                                            bind:value={editTableForm.tablename}
                                                            id="edittitle"
                                                            type="text"
                                                            class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                            placeholder="Table name"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                                >
                                    <button
                                        on:click={updateTable}
                                        type="button"
                                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                        >Update</button
                                    >
                                    <button
                                        on:click={updatetoggle}
                                        type="button"
                                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        >Cancel</button
                                    >
                                </div>
                            </div>
                        </Transition>
                    </div>
                </div>
            </Transition>
        </div>
    {/if}
</div>
