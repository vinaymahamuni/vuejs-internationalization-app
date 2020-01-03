<template class="language-selector">
    <select class="language-selector" v-model="$i18n.locale">
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
          }, {
            id: 'ar',
            name: 'عربى'
          }
        ]
      };
    },
  });

</script>

<style lang="scss">
    @mixin flipProperty($ltr-property, $rtl-property, $value) {
        [dir=ltr] & {
            #{$ltr-property}: $value;
        }

        [dir=rtl] & {
            #{$rtl-property}: $value;
        }
    }
    @mixin left($value) {
        @include flipProperty('left', 'right', $value)
    }

    @mixin right($value) {
        @include flipProperty('right', 'left', $value)
    }

    .language-selector {
        position:absolute ;
        @include right(10px);
        border: 1px solid red;
    }
</style>
