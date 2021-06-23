
export default {
    props: ['email'],
    template: `
        <section class="email-preview">
            <p v-bind:class="{'read': email.isRead, 'unread': !email.isRead}"><span class="bold">{{email.subject}}</span> {{email.body}}</p>
            is read? {{email.isRead}}
        </section>
    `,
   

}