import emailList from "../cmps/email-list.js";
import {emailService } from '../services/email-service.js'
import emailFilter from "../cmps/email-filter.js";
import emailStatus from "../cmps/email-status.js";
import emailCompose from "../cmps/email-compose.js";
import emailEdit from "../cmps/email-edit.js";

const ALL = 'all'
const READ = 'read'
const UNREAD = 'unread'
// const SORT_DATE = 'date'
// const SORT_TITLE = 'title'

export default {
  template: `
        <section v-if="emails.length" class="email-app flex flex-col">
            <div class="flex email-header">
                <div class="logo">LOGO IMG</div>
                <email-filter @filter="filterEmails"> </email-filter>
                <button class="sort" @click="sortEmails('date')">sort by date</button>
                <button class="sort" @click="sortEmails('title')">sort by title</button>
            </div>  
        <div class="flex">
            <div class="controls"> 
                <button @click="composeEmail" >Compose</button>
                <!-- <email-edit @send="addEmail" v-if="compose"></email-edit> -->
                <div @click="readEmails">Mark as read</div>
                <div @click="unreadEmails">Mark as unread</div>
                <div @click="setReadFilter('read')">show read</div>
                <div @click="setReadFilter('unread')">show unread</div>
                <div @click="setReadFilter('all')">show all</div>
                <div @click="showStarred">show starred</div>
                
                <email-status :emails="emails"> </email-status>
            </div>
            <email-compose @send="addEmail" v-if="compose"></email-compose>
            <email-list @replyToEmail=addEmail @toggleStar="toggleStar" @selectEmails="selectEmails" :emails="emailsToShow" @remove="" @readEmail="readEmail" @unReadEmail="unReadEmail"/>
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
                readStatus: ALL,
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
            var filteredEmails = this.emails;
            if (this.filter.filterStr === '' && this.filter.readStatus === ALL && this.filter.starred === false) return this.emails

            filteredEmails = this.emails.filter(email => {
                return email.subject.toLowerCase().includes(this.filter.filterStr)
            })

            if (this.filter.starred){
                filteredEmails = filteredEmails.filter(email => {
                    return email.isStarred
                })
                return filteredEmails
            }

            if (this.filter.readStatus === READ){
                filteredEmails = filteredEmails.filter(email => {
                    return email.isRead
                })
            }
            else if (this.filter.readStatus === UNREAD){
                filteredEmails = filteredEmails.filter(email => {
                    return !email.isRead
                })
            }

            return filteredEmails;
        }
    },
     components: {
        emailList,
        emailFilter,
        emailStatus,
        emailCompose,
        emailEdit
    },
    methods: {
        toggleStar(email){
            console.log('toggling star...', email);
            emailService.getEmailById(email.id)
                .then(email => {
                    email.isStarred = !(email.isStarred);
                    return email;
                })
                .then(email => emailService.updateEmail(email))
                .then(() => this.loadEmails())
        },
        sortEmails(sortBy){
            console.log('sorting the emails...');
            this.emails = this.emails.sort((email1, email2) => {
                if (sortBy === 'date') return email1.sentAt - email2.sentAt;
                if (sortBy === 'title') return email1.subject.localeCompare(email2.subject);
                })
        },

        showStarred(){
            this.filter.readStatus = ALL
            this.filter.starred = true;
        },
        loadEmails(){
            emailService.query()
            .then(emails => this.emails = emails)
            .then(emails => {
                emails.forEach(email => {
                    console.log(email.sentAt);
                });
            })
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
        setReadFilter(readStatus){
            this.filter.starred = false;
            if (readStatus === 'all') this.filter.readStatus = 'all';
            else if (readStatus === 'read') this.filter.readStatus = 'read';
            else if (readStatus === 'unread') this.filter.readStatus = 'unread'; 
        }
    },

};
