<template>
    <select v-model="$i18n.locale">
        <option v-for="language in languages" :key="language.id" :value="language.id">
            {{language.name}}
        </option>
    </select>
</template>

<script>
  import Vue from 'vue';

  export default Vue.extend({
    name: 'LanguageSelector',
    data() {
      return {
        languages: [
          {
            id: 'en',
            name: 'English'
          }, {
            id: 'fr',
            name: 'Français'
          }
        ]
      };
    },
  });

</script>
