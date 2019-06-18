import './bootstrap';
import Vue from 'vue';

// Vue Routing File
import Routes from './routes.js';

// Component File
import App from './views/App';

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});

export default app;
