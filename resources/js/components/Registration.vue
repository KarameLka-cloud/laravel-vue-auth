<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

let name = '';
let email = '';
let password = '';
let password_confirmation = '';

function register() {
    axios.get('/sanctum/csrf-cookie')
        .then(response => {
            axios.post('/register', {
                name: name,
                email: email,
                password: password,
                password_confirmation: password_confirmation
            })
                // .then(response => {
                //     console.log(response);
                //     router.push({name: 'get.index'});
                // })
                .then(response => {
                    axios.post('/logout')
                        .then(response => {
                            router.push({name: 'user.login'});
                        })
                })
        })
}
</script>

<template>
    <div>
        <input type="text" placeholder="name" v-model="name">
        <br>
        <input type="email" placeholder="email" v-model="email">
        <br>
        <input type="password" placeholder="password" v-model="password">
        <br>
        <input type="password" placeholder="password_confirmation" v-model="password_confirmation">
        <br>
        <input type="submit" value="registration" @click.prevent="register"/>
    </div>
</template>

<style scoped>

</style>
