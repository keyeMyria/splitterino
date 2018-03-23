import Vue from 'vue';
import * as VueRouter from 'vue-router';
import { SplitsEditor } from 'splitterino-core';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'landing-page',
        component: require('@/components/LandingPage')
    },
    {
        path: '/editor',
        name: 'editor',
        component: SplitsEditor,
    },
    {
        path: '*',
        redirect: '#/'
    }
];

export const Router = new VueRouter({
    routes,
});
