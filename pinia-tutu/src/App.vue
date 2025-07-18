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
<div class="loading" v-if="isLoading">Loading tasks </div>
<!-- Task list -->
<div class="task-list" v-if="filter === 'all'">
<p>YOU HAVE {{totalcount }} TASKS</p>
    <div v-for="task in tasks" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
<div class="task-list" v-if="filter === 'completed'">
<p>YOU HAVE {{ completedcount }} TASK DONE </p>
    <div v-for="task in completed" :key="task.id" class="task-item">
      <TaskDetails :task="task" />
    </div>

</div>
<nav class="filter">
  <button   @click="TaskStore.$reset">reset state</button></nav>

  </main>
   
</template>

<script>
import TaskDetails from '@/components/TaskDetails.vue'
import {ref }from 'vue';
import { useTaskStore } from '@/stores/TaskStore'
import TaskForm from './components/TaskForm.vue';
import { storeToRefs } from 'pinia';
export default {
components: {
    TaskDetails,
    TaskForm
},
setup(){

  const TaskStore = useTaskStore()

  const{tasks, isLoading, completed, totalcount,completedcount}=storeToRefs(TaskStore)

  TaskStore.getTasks()
  const filter = ref('all')
  return {
    TaskStore,
    filter,tasks, isLoading, completed, totalcount,completedcount
  }
}
}
</script>

<style>

</style>