<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function logout() {
    axios.post('/logout')
        .then(response => {
            router.push({name: 'user.login'});
        })
}
</script>

<template>
    <div>
        <nav>
            <ul>
                <li>
                    <router-link :to="{name: 'get.index'}">Get</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'user.login'}">Login</router-link>
                </li>
                <li>
                    <router-link :to="{name: 'user.registration'}">Registration</router-link>
                </li>
                <li>
                    <a href="#" @click.prevent="logout">Logout</a>
                </li>
            </ul>
        </nav>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>
