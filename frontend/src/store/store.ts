import type { User } from "src/models/user";
import { writable, type Writable } from 'svelte/store'

// Writable
export const user: Writable<User> = writable(null)

// Mutation

export const updateUser = ({ userInformation }) => {
    user.set(userInformation as User)
}