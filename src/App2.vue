<script>

export default {
  data() {
    return {
      name: 'John Doe',
      status: 'active',
      tasks: ['Task One', 'Task Two', 'Task Three'],
      link: 'https://google.com'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === "active") {
        this.status = "pending";
        console.log(this.status)
      } else if (this.status === "pending") {
        this.status = "inactive";
        console.log(this.status)
      } else {
        this.status = "active"
        console.log(this.status)
      }
    },
  },
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
