import Vue from 'vue';
import VueRouter from 'vue-router';
import Tasklist from '../components/Tasklist'  
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[
    {
        path:'/list', 
        component:Tasklist,
        name:'list',
    }
    ]

});
export default router