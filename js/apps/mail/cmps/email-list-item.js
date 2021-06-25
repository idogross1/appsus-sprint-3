import emailPreview from './email-preview.js'


export default {
    props: ['email'],
    template: `
    <section class="email-list-item flex" v-bind:class="{'read': this.email.isRead, 'unread': !this.email.isRead, 'long-preview': isLong}">
        <!-- <router-link :to="'/details/' +email.id " class="email-link clean-link"> -->
        <email-preview @toggleLength="toggleLength" :email="email" class="email-link"/>
        <!-- </router-link> -->
        <button v-if="email.isRead" @click="toggleReadEmail()" class="toggle-read toggle-read-text  ">mark as unread</button>
        <button v-else @click="toggleReadEmail" class="toggle-read toggle-read-text">mark as read</button>
        <button v-if="email.isRead" @click="toggleReadEmail()" class="toggle-read toggle-read-icon">
            <img class="" src="../../../img/mail/markUnread.png"/>
        </button>
        <button v-else @click="toggleReadEmail()" class="toggle-read toggle-read-icon">
            <img class="" src="../../../img/mail/markRead.png"/>
        </button>
        <!-- <router-link :to="''/edit/'+email.subject+'/'+email.body+'">reply</router-link> -->
        <router-link class="clean-link" :to="'/edit/'+email.subject+'/'+email.body" @send="replyToEmail">reply</router-link>
        <div class="star" @click="toggleStar()" :class="isStarredClass" >✰</div>
        <div class="select" @click="select()"><p v-if="isSelected">✓</p></div>
    </section>
    `,
    computed: {
        isStarredClass(){
            return {'starred': this.currEmail.isStarred}
        },
        isReadClass(){
            return "{'read': this.email.isRead, 'unread': !this.email.isRead}"
        },
        // isSelectedClass(){
        //     return {'selected': this.isSelected}
        // }
    },
    data(){
        return {
            currEmail: this.email,
            isSelected: false,
            isLong: false,
        }
    },
    methods: {
        toggleReadEmail(){
            this.$emit('toggleReadEmail', this.email)
        },
        toggleStar(){
            this.currEmail.isStarred = !(this.currEmail.isStarred);
            console.log(this.currEmail);
            this.$emit('toggleStar', this.currEmail)
        },
        // isSelected(){
            //     this.$emit('isSelected', this.email)
            // },
        select(){
            this.isSelected = !this.isSelected;
            this.$emit('select', this.email)
        },
        emailEvent(evName){
            this.$emit(evName, this.email)
        },
        replyToEmail(email){
            
        },
        toggleLength(){
            console.log('toggling length in email-list-item');
            this.isLong = !this.isLong;
        }
    },
    components: {
        emailPreview,
    }





}