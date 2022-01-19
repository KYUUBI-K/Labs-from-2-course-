<template>
    <div class="householdGoods">
        <div>Назва: {{householdGoods.name}}<br> Категорія: {{householdGoods.category}}<br> Виробник: {{householdGoods.producer}}<br> Ціна:{{householdGoods.price}}<br> <button @click="delatehouseholdGoods">Видалити товар</button></div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'HouseholdGoodsItem',
        props: {
            householdGoods: {
                type: Object,
                default: ()=>({})
            },
        },
        data() {
            return {
        
            }
        },
        methods: {
            ...mapActions(['delateHouseholdGoods']),
            delatehouseholdGoods() {
                this.delateHouseholdGoods(
                    this.householdGoods.name,
                    this.householdGoods.category,
                    this.householdGoods.producer,
                    this.householdGoods.price
                )
                this.$router.push({ path: '/' })
            }
        },
    }
</script>

<style lang="css" scoped>
.householdGoods {
    width: 250px;
    border: 2px solid rgb(173, 173, 173);
    margin: 3px;
    border-radius: 4px;
    color: yellow;
    background: black;
}
</style>