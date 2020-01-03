<template>
    <div id="app" :dir="direction">
        <img alt="Vue logo" src="./assets/logo.png">
        <LanguageSelector/>
        <HelloWorld :msg="$t('helloWorld')"/>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import LanguageSelector from './components/LanguageSelector.vue';
  import {i18n, LayoutDirectionConfig} from './i18n';

  export default {
    name: 'app',
    i18n,
    components: {
      HelloWorld,
      LanguageSelector
    },
    data() {
      return {
        direction: 'ltr'
      };
    },
    updated() {
      this.direction = LayoutDirectionConfig[this.$i18n.locale];
    }
  };
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
