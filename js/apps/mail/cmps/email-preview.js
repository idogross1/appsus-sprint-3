
export default {
    props: ['email'],
    template: `
        <section class="email-preview">
            <p v-bind:class="isReadClass"><span class="bold">{{email.subject}}</span> {{email.body}}</p>
        </section>
    `,
    computed: {
        isReadClass(){
            return {'read': this.email.isRead, 'unread': !this.email.isRead}
        }
    }
   

}