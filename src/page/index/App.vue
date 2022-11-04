<template>
  <div id="app">
    <el-button @click="decreme">减1了</el-button>
    <el-button type="primary" @click="add">加1了</el-button>
    <el-button type="primary" @click="addAsync">2s后加1了</el-button>
    <el-button type="primary" @click="addAsyncPayload({ amount: 10 })"
      >1s后加1再1s减1</el-button
    >
    <!-- <el-button type="primary" @click="addTwo">加2了</el-button> -->
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-slider v-model="value1"></el-slider>
    <h2>{{ count }}</h2>
    <h2>{{ countPlusLocalState }}</h2>
    <h2>{{ countAlias }}</h2>
    <h4>未完成任务</h4>
    <ul>
      <li v-for="task in taskIng" :key="task.id" style="margin-top: 10px">
        <el-tag>{{ task.text }}</el-tag>
      </li>
    </ul>
    <h4>已完成任务</h4>
    <ul>
      <li v-for="task in taskSuccess" :key="task.id">
        <el-tag type="success">{{ task.text }}</el-tag>
      </li>
    </ul>
    <h4>id等于2的是:{{ getByIdToDo[0].text }}</h4>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: 0,
      localCount: 2,
    };
  },

  mounted() {
    // this.$message({
    //   message: "恭喜你，这是一条成功消息",
    //   type: "success",
    // });
  },
  computed: {
    ...mapGetters(["taskIng", "taskSuccess"]),
    // tasking() {
    //   return this.$store.getters.taskIng;
    // },
    // taskSuccess() {
    //   return this.$store.getters.taskSuccess;
    // },
    getByIdToDo() {
      return this.$store.getters.getTodoById(2);
    },
    ...mapState({
      count: (state) => state.b.count,
      countAlias: "b.count",
      countPlusLocalState(state) {
        return state.b.count + this.localCount;
      },
    }),
  },
  methods: {
    ...mapMutations({
      add: "increment",
      // decreme: "decrement",
      // addTwo: "decrement",
    }),
    // add() {
    //   this.$store.commit("increment");
    // },
    decreme() {
      console.log(this.$store);
      this.$store.commit("decrement");
    },
    // addTwo() {
    //   this.$store.commit("increment", {
    //     type: "increment",
    //     amount: 2,
    //   });
    // },
    ...mapActions({
      addAsync: "incrementAsync",
      addAsyncPayload: "actionB",
    }),
    // addAsync() {
    //   this.$store.dispatch("incrementAsync");
    // },
    // addAsyncPayload() {
    //   this.$store.dispatch("incrementTen", {
    //     amount: 10,
    //   });
    // },
  },
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  ul {
    list-style: none;
  }
}
</style>
