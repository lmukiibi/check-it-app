import { createRouter, createWebHistory } from "vue-router";

import Start from '../views/Start'
import SettingsView from '../views/SettingsView'

const routes = [
    {
        path: '/',
        name: 'Start',
        component: Start,
    },
    {
        path: '/SettingsView',
        name: 'SettingsView',
        component: SettingsView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router

