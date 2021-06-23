import homePage from './pages/home-page.js';
import emailApp from './apps/mail/pages/pages/email-app.js';
import keepApp from './apps/keep/pages/keep-app.js';

const routes = [
  { path: '/', component: homePage },
  { path: '/mail', component: emailApp },
  { path: '/keep', component: keepApp },
];

export const router = new VueRouter({ routes });
