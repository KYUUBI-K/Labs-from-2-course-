import PersonList from "@/components/PersonList"
import AddPerson from "@/pages/AddPerson"
import FilterPerson from "@/pages/FilterPerson"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: PersonList},
    {path: '/addPerson', component: AddPerson},
    {path: '/filterPerson', component: FilterPerson},
]

const router = new VueRouter({routes})

export default router