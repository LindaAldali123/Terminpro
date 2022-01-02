import Vue from 'vue';
import Vuex from 'vuex';
import en from '../js/en.json';
import de from '../js/de.json';

export const defaultLocale = 'en';
export const languages = {
	en: en,
	de: de,
};

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: {},
});
