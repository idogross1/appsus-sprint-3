import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            this is the email list
            <li v-for="email in emails" @click="readEmail" @delete="">
                <div class="star" @click="">✰</div>
                <email-preview :email="email" />
                <router-link :to="'/mail/' +email.id ">Read</router-link>

            </li>

        </section>
    `,

    components: {
        emailPreview
    },
    methods: {
        readEmail(){
            console.log('reading the email');
            const { emailId } = this.$route.params;
        }
    }
}