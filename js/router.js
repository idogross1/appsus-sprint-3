import homePage from './pages/home-page.js';
import emailApp from './apps/mail/pages/pages/email-app.js';
import emailDetails from './apps/mail/pages/pages/email-details.js';
import keepApp from './apps/keep/pages/keep-app.js';

const routes = [
  { path: '/', component: homePage },
  { path: '/mail', component: emailApp },
  { path: '/mail/:emailId ', component: emailDetails},
  { path: '/keep', component: keepApp },
];

export const router = new VueRouter({ routes });
