<template>
    <div class="furniture">
        <div>{{furniture.name}} | {{furniture.model}} | {{furniture.color}} | {{furniture.price}}</div>
    </div>
</template>

<script>
    export default {
        name: 'FurnitureItem',
        props: {
            furniture: {
                type: Object,
                default: ()=>({})
            },
        },
    }
</script>

<style lang="css" scoped>
.furniture {
    width: 500px;
    border: 2px solid rgb(143, 143, 143);
    margin: 3px;
    border-radius: 4px;
}
</style>