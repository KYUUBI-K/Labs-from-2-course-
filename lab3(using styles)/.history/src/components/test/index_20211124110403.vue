<template>
    <div>
        <table class = "name">
            <tr>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopp6JCcuE6uYPBuxXve96mpE-S-KhB08FGA&usqp=CAU" alt="">
               <th>Ім'я клієнта</th>
               <input type="checkbox">
            </tr>
            <tr>
                <img src="data:image/png;base64,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" alt="">
                <th>Телефон</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>e-mail</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Коментарі</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Через кого прийшов клієнт</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Скидка %</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Баланс</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Групи</th>
               <input type="checkbox">
            </tr>
            <tr>
                <th>Вітання</th>
               <input type="checkbox">
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
</style>