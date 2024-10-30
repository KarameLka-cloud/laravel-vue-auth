import './bootstrap';
import { createApp } from 'vue';
import router from './router';
import Index from './components/Index.vue';

const app = createApp({});

app.component('index', Index);

app.use(router);
app.mount('#app');
