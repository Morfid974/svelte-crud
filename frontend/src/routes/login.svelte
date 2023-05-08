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

<div class="form-signin w-100 m-auto">
    <form on:submit|preventDefault={submit}>
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
        <div class="form-floating">
            <input
                bind:value={login}
                type="text"
                class="form-control"
                id="floatingInput"
                placeholder="Login"
            />
            <label for="floatingInput">Login</label>
        </div>
        <div class="form-floating">
            <input
                bind:value={password}
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit"
            >Sign in</button
        >
        <div class="error-login">{errorMessage}</div>
    </form>
</div>

<style>
    .error-login {
        color: red;
    }
    .form-signin {
        max-width: 330px;
        padding: 15px;
    }

    .form-signin .form-floating:focus-within {
        z-index: 2;
    }

    .form-signin input[type="text"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }
</style>
