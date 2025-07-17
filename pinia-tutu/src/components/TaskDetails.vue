<template>
  <div class="task">
  <h3>{{ task.title }}</h3>
  <div class="icons">
<i @click="TaskStore.deleteTask(task.id)" class="material-icons">delete</i>
<i @click="TaskStore.toggleCompleted(task.id)" class="material-icons" :class="{active: task.Completed}">done</i>

  </div>
  </div>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
export default {
props:['task'],

setup(props) {
  const TaskStore = useTaskStore();
  const task = props.task;

  return {
    TaskStore,
    task
  }
}
}
</script>

<style scoped>


.task i.active {
  color: #ffd859 !important;
}
</style>