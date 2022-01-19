<template>
    <div>
        <h2>Фільтрувати побутові прилади</h2>
        <div class="filterhouseholdGoods">
            <label>
                <input type="text" v-model="name" placeholder="Назва">
            </label>
            <br>
            <button @click="filterNamehouseholdGoods">Фільтрувати за назвою</button>
            <br>
            <label>
                <input type="text" v-model="category" placeholder="Категорія">
            </label>
            <br>
            <br>
            <label> 
                <input type="text" v-model="producer" placeholder="Виробник">
            </label>
            <br>
            <br>
            <label>
                <input type="text" v-model.number="price" placeholder="Ціна">
            </label>
        </div>
        <br>
        <button @click="filterhouseholdGoods">Фільтрувати</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'FilterHouseholdGoods',
        data() {
            return {
                name: null,
                category: null,
                producer: null,
                price: null
            }
        },
        methods: {
            ...mapActions(['filterNameHouseholdGoods']),
            filterNamehouseholdGoods() {
                this.filterNameHouseholdGoods(
                    this.name,
                    this.category,
                    this.producer,
                    this.price
                )
                this.$router.push({ path: '/' })
            }
        },
    }
</script>

<style lang="css" scoped>
button,label {
    font-family: sans-serif;
    background: black;
    color: yellow;
    padding: 10px;
    border: 2px solid black;
}
</style>