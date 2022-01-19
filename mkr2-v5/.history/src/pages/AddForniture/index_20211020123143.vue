<template>
    <div>
        <h2>Дадати меблі</h2>
        <div>
            <label>
                Назва 
                <input type="text" v-model="name">
            </label>
            <br>
            <br>
            <label>
                Модель
                <input type="text" v-model="model">
            </label>
            <br>
            <br>
            <label>
                Колір
                <input type="text" v-model="color">
            </label>
            <br>
            <br>
            <label>
                Ціна
                <input type="text" v-model="price">
            </label>
        </div>
        <br>
        <button @click="addfurniture">Додати товар</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'AddFurniture',
        data() {
            return {
                name: null,
                unitMeasurement: null,
                number: null
            }
        },
        methods: {
            ...mapActions(['addFurniture']),
            addfurniture() {
                this.addFurniture({
                    name: this.name,
                    unitMeasurement: this.unitMeasurement,
                    number: this.number
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
    color: white;
    padding: 10px;
}
</style>