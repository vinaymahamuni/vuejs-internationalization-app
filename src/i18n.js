import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
  en: {
    helloWorld: 'Welcome to Your Vue.js App',
  },
  fr: {
    helloWorld: 'Bienvenue dans votre application Vue.js'
  },
};

const english = 'en';
export const i18n = new VueI18n({
  locale: english,
  fallbackLocale: english,
  messages
});
