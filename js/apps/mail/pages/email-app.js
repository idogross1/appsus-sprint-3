import emailList from "../cmps/email-list.js";
import {emailService } from '../services/email-service.js'
import emailFilter from "../cmps/email-filter.js";
import emailStatus from "../cmps/email-status.js";
import emailCompose from "../cmps/email-compose.js";

export default {
  template: `
        <section v-if="emails.length" class="email-app flex flex-col">
                <div class="logo">LOGO IMG</div>
                <email-filter @filter="filterEmails"> </email-filter>
        <!-- <router-view/>contains <email-list/> or <email-content/> or <email-compose/> -->
        <div class="flex">
            <div class="controls"> 
                <button @click="composeEmail" >Compose</button>
                <email-status :emails="emails"> </email-status>
                <email-compose @send="addEmail" v-if="compose"></email-compose>
                <div @click="readEmails">Mark as read</div>
                <div @click="unreadEmails">Mark as unread</div>
                <div @click="filterByRead('read')">show read</div>
                <div @click="filterByRead('unread')">show unread</div>
                <div @click="filterByRead('all')">show all</div>
                <div @click="showStarred">show starred</div>
            </div>
            <email-list @toggleStar="toggleStar" @selectEmails="selectEmails" :emails="emailsToShow" @remove="" @readEmail="readEmail" @unReadEmail="unReadEmail"/>
        </div>
        <email-details v-if="currEmail"></email-details>
        </section>
    `,
    data(){
        return {
            emails:[],
            compose: false,
            currEmail: null,
            filter: {
                filterStr:'',
                readStatus: 'all',
                starred: false
            },
            selectedEmails: []
        }
    },
    created(){
        this.loadEmails();
    },
    computed: {
        emailsToShow(){
            console.log('getting emials to show...');
            var filteredEmails = this.emails;

            if (this.filter.starred){
                filteredEmails = this.emails.filter(email => {
                    return email.isStarred === true;
                })
                return filteredEmails;
            }
            if (!this.filter.filterStr) return this.emails;
            filteredEmails = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.filter.filterStr)
            })
            if (this.filter.readStatus === 'read'){
                filteredEmails = filteredEmails.filter(email => {
                    return email.isRead
                })
            }
            else if (this.filter.readStatus === 'unread'){
                filteredEmails = filteredEmails.filter(email => {
                    return !email.isRead
                })
            }

            return filteredEmails;
        }
    },
    watch:{

    },

    components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose
    },
    methods: {
        toggleStar(email){
            console.log('toggling star...', email);
            emailService.getEmailById(email.id)
                .then(email.isStarred = !email.isStarred)
                .then(this.loadEmails())
        },
        showStarred(){
            this.filter.starred = true;
        },
        loadEmails(){
            emailService.query()
            .then(emails => this.emails = emails)
        },
        filterEmails(filterStr){
            this.filter.filterStr = filterStr.toLowerCase();
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
                .then(email =>{
                    email.isRead = true
                    return email
                } )
                .then(email =>{
                    return emailService.updateEmail(email)
                } )
                .then(() => this.loadEmails())
        },

        unReadEmail(emailId){
            console.log('unreading the emial');
            emailService.getEmailById(emailId)
                .then(email => {
                    email.isRead = false
                    return email
                })
                .then(email=> emailService.updateEmail(email))
                .then(() => this.loadEmails())
        },
        readEmails(){
            this.selectedEmails.forEach(email => {
                this.readEmail(email.id)
            });
        },
        unreadEmails(){
            this.selectedEmails.forEach(email => {
                this.unreadEmail(email.id)
            });
        },
        selectEmails(selectedEmails){
            this.selectedEmails = selectedEmails.slice();
        },
        filterByRead(readStatus){
            if (readStatus === 'all') this.filter.readStatus = 'all';
            else if (readStatus === 'read') this.filter.readStatus = 'read';
            else if (readStatus === 'unread') this.filter.readStatus = 'unread'; 
            
            // console.log('filtering by read', this.filter);
        }
    },

};
