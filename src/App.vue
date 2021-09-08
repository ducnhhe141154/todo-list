<template>
  <div id="main">
    <h1>Todo List</h1>
    <input v-model="newTitle" type="text" placeholder="Nhap todo ... ">
    <button @click="addTodo">Add</button>
    <markDone :todoList="todoList"/>
  </div>
</template>
<script>
import markDone from './components/markDone.vue'
import method from './components/methods.js'
export default {
  data(){
    return{
      newTitle:'',
      todoList:[
      ],
    }
  },
  components:{
    markDone
  }, methods:{
    addTodo: method.addTodo,
  }
}
</script>
<style >
#main{
  margin-left: auto;
  margin-right: auto;
    text-align: center;
}

</style>