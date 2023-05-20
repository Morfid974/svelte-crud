<script lang="ts">
    import type { Table } from "../models/table";
    import NavBar from "../components/NavBar.svelte";
    import {
        queryTables,
        queryDataTypes,
        tables,
        datatypes,
        addTableField,
        removeTableField,
    } from "../store/store";
    import { onMount } from "svelte";
    import { fly, fade } from "svelte/transition";
    import axios from "axios";
    import Fa from "svelte-fa";
    import {
        faCheck,
        faPlus,
        faTimes,
        faWrench,
    } from "@fortawesome/free-solid-svg-icons";
    import type { Field } from "src/models/field";

    let addTableForm: Table = {
        tablename: "",
        fields: [],
    };
    let editTableForm: Table = null;
    let addopen = false;
    let updateopen = false;
    let newField: Field = {
        _id: null,
        name: "",
        type: null,
        define_length: null,
        default_length: null,
        max_length: null,
        define_precision: null,
        default_precision: null,
        max_precision: null,
        description: null,
    };

    onMount(async () => {
        await getTables();
        await queryDataTypes();
    });

    function onChangeFieldType(event) {
        newField.type = parseInt(event.target.value);
    }

    async function getTables() {
        await queryTables();
    }
    function deleteField({ field }) {
        removeTableField({ table: editTableForm, field });
        editTableForm = $tables.find(
            (table) => table._id === editTableForm._id
        );
    }
    function initForm() {
        addTableForm = {
            tablename: "",
            fields: [],
        };
    }

    function initField() {
        newField = {
            _id: null,
            name: "",
            type: null,
            define_length: null,
            default_length: null,
            max_length: null,
            define_precision: null,
            default_precision: null,
            max_precision: null,
            description: null,
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
    async function updateTable() {
        const payload = {
            tablename: editTableForm.tablename,
            originalname: editTableForm.originalname,
        };
        const path = `/backend/settings/tables/${editTableForm._id}`;
        await axios
            .put(path, payload)
            .then(() => {
                getTables();
            })
            .catch((error) => {
                console.log(error);
                getTables();
            });

        updatetoggle();
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
    async function addField() {
        await addTableField({ table: editTableForm, field: newField });
        editTableForm = $tables.find(
            (table) => table._id === editTableForm._id
        );
        initField();
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
                                        Add a new table
                                    </h3>
                                    <div class="mt-2">
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
                                        <div class="relative">
                                            <label
                                                for="edittitle"
                                                class="block text-sm font-bold ml-1 mb-2 text-gray-900 dark:text-white"
                                                >Fields</label
                                            >
                                            <div
                                                class="border-2 border-gray-200 rounded-md shadow-sm"
                                            >
                                                <table>
                                                    <thead
                                                        class="bg-gray-200 border-b"
                                                    >
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
                                                                Type
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                            >
                                                                Description
                                                            </th>
                                                            <th
                                                                scope="col"
                                                                class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                                                                >Action</th
                                                            ></tr
                                                        >
                                                    </thead>
                                                    <tbody class="bg-gray-200">
                                                        {#each editTableForm.fields as field}
                                                            <tr>
                                                                <td
                                                                    class="bg-gray-200"
                                                                    ><span
                                                                        class="px-2 border-gray-200"
                                                                        >{field.name}</span
                                                                    ></td
                                                                >
                                                                <td
                                                                    class="bg-gray-200"
                                                                >
                                                                    <span
                                                                        class="px-2 border-gray-200"
                                                                        >{$datatypes.find(
                                                                            (
                                                                                datatype
                                                                            ) =>
                                                                                datatype._id ==
                                                                                field.type
                                                                        )
                                                                            .type}</span
                                                                    >
                                                                </td>
                                                                <td
                                                                    class="bg-gray-200"
                                                                    ><span
                                                                        class="px-2 border-gray-200"
                                                                        >{field.description}</span
                                                                    ></td
                                                                >
                                                                <td
                                                                    class="text-center bg-gray-200"
                                                                    ><button
                                                                        on:click={() =>
                                                                            deleteField(
                                                                                {
                                                                                    field,
                                                                                }
                                                                            )}
                                                                        ><Fa
                                                                            class="text-red-800"
                                                                            icon={faTimes}
                                                                        /></button
                                                                    ></td
                                                                >
                                                            </tr>
                                                        {/each}
                                                        <tr>
                                                            <td
                                                                class="bg-gray-200"
                                                                ><input
                                                                    class="px-2 border-gray-200"
                                                                    type="text"
                                                                    bind:value={newField.name}
                                                                    placeholder="Field name"
                                                                /></td
                                                            >
                                                            <td
                                                                class="bg-gray-200"
                                                                ><select
                                                                    class="px-2 border-gray-200"
                                                                    bind:value={newField.type}
                                                                    on:change={(
                                                                        $event
                                                                    ) =>
                                                                        onChangeFieldType(
                                                                            $event
                                                                        )}
                                                                >
                                                                    {#each $datatypes as datatype}
                                                                        <option
                                                                            value={datatype._id}
                                                                        >
                                                                            {datatype.type}
                                                                        </option>
                                                                    {/each}
                                                                </select></td
                                                            >
                                                            <td
                                                                class="bg-gray-200"
                                                                ><input
                                                                    class="px-2 border-gray-200"
                                                                    type="text"
                                                                    bind:value={newField.description}
                                                                    placeholder="Field description"
                                                                /></td
                                                            >
                                                            <td
                                                                class="text-center bg-gray-200"
                                                                ><button
                                                                    on:click={addField}
                                                                    ><Fa
                                                                        class="text-green-800"
                                                                        icon={faPlus}
                                                                    /></button
                                                                ></td
                                                            >
                                                        </tr></tbody
                                                    >
                                                </table>
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
                </div>
            </div>
        </div>
    {/if}
</div>
