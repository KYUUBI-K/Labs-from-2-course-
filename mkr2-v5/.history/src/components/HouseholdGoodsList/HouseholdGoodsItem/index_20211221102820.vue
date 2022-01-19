<template>
    <div class="householdGoods">
        <div>Назва: {{householdGoods.name}}<br> Категорія: {{householdGoods.category}}<br> Виробник: {{householdGoods.producer}}<br> Ціна:{{householdGoods.price}}</div>
    </div>
</template>

<script>
    export default {
        name: 'HouseholdGoodsItem',
        props: {
            householdGoods: {
                type: Object,
                default: ()=>({})
            },
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