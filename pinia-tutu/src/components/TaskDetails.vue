<template>
  <div class="task">
  <h3>{{ task.title }}</h3>
  <div class="icons">
<i class="material-icons">delete</i>
<i class="material-icons">done</i>

  </div>
  </div>
</template>

<script>
export default {
props:['task'],
}
</script>

<style>

</style>