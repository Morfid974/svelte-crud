import type { SubMenu } from "./submenu"

export class Menu {
    _id: number
    sequence: number
    name: string
    action: string
    tablelist_id: number
    description: string
    submenus: SubMenu[]
}