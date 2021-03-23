<template>
  <div id="app">
    <div class="container">
      <Container />

      <Invoice />
    </div>
  </div>
</template>

<script>
import Container from "./CardContainer.vue";
import Invoice from "./Invoice.vue";

export default {
  name: "App",
  components: {
    Container,
    Invoice,
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
