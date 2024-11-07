<script setup>
//<script setup supaya dia tidak perlu lagi export default
import { ref, onMounted} from 'vue';
//miripji konsepnya useRef

const name = ref('john doe');
const status = ref('active');
const tasks = ref(['Task One', 'Task Two', 'Task Three']);
const newTask = ref('add task');

const toggleStatus = () => {
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

const addTask = () => {
  if (newTask.value.trim()) {
    tasks.value.push(newTask.value); //push input form ke array tasks
    newTask.value = ''; //bersihkan input
  }



}
const deleteTask = (index) => {
    tasks.value.splice(index, 1)
  }

onMounted(async()=>{
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json();
    tasks.value = data.map((task)=>task.title)
  } catch(error){
    console.log('error fetching')
  }
})

</script>

<template>
  <h1>
    {{ name }}!
  </h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <!-- .prevent itu gunanya untuk hilang preventDefault dari elemen html -->
  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask">
    <button type="submit">SUBMIT</button>
  </form>

  <h3>Task: </h3>
  <ul>
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">x</button>
    </li>
  </ul>
  <!-- <a bind:href="link">click me</a> this is the full version -->
  <a :href="link">click me</a>
  <br />
  <!-- <button v-on:click="toggleStatus">change status</button> fullversion -->
  <button @click="toggleStatus">change status</button>
</template>
