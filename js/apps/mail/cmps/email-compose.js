
export default {
    template: `
        <section class="email-compose ">
        
        <form @submit.prevent="send" class="email-container flex flex-col">
            <p class="message">New Message</p>
            <!-- <input type="text" placeholder="subject" v-model="email.subject"/> -->
            <textarea class="email-subject" rows="1" cols="80" placeholder="subject" v-model="email.subject"></textarea>
            <textarea class="emailBody" rows="8" cols="80"  placeholder="enter email text here" v-model="email.body"></textarea>
            <button class="email-button">send</button>
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