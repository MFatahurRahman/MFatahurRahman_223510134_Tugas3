<template>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.name }}</li>
    </ul>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    props: {
      tasks: {
        type: Array,
        required: true
      }
    }
  };
  </script>
  