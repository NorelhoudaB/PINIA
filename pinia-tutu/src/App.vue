<template>
  <main>
    <!-- Header -->
    <header>
      <img src="./assets/Pinialogo.svg" class="logo" alt="Pinia logo">
      <h1>Pinia tasks </h1>
    </header>
<!-- Task form -->
<div class="new-task-form">

  <TaskForm />
</div>

<!-- Filter buttons -->
<nav class="filter">
  
    <button @click="filter = 'all'" >All</button>
    <button @click="filter = 'completed'">completed</button>

</nav>

<!--lloading-->
<div class="loading" v-if="TaskStore.isLoading">Loading tasks </div>
<!-- Task list -->
<div class="task-list" v-if="filter === 'all'">
<p>YOU HAVE {{ TaskStore.totalcount }} TASKS</p>
    <div v-for="task in TaskStore.tasks" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
<div class="task-list" v-if="filter === 'completed'">
<p>YOU HAVE {{ TaskStore.completedcount }} TASK DONE </p>
    <div v-for="task in TaskStore.completed" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
  </main>
   
</template>

<script>
import TaskDetails from '@/components/TaskDetails.vue'
import {ref }from 'vue';
import { useTaskStore } from '@/stores/TaskStore'
import TaskForm from './components/TaskForm.vue';
export default {
components: {
    TaskDetails,
    TaskForm
},
setup(){

  const TaskStore = useTaskStore()

  TaskStore.getTasks()
  const filter = ref('all')
  return {
    TaskStore,
    filter
  }
}
}
</script>

<style>

</style>