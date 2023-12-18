import "@/assets/main.scss";
import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "@/config/firebase.js";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueFire, {
	firebaseApp,
	modules: [VueFireAuth()],
});
app.mount("#app");
