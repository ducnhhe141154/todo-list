<template>
  <div id="main1">
    <div class="box" v-for="(todo, index) in todoList" :key="index">
      <h3 class='titleBox' :class="{ markdone: todo.done }">{{
        checkOutput(todo.title)
      }}
       <input
        type="checkbox"
        v-model="todo.done"
        
        @click="todo.done = !todo.done"
      /></h3>
       
    </div>
  </div>
</template>
<script>
import method from './methods.js'
export default {
  props: ["todoList"],
  data() {
    return {
      hotWords: ["fuck", "shit", "bitch"],
    };
  },
  methods:{
      checkOutput : method.checkOutput
  }
};
</script>
<style >
.markdone {
  text-decoration: line-through;
}
.titleBox{
    padding: 2px 10px;
    margin: 10px 10px;
} 
.box{
    display: inline-block;
}
#main1{
    margin: 20px 0;
}
</style>