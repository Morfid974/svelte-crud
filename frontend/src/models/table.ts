import type { Field } from "./field"

export class Table {
    _id?: number
    originalname?: string
    tablename: string
    is_technical?: boolean
    fields: Field[]
}