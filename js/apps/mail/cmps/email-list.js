import emailPreview from "./email-preview.js"

export default {
    props: ['emails'],
    template: `
        <section class="email-list">
            <li v-for="email in emails" @delete="" class="flex">
                <router-link :to="'/details/' +email.id " class="email-link">
                <email-preview @read="" :email="email" />
            </router-link>
            <button v-if="email.isRead" @click="toggleReadEmail(email)">mark as unread</button>
            <button v-else @click="toggleReadEmail(email)">mark as read</button>
            <div class="star" @click="toggleStar(email)">✰</div>
            <div class="select" @click="select(email)"><p v-if="isSelected(email)">✓</p></div>
            </li>

        </section>
    `,
    data(){
        return {
            selectedEmails: []
        }
    },
    components: {
        emailPreview
    },
    computed: {
    },
    methods: {
        toggleStar(email){
            this.$emit('toggleStar', email);
        },
        isSelected(email){
            return this.selectedEmails.includes(email)
        },
        toggleReadEmail(email){
            if (email.isRead) this.$emit('unReadEmail', email.id);
            else this.$emit('readEmail', email.id);
        },
        select(email){
            console.log('selecting the email...');
            if (this.selectedEmails.includes(email)) {
                var index = this.selectedEmails.findIndex(testEmail => email.id === testEmail.id);
                this.selectedEmails.splice(index, 1);
            } else {
                this.selectedEmails.push(email);
            }
            this.$emit('selectEmails', this.selectedEmails)
        }
    }
}