import homePage from './pages/home-page.js';
import emailApp from './apps/mail/pages/email-app.js';
import emailDetails from './apps/mail/pages/email-details.js';
import keepApp from './apps/keep/pages/keep-app.js';
import emailEdit from './apps/mail/cmps/email-edit.js';

const routes = [
  { path: '/', component: homePage },
  { path: '/mail', component: emailApp, children:[
                {path: ':emailId', component: emailDetails} 
  ]},
  { path: '/keep', component: keepApp },
  {
    path: '/details/:emailId',
    component: emailDetails
  },
  { path: '/edit/:emailSubject/:emailBody', component: emailEdit}
];

export const router = new VueRouter({ routes });
