<template>
  <div id="nav">
    <navbar/>
  </div>
  <router-view class="mt-4"/>
</template>

<script>
import navbar from '../src/components/navbar';
export default {
  components:{
    navbar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
