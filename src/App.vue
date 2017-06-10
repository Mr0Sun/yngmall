<template>
  <div id="app">
      <v-content></v-content>
      <v-footer></v-footer>
  </div>
</template>


<style>

</style>


<script>
 import footer from './components/footer/footer';
 import content from './components/content/content.vue';

 //注册组件
 export default {
      components: {
          vFooter: footer,
          vContent: content
      }
 }
</script>
