import appHeader from './cmps/app-header.js';
import userMsg from './cmps/user-msg.js';

import { router } from './router.js';

const options = {
  el: '#app',

  router,

  template: `
    <section class="main-app">
        <app-header></app-header>
        <router-view></router-view>
        <user-msg></user-msg>
    </section>
    `,

  components: {
    appHeader,
    userMsg,
  },
};

const app = new Vue(options);
