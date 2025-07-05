import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/main.scss';
import 'animate.css';
import router from './router';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPhone, faBolt, faUserTie, faTools, faUsers } from '@fortawesome/free-solid-svg-icons';
library.add(faPhone, faBolt, faUserTie, faTools, faUsers);
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// ✅ Notyf
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notyf = new Notyf({
    duration: 3000,
    position: {
        x: 'center',
        y: 'top'
    }
});

const app = createApp(App);
app.use(router);
app.component('font-awesome-icon', FontAwesomeIcon);

// ✅ Глобально добавляем notyf
app.config.globalProperties.$notyf = notyf;

app.mount('#app');
