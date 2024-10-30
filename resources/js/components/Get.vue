<script setup>
import {onMounted, ref} from "vue";

let data = ref(null);

function getData() {
    axios.get('/api/get')
        .then((response) => {
            data.value = response.data;
        })
}
onMounted(() => {
    getData()
})
</script>

<template>
    <div>
        Get
        {{ data }}
    </div>
</template>

<style scoped>

</style>
