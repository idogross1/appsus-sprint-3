// import { emailService } from "../services/email-service.js"

export default {
    props: ['emails'],
    template:`
        <section class="email-status">
            this is the email status
            <p>Read: {{readEmails}}</p>
            <p>Unread: {{unreadEmails}}</p>
            <p>Total: {{totalEmails}}</p>
        </section>
    `,
    computed: {
        readEmails(){
            var readEmails = this.emails.filter(email => email.isRead)
            return readEmails.length;
        },
        unreadEmails(){
            var unreadEmails = this.emails.filter(email => !email.isRead)
            return unreadEmails.length;
        },
        totalEmails(){
            return this.emails.length;
        }
    }
}