import HouseholdGoodsList from "@/components/HouseholdGoodsList"
import AddHouseholdGoods from "@/pages/AddHouseholdGoods"
import DelateHouseholdGoods from "@/pages/DelateHouseholdGoods"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: HouseholdGoodsList},
    {path: '/addHouseholdGoods', component: AddHouseholdGoods},
    {path: '/delateHouseholdGoods', component: DelateHouseholdGoods},
]

const router = new VueRouter({routes})

export default router