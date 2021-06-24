import { emailService } from "../services/email-service.js";


export default {
    // props: ['currEmail'],
    template: `
        <section class="email-details">
            these are the email details
            {{email}}
            <router-link :to="'/mail'">Close</router-link>
        </section>
    `,

    data(){
        return {
            email:this.currEmail,
        }
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
                    // .then(email => {
                    //     return emailService.getEmailById(email.id)
                    // })
                    // .then(email => {
                    //     console.log('in serice',email);
                    // })
            }
        }
    },
    rendered(){
        console.log(this.email.id);
        if (!this.currEmail.isRead){
            emailService.getEmailById(this.currEmail.id)
            .then(email => {
                    email.isRead = true;
                })
        }
    }
}