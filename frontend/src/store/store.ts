import type { Table } from "../models/table";
import type { User } from "../models/user";
import { writable, type Writable } from 'svelte/store'
import axios from "axios";
import type { Book } from "src/models/book";
import type { DataType } from "src/models/datatype";

//**  Writable  **/
export const user: Writable<User> = writable(null)
export const tables: Writable<Table[]> = writable([])
export const datatypes: Writable<DataType[]> = writable([])
export const books: Writable<Book[]> = writable([])

//**  Query  **//
export const queryTables = async () => {
    await axios.get("/backend/settings/tables", { withCredentials: true }).then((res) => tables.set(res.data as Table[]));
}

export const queryDataTypes = async () => {
    await axios.get("/backend/settings/datatypes", { withCredentials: true }).then((res) => datatypes.set(res.data as DataType[]));
}

export const queryBooks = async () => {
    axios.get("/backend/books").then((res) => {
        books.set(res.data as Book[]);
    });
}

//**  Mutation  **//
export const updateUser = ({ userInformation }) => {
    user.set(userInformation as User)
}

export const addTableField = ({ table, field }) => {
    tables.update(tables => {
        let tIdx = tables.findIndex((t) => t._id === table._id)
        if (tIdx === -1) return tables
        table.fields.push(field)
        tables[tIdx] = table
        return tables
    })
}

export const removeTableField = async ({ table, field }) => {
    tables.update(tables => {
        let tIdx = tables.findIndex((t) => t._id === table._id);
        if (tIdx === -1) { return tables }
        let fIdx = tables[tIdx].fields
            .findIndex((fielddata) => fielddata == field)
        tables[tIdx].fields
            .splice(fIdx, 1)
        if (field._id !== null) {
            tables[tIdx].removedFields.push(field)
        }
        return tables
    })
}