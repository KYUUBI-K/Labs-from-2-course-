import HouseholdGoodsList from "@/components/HouseholdGoodsList"
import AddHouseholdGoods from "@/pages/AddHouseholdGoods"
import FilterHouseholdGoods from "@/pages/FilterHouseholdGoods"
import VueRouter from "vue-router"

const routes = [
    {path: '/', component: HouseholdGoodsList},
    {path: '/addHouseholdGoods', component: AddHouseholdGoods},
    {path: '/filterHouseholdGoods', component: FilterHouseholdGoods},
]

const router = new VueRouter({routes})

export default router