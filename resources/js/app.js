import { createApp } from 'vue';
import App from './template/App.vue';
import router from './router';
import store from './store';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import * as components from 'vuetify/lib/components';
import * as directives from 'vuetify/lib/directives';
import '@mdi/font/css/materialdesignicons.css';

// Custom Plugins
import myPlugins from './myplugins';

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vuetify);
app.use(myPlugins);

app.mount('#app');
