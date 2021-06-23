import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <li v-for="email in emails" @delete="" class="flex">
                <router-link :to="'/details/' +email.id ">
                <email-preview @read="readEmail" :email="email" />
            </router-link>
            <button>mark as read/unread</button>
            <div class="star" @click="">✰</div>
            </li>

        </section>
    `,

    components: {
        emailPreview
    },
    methods: {
        readEmail(email){
            console.log('email id thats read', emailId);
            this.$emit('readEmail', emailId);
            
        }
    }
}