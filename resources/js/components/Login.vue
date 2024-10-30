<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

let email = null;
let password = null;

function login() {
    axios.get('/sanctum/csrf-cookie')
        .then(response => {
            axios.post('/login', {
                email: email,
                password: password
            })
                .then(response => {
                    console.log(response.config.data);
                    router.push({name: 'get.index'})
                    // localStorage.setItem('x_xsrf_token', response.data.token);

                })
                .catch(error => {
                    console.log(error.response);
                })
        })
}
</script>

<template>
    <div>
        <input type="email" placeholder="email" v-model="email">
        <br>
        <input type="password" placeholder="password" v-model="password">
        <br>
        <input type="submit" value="login" @click.prevent="login"/>
    </div>
</template>

<style scoped>

</style>
