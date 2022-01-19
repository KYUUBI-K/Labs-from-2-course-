<template>
    <div class="furnitureList">
        <furniture-item v-for="furniture in getFurnitureList" :key="furniture.id"
            :furniture="furniture"
        />
    </div>
</template>

<script>
import FurnitureItem from "./FurnitureItem";
import { mapGetters } from "vuex"
    export default {
        name: 'FurnitureList',
        components: {
            FurnitureItem
        },
        computed: {
            ...mapGetters(['getFurnitureList'])
        },
    }
</script>

<style lang="css" scoped>
.furnitureList {
    margin-left: 600px;
}
</style>