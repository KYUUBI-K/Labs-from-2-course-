import Vue from 'vue';
import VueRouter from 'vue-router';
import AboutCars from '../pages/AboutCars'
import AboutMe from '../pages/AboutMe'
import Tasklist from '../components/Tasklist'  
Vue.use(VueRouter);

export const router = new VueRouter({
    routes:[{
        path:'/Aboutcars',
        component:AboutCars,
        name:'AboutCars',       
    },
    {
        path:'/AboutMe', 
        component:AboutMe,
        name:'AboutMe',
    },
    {
        path:'/list', 
        component:Tasklist,
        name:'list',
    }
    ]

});
export default router