import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            this is the email list
            <li v-for="email in emails" @click="" @delete="">
                <div class="star" @click="">✰</div>
                <email-preview :email="email" />


            </li>

        </section>
    `,

    components: {
        emailPreview
    }
}