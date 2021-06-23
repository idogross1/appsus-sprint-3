import { router } from './router.js';
import appHeader from './cmps/app-header.js';

const options = {
  el: '#app',

  router,

  template: `
    <section class="main-app">
        <app-header></app-header>
        <router-view></router-view>
    </section>
    `,

  components: {
    appHeader,
  },
};

const app = new Vue(options);
