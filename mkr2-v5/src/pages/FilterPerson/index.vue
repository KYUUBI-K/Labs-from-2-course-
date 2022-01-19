<template>
    <div>
        <h2>Фільтрувати студентів</h2>
        <div class="filterperson">
            <label>
                <input type="text" v-model="name" placeholder="ПІБ">
            </label>
            <br>
            <br>
            <button @click="filterName" class="gradient-button">Фільтрувати за ПІБ</button>
            <br>
            <br>
            <label>
                <input type="text" v-model="addres" placeholder="Адрес">
            </label>
            <br>
            <br>
            <button @click="filterAddres" class="gradient-button">Фільтрувати за адресою</button>
            <br>
            <br>
            <label> 
                <input type="text" v-model="course" placeholder="Курс">
            </label>
            <br>
            <br>
            <button @click="filterCourse" class="gradient-button">Фільтрувати за курсом</button>
            <br>
            <br>
            <label>
                <input type="text" v-model="group" placeholder="Група">
            </label>
            <br>
            <br>
            <button @click="filterGroup" class="gradient-button">Фільтрувати за групою</button>
            <br>
            <br>
             <label>
                <input type="text" v-model="averageMark" placeholder="Середній бал">
            </label>
            <br>
            <br>
            <button @click="filterAverageMark" class="gradient-button">Фільтрувати за середнім балом</button>
            <br>
            <br>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
    export default {
        name: 'FilterPerson',
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
            ...mapActions(['filterNameAction']),
            filterName() {
                this.filterNameAction(
                    this.name,
                )
                this.$router.push({ path: '/' })
            },
            ...mapActions(['filterAddresAction']),
            filterAddres() {
                this.filterAddresAction(
                    this.addres,
                )
                this.$router.push({ path: '/' })
            },
            ...mapActions(['filterCourseAction']),
            filterCourse() {
                this.filterCourseAction(
                    this.course,
                )
                this.$router.push({ path: '/' })
            },
            ...mapActions(['filterGroupAction']),
            filterGroup() {
                this.filterGroupAction(
                    this.group,
                )
                this.$router.push({ path: '/' })
            },
            ...mapActions(['filterAverageMarkAction']),
            filterAverageMark() {
                this.filterAverageMarkAction(
                    this.averageMark,
                )
                this.$router.push({ path: '/' })
            },
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