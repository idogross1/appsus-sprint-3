
export default {
    props: ['email'],
    template: `
        <section class="email-preview flex">
            <p ><span class="bold">{{email.subject}}: </span>{{email.body}}</p>
        </section>
    `,
    computed: {

    }
   

}