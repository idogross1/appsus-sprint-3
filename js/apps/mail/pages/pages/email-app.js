import emailList from "../cmps/email-list.js";
import {emailService } from '../services/email-service.js'
import emailFilter from "../cmps/email-filter.js";
import emailStatus from "../cmps/email-status.js";
import emailCompose from "../cmps/email-compose.js";

export default {
  template: `
        <section v-if="emails.length" class="email-app">
        <!-- <router-view/>contains <email-list/> or <email-content/> or <email-compose/> -->
        <div class="controls"> 
            <email-status :emails="emails"> </email-status>
            <email-filter @filter="filter"> </email-filter>
            <button @click="composeEmail" >Compose</button>
        </div>
        <email-compose @send="addEmail" v-if="compose"></email-compose>
        <email-list :emails="emailsToShow" @remove="" @readEmail="" />
        </section>
    `,
    data(){
        return {
            emails:[],
            compose: false,
        }
    },
    created(){
        this.loadEmails();
    },
    computed: {
        emailsToShow(){
            return this.emails;
        }
    },
    components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose
    },
    methods: {
        loadEmails(){
            emailService.query()
            .then(emails => this.emails = emails)
        },
        filter(filterStr){
            console.log(filterStr);
        },
        addEmail(email){
            console.log('adding email in app...', email);
            emailService.addEmail(email.subject, email.body)
            .then(() => this.loadEmails())
            this.compose = false;
        },
        composeEmail(){
            this.compose = true;
        },
        readEmail(email){
            console.log('reading email');
        }
    },

};
