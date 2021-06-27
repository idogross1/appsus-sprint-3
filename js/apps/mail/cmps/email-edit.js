import {emailService } from '../services/email-service.js'
import { eventBus } from '../../../services/event-bus-service.js';

export default {
    template: `
        <section class="email-compose email-container flex flex-col email-edit">
        <p class="message">Reply <span class="clean-link x" @click="closeCompose">x</span></p>
        <form @submit.prevent="send">
            <textarea class="email-subject" rows="1" cols="80" type="text" placeholder="subject" v-model="email.subject"></textarea>
            <textarea class="emailBody"  rows="8" cols="80"  placeholder="enter email text here" v-model="email.body"></textarea>
            <button class="email-button">send</button>
        </form>

        </section>
    `,
    data(){
        return {
            email: {
                // subject: this.$route.params.emailSubject ? 'Re:' + this.$route.params.emailSubject: '',
                // body:  this.$route.params.emailSubject ? '\n'+this.$route.params.emailBody: '',
                subject: this.$route.params.emailSubject,
                body: '\n' + this.$route.params.emailBody
            }
        }
    },
    // created(){
    //     if (!this.$route.params.emailSubject) this.email.subject = '';
    //     if (!this.$route.params.emailBody) this.email.subject = '';
    // }
    methods: {
        send(){
            console.log('sending form..', this.email);
            emailService.addEmail(this.email.subject, this.email.body)
                .then(() =>
                {
                    this.$router.push('/mail')
                    var msg = {type: 'success', text: 'email sent!'}
                    eventBus.$emit('show-msg', msg)
                })

        },
        closeCompose(){
            this.$router.push('/mail')
        }
    }
}