<template>
  <div id="app">
    hello index
    <ul>
      <li v-for="(item, index) in task" :key="index">{{ item.name }}</li>
    </ul>
    <button @click="cancel">action</button>
  </div>
</template>

<script>
import { fetchTask } from "./api";
import { withCancelToken } from "@/shared/axios";
const [request, abortRequest] = withCancelToken(fetchTask);
export default {
  name: "App",
  data() {
    return {
      task: [],
    };
  },
  mounted() {},
  methods: {
    async cancel() {
      const result = await request(
        "https://mock.jsont.run/ZAXEoaqkk95-S-xX_Bjsw",
        {
          a: 1,
        }
      );
      this.task = result;
    },
  },
  destroyed() {
    abortRequest();
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
