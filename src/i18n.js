import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
  en: {
    helloWorld: 'Welcome to Your Vue.js App',
    description: 'For a guide and recipes on how to configure / customize this project, check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.'
  },
  fr: {
    helloWorld: 'Bienvenue dans votre application Vue.js',
    description: 'Pour un guide et des recettes sur la façon de configurer / personnaliser ce projet, consultez la <a href="https://cli.vuejs.org" target="_blank" rel="noopener">documentation vue-cli</a>.'
  },
};

const english = 'en';
export const i18n = new VueI18n({
  locale: english,
  fallbackLocale: english,
  messages
});
