import homePage from './pages/home-page.js';
import emailApp from './apps/mail/pages/email-app.js';
import emailDetails from './apps/mail/pages/email-details.js';
import keepApp from './apps/keep/pages/keep-app.js';

const routes = [
  { path: '/', component: homePage },
  { path: '/mail', component: emailApp, children:[
                {path: ':emailId', component: emailDetails} 
  ]},
  { path: '/keep', component: keepApp },
  {
    path: '/details/:emailId',
    component: emailDetails
}
];

export const router = new VueRouter({ routes });
