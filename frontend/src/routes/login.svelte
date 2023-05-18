<script>
    import axios from "axios";
    import { push } from "svelte-spa-router";
    import { updateUser } from "../store/store";

    let password = "";
    let login = "";
    let errorMessage = "";
    function submit() {
        errorMessage = "";
        const payload = {
            login: login,
            password: password,
        };
        const path = "/backend/login";
        axios
            .post(path, payload, { withCredentials: true })
            .then((response) => {
                updateUser({ userInformation: response.data });
                push("/");
            })
            .catch((error) => {
                errorMessage = error.response.data.error;
            });
    }
</script>

<div id="content" class="w-full max-w-md mx-auto p-6">
    <div
        class="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700"
    >
        <div class="p-4 sm:p-7">
            <div class="text-center">
                <h1
                    class="block text-2xl font-bold text-gray-800 dark:text-white"
                >
                    Please sign in
                </h1>
            </div>

            <div class="mt-5">
                <form on:submit|preventDefault={submit}>
                    <div class="form-floating">
                        <div class="grid gap-y-4">
                            <div>
                                <label
                                    for="email"
                                    class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                                    >Login</label
                                >
                                <div class="relative">
                                    <input
                                        bind:value={login}
                                        type="text"
                                        class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                        placeholder="Login"
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label
                                for="email"
                                class="block text-sm font-bold ml-1 mb-2 dark:text-white"
                                >Login</label
                            >
                            <div class="relative">
                                <input
                                    bind:value={password}
                                    type="password"
                                    class="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div class="text-center py-5">
                            <button
                                class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                                type="submit">Sign in</button
                            >
                        </div>
                        <div id="login-error" class="error-login">
                            {errorMessage}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<style>
    .error-login {
        color: red;
    }
</style>
