<template>
  <form @submit.prevent="handleSubmit">
<input v-model="newTask" type="text" placeholder="I have to ..." required>
<button type="submit">Add Task</button>

  </form>
</template>

<script>
import { useTaskStore } from '@/stores/TaskStore';
import { ref } from 'vue';
export default {
    setup() {
        const taskStore = useTaskStore()

const newTask = ref('')

const handleSubmit= () => {
  if (newTask.value.length > 0) {
    taskStore.addTask({
        title: newTask.value,
        completed: false,
        id:Math.floor(Math.random() * 10000)
    })
    newTask.value = ''
  } 
}
  return {
    newTask,
    handleSubmit
  }
}}
</script>

