<template>
    <div class="personList">
        <person-item v-for="person in getPersonList" :key="person.id"
            :person="person"
        />
    </div>
</template>

<script>
import PersonItem from "./PersonItem";
import { mapGetters } from "vuex"
    export default {
        name: 'PersonList',
        components: {
            PersonItem
        },
        computed: {
            ...mapGetters(['getPersonList'])
        },
    }
</script>

<style lang="css" scoped>
.personList {
    margin-left: 550px;
}
</style>