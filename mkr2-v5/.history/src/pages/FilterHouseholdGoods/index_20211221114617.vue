<template>
    <div>
        <h2>Фільтрувати побутові прилади</h2>
        <div class="addhouseholdGoods">
            <label>
                <input type="text" v-model="name" placeholder="Назва">
            </label>
            <br>
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
        <button @click="addhouseholdGoods">Фільтрувати</button>
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
            ...mapActions(['addHouseholdGoods']),
            addhouseholdGoods() {
                this.addHouseholdGoods({
                    name: this.name,
                    category: this.category,
                    producer: this.producer,
                    price: this.price
                })
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