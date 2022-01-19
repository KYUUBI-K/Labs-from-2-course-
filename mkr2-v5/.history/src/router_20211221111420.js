import HouseholdGoodsList from "@/components/HouseholdGoodsList"
import AddHouseholdGoods from "@/pages/AddHouseholdGoods"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: HouseholdGoodsList},
    {path: '/addHouseholdGoods', component: AddHouseholdGoods},
]

const router = new VueRouter({routes})

export default router