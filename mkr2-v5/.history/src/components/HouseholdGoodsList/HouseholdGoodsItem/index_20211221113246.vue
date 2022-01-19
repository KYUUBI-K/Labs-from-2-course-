<template>
    <div class="householdGoods">
        <div><br>Назва: {{householdGoods.name}}<br> Категорія: {{householdGoods.category}}<br> Виробник: {{householdGoods.producer}}<br> Ціна:{{householdGoods.price}}<br><br> <button @click="delatehouseholdGoods">Видалити товар</button> <br> <br></div>
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
    border-radius: 10px;
}

button {
    font-family: sans-serif;
    background: black;
    color: yellow;
    padding: 10px;
    border: 2px solid black;
    border-color: yellow;
    border-radius: 5px;
}
</style>