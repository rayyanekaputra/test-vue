<script setup>
import { ref } from 'vue';

    const name = ref('john doe');
    const status = ref('active');
    const tasks = ref(['Task One', 'Task Two', 'Task Three']);

    const toggleStatus = () =>{
      if (status.value === "active") {
        status.value = "pending";
        console.log(status.value)
      } else if (status.value === "pending") {
        status.value = "inactive";
        console.log(status.value)
      } else {
        status.value = "active"
        console.log(status.value)
      }
    }

</script>

<template>
  <h1>
    {{ name }}!
  </h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <h3>Task: </h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>
  <!-- <a bind:href="link">click me</a> this is the full version -->
  <a :href="link">click me</a>
  <br />
  <!-- <button v-on:click="toggleStatus">change status</button> fullversion -->
  <button @click="toggleStatus">change status</button>
</template>
