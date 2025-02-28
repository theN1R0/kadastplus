import { createApp } from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './css/main.scss';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faEnvelope,
    faPhone,
    faChevronLeft,
    faChevronRight,
    faSearch,
    faFileAlt,
    faCogs,
    faClock,
    faMapMarkerAlt,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faEnvelope, faPhone, faChevronLeft, faChevronRight, faSearch, faFileAlt, faCogs, faCheck, faClock, faMapMarkerAlt);

const app = createApp(App);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
