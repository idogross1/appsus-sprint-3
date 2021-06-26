import emailListItem from "./email-list-item.js";

export default {
    props: ['emails'],
    template: `
        <section class="email-list" :style='{height: emailListHeight}'>
            <li v-for="email in emails" @delete="">
               <email-list-item :email="email" @replyToEmail="replyToEmail" @isSelected="isSelected" @toggleReadEmail="toggleReadEmail" @toggleStar="toggleStar" @select="select"/>
            </li>

        </section>
    `,
    data(){
        return {
            selectedEmails: []
        }
    },
    components: {
        emailListItem,
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
        replyToEmail(email){
            this.$emit('replyToEmail', email)
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
    },
    created(){
        console.log(window.innerHeight - 255 - 10);

    },
    computed: {
        emailListHeight(){
            return window.innerHeight - 255 - 10 + 'px';
        }
        
    }
}