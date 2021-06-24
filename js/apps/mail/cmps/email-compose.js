import {emailService } from '../services/email-service.js'

export default {
    template: `
        <section class="email-compose">
        compose an email
        <form @submit.prevent="send">
            <input type="text" placeholder="subject" v-model="email.subject"/>
            <textarea  rows="8" cols="80"  placeholder="enter email text here" v-model="email.body"></textarea>
            <button>send</button>
        </form>

        </section>
    `,
    data(){
        return {
            email: {
                subject: '',
                body: '',
            }
        }
    },
    methods: {
        send(){
            console.log('sending form..', this.email);
            this.$emit('send', this.email)

        }
    }
}