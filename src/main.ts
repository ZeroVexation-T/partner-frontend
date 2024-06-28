import { createApp } from 'vue'
// todo
import App from './App.vue'
import {Button, NavBar, Icon, Tabbar, TabbarItem} from "vant";

const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);

createApp(App).mount('#app')


