import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
const messages = {
  en: {
    helloWorld: 'Welcome to Your Vue.js App',
    description: 'For a guide and recipes on how to configure / customize this project, check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.',
    installedCLIPlugins: 'Installed CLI Plugins',
    essentialLinks: 'Essential Links',
    ecosystem: 'Ecosystem',
  },
  fr: {
    helloWorld: 'Bienvenue dans votre application Vue.js',
    description: 'Pour un guide et des recettes sur la façon de configurer / personnaliser ce projet, consultez la <a href="https://cli.vuejs.org" target="_blank" rel="noopener">documentation vue-cli</a>.',
    installedCLIPlugins: 'Plugins CLI installés',
    essentialLinks: 'Liens essentiels',
    ecosystem: 'Écosystème',
  },
  ar: {
    helloWorld: 'مرحبًا بك في تطبيق Vue.js الخاص بك',
    description: 'للحصول على دليل وصفات حول كيفية تكوين / تخصيص هذا المشروع ، راجع وثائق <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli</a>',
    installedCLIPlugins: 'تثبيت الإضافات CLI',
    essentialLinks: 'الروابط الأساسية',
    ecosystem: 'النظام البيئي',
  },
};

const english = 'en';
export const i18n = new VueI18n({
  locale: english,
  fallbackLocale: english,
  messages
});

const LTR = 'ltr';
const RTL = 'rtl';

export const LayoutDirectionConfig = {
  en: LTR,
  fr: LTR,
  ar: RTL,
};
