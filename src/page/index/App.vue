<template>
  <div id="app">
    hello index
    <ul>
      <li v-for="(item, index) in task" :key="index">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import $http from "@/shared/axios";
export default {
  name: "App",
  data() {
    return {
      task: [],
    };
  },
  mounted() {
    $http({
      url: "https://mock.jsont.run/ZAXEoaqkk95-S-xX_Bjsw",
      method: "post",
      data: {
        p: ["a", "b"],
        b: 3,
      },
    }).then((res) => {
      this.task = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
