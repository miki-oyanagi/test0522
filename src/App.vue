<template>
<div class="app">
  <h1>独り言App</h1>
  <p>呟く内容を記入してください</p>
  <input type="text" v-model="text">
  <button @click="send">つぶやく</button>
 <h2>つぶやき一覧</h2>
 <div v-for="(value,index) in lists" :key="index">
    <p class="list">{{lists}}</p>

 </div>
</div>
</template>

<script>
import axios from "axios";
export default {
  data(){
    return{
      lists:"",
    };
  },
  methods:{
    send(){
      axios.post("http://localhost:8080/",{
        lists:this.lists
      })
      .then(response=>{
        console.log(response);
      })
    }
  }
};

</script>


<style>

</style>
