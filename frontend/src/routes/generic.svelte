<script lang="ts">
    import axios from "axios";
    import { fly, fade } from "svelte/transition";
    import NavBar from "../components/NavBar.svelte";
    import Fa from "svelte-fa";
    import { faWrench, faPlus } from "@fortawesome/free-solid-svg-icons";
    import { DateInput } from "date-picker-svelte";
    import {
        queryGenericData,
        genericData,
        queryTables,
        tables,
        queryGenericFields,
        genericFields,
        datatypes,
        queryDataTypes,
    } from "../store/store";
    import { location } from "svelte-spa-router";
    import type { Table } from "src/models/table";

    let addElementForm = new Map();
    for (let field of $genericFields) {
        addElementForm.set(field.name, "");
    }

    let editForm = new Map();
    for (let field of $genericFields) {
        editForm.set(field.name, "");
    }

    async function getGeneric(table: Table) {
        await queryGenericData({ tableName: table.tablename });
        await queryGenericFields({ tableName: table.tablename });
        console.log($genericFields);
    }

    function removeElement(elementID) {
        const path = `/backend/generic/${$location.split("/")[2]}/${elementID}`;
        axios
            .delete(path)
            .then(() => {
                getCustomTableData($location);
            })
            .catch((error) => {
                console.error(error);
                getCustomTableData($location);
            });
    }

    function initForm() {
        addElementForm = new Map();
        for (let field of $genericFields) {
            addElementForm.set(field.name, "");
        }

        editForm = new Map();
        for (let field of $genericFields) {
            editForm.set(field.name, "");
        }
    }

    function addElement() {
        const path = `/backend/generic/${$location.split("/")[2]}`;
        axios
            .post(path, addElementForm)
            .then(() => {
                getCustomTableData($location);
            })
            .catch((error) => {
                console.log(error);
                getCustomTableData($location);
            });
        addtoggle();
    }

    function editElement(element) {
        updatetoggle();
        editForm = element;
    }

    function updateElement() {
        const path = `/backend/generic/${$location.split("/")[2]}/${
            editForm["_id"]
        }`;
        axios
            .put(path, editForm)
            .then(() => {
                getCustomTableData($location);
            })
            .catch((error) => {
                console.error(error);
                getCustomTableData($location);
            });
        updatetoggle();
    }

    $: getCustomTableData($location);
    async function getCustomTableData(location) {
        await queryTables();
        await queryDataTypes();
        let table: Table = $tables.find(
            (table) => table.tablename === location.split("/")[2]
        );
        if (table) {
            await getGeneric(table);
        }
    }

    let addopen = false;

    function addtoggle() {
        console.log("on add toggle");
        initForm();
        addopen = !addopen;
    }

    let updateopen = false;

    function updatetoggle() {
        initForm();
        updateopen = !updateopen;
    }
</script>

<NavBar />
<div>
    <button
        class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
        on:click={addtoggle}>Add {$location.split("/")[2]}</button
    >
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                    <table class="min-w-full">
                        <thead class="bg-gray-200 border-b">
                            <tr>
                                {#each $genericFields as genericField}
                                    <th
                                        scope="col"
                                        class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                    >
                                        {genericField.name}
                                    </th>
                                {/each}
                                <th
                                    scope="col"
                                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                />
                            </tr>
                        </thead>
                        <tbody>
                            {#each $genericData as element}
                                <tr
                                    class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                                >
                                    {#each $genericFields as genericField}
                                        <td
                                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                                            >{element[genericField.name]}</td
                                        >
                                    {/each}
                                    <td
                                        class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap"
                                    >
                                        <button
                                            class="border border-yellow-500 bg-yellow-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-yellow-600 focus:outline-none focus:shadow-outline"
                                            on:click={() => {
                                                editElement(element);
                                            }}>Update</button
                                        >
                                        <button
                                            class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
                                            on:click={() => {
                                                removeElement(element);
                                            }}>Delete</button
                                        >
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
        <div class="relative z-10">
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"
                transition:fade
            />

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                        transition:fly
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
                                        Add a new {$location.split("/")[2]}
                                    </h3>
                                    <div class="mt-2">
                                        {#each $genericFields as genericField}
                                            <div>{genericField.name}:</div>
                                            {#if $datatypes.find((datatype) => datatype._id == genericField.datatype_id).type == "integer"}
                                                <input
                                                    type="number"
                                                    step="1"
                                                    bind:value={addElementForm[
                                                        genericField.name
                                                    ]}
                                                    placeholder={genericField.description}
                                                />
                                            {:else if $datatypes.find((datatype) => datatype._id == genericField.datatype_id).type == "numeric"}
                                                <input
                                                    type="number"
                                                    step={`0.${"0".repeat(
                                                        genericField.precision
                                                    )}1`}
                                                    bind:value={addElementForm[
                                                        genericField.name
                                                    ]}
                                                    placeholder={genericField.description}
                                                />
                                            {:else if ["timestamp", "date"].includes($datatypes.find((datatype) => datatype._id == genericField.datatype_id).type)}
                                                <!--FIXME: z-index avoid whole calendar -->
                                                <DateInput
                                                    bind:value={addElementForm[
                                                        genericField.name
                                                    ]}
                                                    closeOnSelection={true}
                                                />
                                            {:else if $datatypes.find((datatype) => datatype._id == genericField.datatype_id).type == "boolean"}
                                                <input
                                                    type="checkbox"
                                                    bind:checked={addElementForm[
                                                        genericField.name
                                                    ]}
                                                />
                                            {:else}
                                                <input
                                                    type="text"
                                                    bind:value={addElementForm[
                                                        genericField.name
                                                    ]}
                                                    placeholder={genericField.description}
                                                />
                                            {/if}
                                        {/each}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                        >
                            <button
                                on:click={addElement}
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
        <div class="relative z-10">
            <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-150"
                transition:fade
            />

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="min-w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
                >
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full md:w-auto lg:w-auto"
                        transition:fly
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
                                        Update {$location.split("/")[2]}
                                    </h3>
                                    {#each $genericFields as genericField}
                                        <div class="grid gap-y-4">
                                            <div>
                                                <label
                                                    for="edittitle"
                                                    class="block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"
                                                    >{genericField.name}</label
                                                >
                                                <div class="relative">
                                                    <input
                                                        bind:value={editForm[
                                                            genericField.name
                                                        ]}
                                                        id="edittitle"
                                                        type="text"
                                                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                                        placeholder={genericField.description}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <div
                            class="bg-gray-50 dark:bg-gray-800 dark:border-gray-700 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                        >
                            <button
                                on:click={updateElement}
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
                </div>
            </div>
        </div>
    {/if}
</div>
