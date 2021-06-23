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
        </div>
        <email-compose @send="" v-if="compose"></email-compose>
        <email-list :emails="emailsToShow" @remove="" @readEmail="" />

        
            hi
        </section>
    `,
    data(){
        return {
            emails:[],
            compose: true,
        }
    },
    created(){
        emailService.query() //TODO convert this to a method
            .then(emails => this.emails = emails)
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
        filter(filterStr){
            console.log(filterStr);
        }
    },
    addEmail(subject, body){
        console.log('adding email in app...');
        // this.compose = false;
        // emailService.addEmail(subject, body);
    }

};
