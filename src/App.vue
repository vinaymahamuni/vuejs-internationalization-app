<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <LanguageSelector/>
        <HelloWorld :msg="$t('helloWorld')"/>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import LanguageSelector from './components/LanguageSelector.vue';
  import {i18n} from './i18n';

  export default {
    name: 'app',
    i18n,
    components: {
      HelloWorld,
      LanguageSelector
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
