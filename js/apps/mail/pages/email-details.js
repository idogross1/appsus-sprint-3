import { emailService } from "../services/email-service.js";
import { eventBus } from "../../../services/event-bus-service.js";

export default {
    template: `
        <section v-if="email" class="email-details email-container flex flex-col">
                <p class="message">Current email</p>
               
                <textarea class="email-subject" rows="1" cols="80">{{email.subject}} </textarea>
                <textarea class="emailBody" rows="8" cols="80">{{email.body}}</textarea>
                <router-link class="email-button" :to="'/mail'">Close</router-link>
                
                <button class="delete email-button" @click="deleteEmail">delete
                    <!-- <router-link @click=deleteEmail class="email-button" :to="'/mail'">delete</router-link> -->
                </button>

        </section>
    `,

    data(){
        return {
            // email:this.currEmail,
            email:null,
        }
    },
    methods:{
        deleteEmail(){
            console.log('deleting email...');
            emailService.removeEmail(this.email.id)
            .then(()=>{
                this.$router.push('/mail')
            })
            .then(()=> eventBus.$emit('show-msg', $msg))
        }
    },
    created(){
        // const { emailId } = this.$route.params;
        // emailService.getEmailById(emailId)
        //     .then(email => this.email = email)
        //     .then(email=> console.log(this.email))
        
    },
    watch: {
        '$route.params.emailId' : {
            immediate: true,
            handler(){
                
                const { emailId } = this.$route.params;

                console.log(emailId);
                emailService.getEmailById(emailId)
                    .then(email => {
                        this.email = email;
                        return email;
                    } )
                    
                    .then(email =>{
                        email.isRead = true
                        return email
                    } )
                    .then(email =>{
                        console.log(this.email)
                        return emailService.updateEmail(email)
                    } )
            }
        }
    },
    rendered(){
        // const { emailId } = this.$route.params;
        // emailService.getEmailById(emailId)
        //     .then(email => this.email = email)
        //     .then(email=> console.log(this.email))

        console.log(this.email.id);
        if (!this.email.isRead){
            emailService.getEmailById(this.email.id)
            .then(email => {
                    email.isRead = true;
                })
        }
    }
}