import Vue from 'vue';
import KeenUI from 'keen-ui';
import Draggable from 'vuedraggable';
import { Aevum } from 'aevum';
import { ConfigurationEditor, NumberInput, Splits, SplitsEditor, TimeInput } from 'splitterino-core';

// import { checkUpdate } from '@/utils/update.js';
import { Router } from '@/router';
import store from '@/store';

// Components
import App from '@/App';
import DefaultTemplate from '@/components/DefaultTemplate';
import LandingPage from '@/components/LandingPage';
import TitleBar from '@/components/TitleBar';

// Register Components
Vue.use(KeenUI);
Vue.component('draggable', Draggable);
Vue.component('app', App);
Vue.component('configuration-editor', ConfigurationEditor);
Vue.component('default-template', DefaultTemplate);
Vue.component('landing-page', LandingPage);
Vue.component('number-input', NumberInput);
Vue.component('splits', Splits);
Vue.component('splits-editor', SplitsEditor);
Vue.component('time-input', TimeInput);
Vue.component('title-bar', TitleBar);

Vue.config.productionTip = false;

// for auto update
// checkUpdate();

// Install dependecies
const formatter = new Aevum('(-)[-](h)[#:](m)[#:][s].[ddd]');

Vue.filter('aevum', function(value) {
    try {
        return formatter.format(typeof value === 'number' ? value | 0 : value);
    } catch (e) {
        if (!(e instanceof TypeError)) {
            /* eslint-disable no-console */
            console.error(e);
        }
        return '';
    }
});

// TODO: Load Plugins

/* eslint-disable no-new */
/* eslint-disbale no-unused-vars */
new Vue({
    router: Router,
    store,
    template: '<app/>'
}).$mount('#app');
