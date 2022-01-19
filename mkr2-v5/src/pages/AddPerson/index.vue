<template>
    <div>
        <h2>Дадати студента</h2>
        <div class="addpersonGoods">
            <label>
                <input type="text" v-model="name" placeholder="ПІБ">
            </label>
            <br>
            <br>
            <label>
                <input type="text" v-model="addres" placeholder="Адрес">
            </label>
            <br>
            <br>
            <label> 
                <input type="text" v-model="course" placeholder="Курс">
            </label>
            <br>
            <br>
            <label>
                <input type="text" v-model="group" placeholder="Група">
            </label>
            <br>
            <br>
            <label>
                <input type="text" v-model="averageMark" placeholder="Середній бал">
            </label>
        </div>
        <br>
        <button @click="addperson" class="gradient-button">Додати товар</button>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'AddPerson',
        data() {
            return {
                name: null,
                addres: null,
                course: null,
                group: null,
                averageMark: null
            }
        },
        methods: {
            ...mapActions(['addPerson']),
            addperson() {
                this.addPerson({
                    name: this.name,
                    addres: this.addres,
                    course: this.course,
                    group: this.group,
                    averageMark: this.averageMark
                })
                this.$router.push({ path: '/' })
            }
        },
    }
</script>

<style lang="css" scoped>
label {
    border: 2px solid blue ;
    background: lightseagreen;
    color: white;
    padding: 15px;
    
}
.gradient-button {
  display: inline-block;
  color: white;
  padding: 20px 30px;
  margin: 10px 20px;
  border-radius: 10px;
  font-family: gideon roman regular;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(to right, #9EEFE1 0%, #4830F0 51%, #9EEFE1 100%);
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, .1);
  transition: .5s;
}
.gradient-button:hover {
  background-position: right center;
}
</style>