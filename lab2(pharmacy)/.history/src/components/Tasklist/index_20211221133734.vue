<template>
  <div>
    <div>
      <input type="search" v-model="search" placeholder="Марка Авто" />
    </div>
    <task-item v-for="task in filterTask" :key="task.id" :task="task" />
    <div>
      <add-new-task />
    </div>
    <!-- <div><button @click="$router.push('/AboutCars')">AboutCars</button></div>   
        <div><button @click="$router.push('/AboutMe')">AboutMe</button></div>  -->
  </div>
</template>

<script>
import TaskItem from "../TaskItem";
import AddNewTask from "@/components/AddNewTask";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  name: "TaskList",
  components: {
    TaskItem,
    AddNewTask,
  },
  computed: {
    ...mapGetters(["getTaskList"]),
    filterTask() {
      let list = [...this.getTaskList];
      if (this.search) {
        list = list.filter((item) => {
          return item.company.indexOf(this.search) > -1;
        });
      }
      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>