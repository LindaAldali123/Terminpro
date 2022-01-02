import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import store from './store';
import './scss/main.scss';
import 'normalize.css';
import 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import 'font-awesome/package.json';
import 'font-awesome/css/font-awesome.css';
import 'font-awesome/css/font-awesome.min.css';
import 'popper.js';
import 'jquery';
import VueI18n from 'vue-i18n';
import './css/header.css';
import './css/style.css';
import './css/upd.css';
import './css/booking.css';
import './css/slider.css';
import './css/plan.css';
import './css/dash.css';
import './css/addsh.css';
import './css/category.css';
import './css/Contact.css';
import './css/venues.css';
import './css/signup.css';
import './css/pay.css';
import './css/account.css';
import './css/mobil.css';
import './css/staffs.css';
import './css/user.css';
import './css/services.css';
import './css/nearvenus.css';
import './css/venusdetail.css';
import './css/addservic.css';
import './css/mesa.css';
import './css/login.css';
import './css/categorydetail.css';
import './css/footer.css';
import 'mixitup';
import 'mixitup/dist/mixitup';
import 'vue-owl-carousel';
import 'vue-owl-carousel2';
import 'axios';
import 'axios/dist/axios';
import 'axios/lib/core/Axios';
import 'axios/lib/axios';
import 'vue-axios';
import 'vue-owl-carousel2/dist/vue-owl-carousel2';
import { languages, defaultLocale } from './store/index';
import { VueTelInput } from 'vue-tel-input';
import 'vue-tel-input/dist/vue-tel-input.css';
//import "swiper";
Vue.use(VueI18n);
Vue.use(VueTelInput);
const messages = Object.assign(languages);
Vue.config.productionTip = false;
var i18n = new VueI18n({
	locale: defaultLocale,
	fallbackLocale: 'de',
	messages,
});
Vue.config.productionTip = false;
new Vue({
	i18n,
	router,
	store,
	// apolloProvider,
	render: (h) => h(App),
}).$mount('#app');
