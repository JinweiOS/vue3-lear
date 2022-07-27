<template>
  <div class="hello" @click="display">
    <h1>{{ countBase }}</h1>
    <h1>{{ countArrayR[0].count }}</h1> 
    <h1>{{ countObjectR.count }}</h1>
  </div>
</template>

<script>
// 创建一个响应式变量
import { countBase, countArrayR, countObjectR } from "@/util/time";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup(props) {
    function display() {
      console.log("这是方法的使用")
    }
    // 4.props?
    console.log(props.msg);
    // 所有模板中想要绑定的方法和变量，都需要在setup函数中return
    return {
      countBase,
      countArrayR,
      countObjectR,
      display,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
