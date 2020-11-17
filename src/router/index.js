import Vue from 'vue'
import VueRouter from 'vue-router'
import IMBURSEMENT from '../modules/imbursement/router'

Vue.use(VueRouter)

const routes = [];

const router = new VueRouter({
    //mode: 'history',
    base: process.env.BASE_URL,
    routes: routes.concat(IMBURSEMENT),
})

export default router
