import { emailService } from "../services/email-service.js";


export default {
    template: `
        <section class="email-details email-container flex flex-col">
            <!-- <div class="email-container flex flex-col"> -->
                <!-- <div class="email-subject"></div> -->
                <p class="message">Current email</p>
                <textarea class="email-subject" rows="1" cols="80">{{email.subject}} </textarea>
                <textarea class="emailBody" rows="8" cols="80">{{email.body}}</textarea>
                <router-link class="email-button" :to="'/mail'">Close</router-link>
                
            <!-- </div> -->
    
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
                debugger;
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
        console.log(this.email.id);
        if (!this.currEmail.isRead){
            emailService.getEmailById(this.currEmail.id)
            .then(email => {
                    email.isRead = true;
                })
        }
    }
}