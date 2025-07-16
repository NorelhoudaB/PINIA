<template>
  <main>

    <header>
      <img src="./assets/Pinialogo.svg" class="logo" alt="Pinia logo">
      <h1>Pinia tasks </h1>
    </header>


<div class="task-list">
<p>all tasks</p>
    <div v-for="task in TaskStore.tasks" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
<div class="task-list">
<p>completed tasks</p>
    <div v-for="task in TaskStore.completed" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
  </main>
   
</template>

<script>
import TaskDetails from '@/components/TaskDetails.vue'

import { useTaskStore } from '@/stores/TaskStore'
export default {
components: {
    TaskDetails
},
setup(){

  const TaskStore = useTaskStore()

  return {
    TaskStore
  }
}
}
</script>

<style>

</style>