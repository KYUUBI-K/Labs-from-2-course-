<template>
    <div class="householdGoodsList">
        <household-goods-item v-for="householdGoods in getHouseholdGoodsList" :key="householdGoods.id"
            :householdGoods="householdGoods"
        />
    </div>
</template>

<script>
import HouseholdGoodsItem from "./HouseholdGoodsItem";
import { mapGetters } from "vuex"
    export default {
        name: 'HouseholdGoodsList',
        components: {
            HouseholdGoodsItem
        },
        computed: {
            ...mapGetters(['getHouseholdGoodsList'])
        },
    }
</script>

<style lang="css" scoped>
.householdGoodsList {
    margin-left: 642px;
}
</style>