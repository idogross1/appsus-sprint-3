import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <li v-for="email in emails" @delete="">
                <div class="star" @click="">✰</div>
                    
                <router-link :to="'/details/' +email.id ">
                    <email-preview @read="readEmail" :email="email" />
                </router-link>

            </li>

        </section>
    `,

    components: {
        emailPreview
    },
    methods: {
        readEmail(email){
            // debugger;
            // console.log('reading the email');
            console.log('email id thats read', emailId);
            this.$emit('readEmail', emailId);
            
        }
    }
}