<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup() {
    // 1.我该如何创建响应式变量？(ref用来创建基础数据类型，reactive用来创建引用数据类型)
    // 2.方法呢？
    // 3.生命周期呢？
    // 4.props?
    // 5.计算属性和侦听器呢？
    // 6.this.$route，现在又不能用this，从哪取？
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
