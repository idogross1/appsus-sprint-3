import emailList from "../cmps/email-list.js";
import {emailService } from '../services/email-service.js'
import emailFilter from "../cmps/email-filter.js";
import emailStatus from "../cmps/email-status.js";
import emailCompose from "../cmps/email-compose.js";

export default {
  template: `
        <section v-if="emails.length" class="email-app ">
        <email-filter @filter="filter"> </email-filter>
        <!-- <router-view/>contains <email-list/> or <email-content/> or <email-compose/> -->
        <div class="flex">
            <div class="controls"> 
                <email-status :emails="emails"> </email-status>
                <button @click="composeEmail" >Compose</button>
                <email-compose @send="addEmail" v-if="compose"></email-compose>
            </div>
            <email-list :emails="emailsToShow" @remove="" @readEmail="readEmail" />
        </div>
        <email-details v-if="currEmail"></email-details>
        </section>
    `,
    data(){
        return {
            emails:[],
            compose: false,
            currEmail: null,
            filterStr: '',
        }
    },
    created(){
        this.loadEmails();
    },
    computed: {
        emailsToShow(){
            if (!this.filterStr) return this.emails;
            const filteredEmails = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.filterStr)
            })
            return filteredEmails;
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
            this.filterStr = filterStr.toLowerCase();
            console.log(this.filterStr);
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
        readEmail(emailId){
            console.log('reading email in app');
            emailService.getEmailById(emailId)
                .then(email => {
                    if (!email.isRead){
                        email.isRead = true
                    }
                })
                .then(this.loadEmails());

        }
    },

};
