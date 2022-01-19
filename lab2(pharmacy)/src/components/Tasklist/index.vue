<template>
  <div>
    <div>
      <input type="search" v-model="search" placeholder="Назва препарату" />
    </div>
    <task-item v-for="task in filterTask" :key="task.id" :task="task" />
    <div>
      <add-new-task />
    </div>
  </div>
</template>

<script>
import TaskItem from "./Taskitem";
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
          return item.title.indexOf(this.search) > -1;
        });
      }
      return list;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>