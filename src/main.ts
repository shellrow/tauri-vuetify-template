import { createApp } from "vue";
import "./styles.css";

// Vuetify
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
        sets: {
            mdi,
        },
    },
});
import router from './router';
import App from "./App.vue";

createApp(App).use(router).use(vuetify).mount("#app");
