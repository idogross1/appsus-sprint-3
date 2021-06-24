import longText from "../../../cmps/long-text.js"

export default {
    props: ['email'],
    template: `
        <section class="email-preview ">
            <div class="flex">
                <p class="bold">{{email.subject}}: </p>
                <long-text @toggleLength="toggleLength" :text="email.body"></long-text>
                <!-- <button class="show-all" v-if="isLong" @click="showAll" >show all</button> -->
                <router-link v-if="isLong" :to="'/details/'+email.id" class="show-all clean-link">showAll</router-link>
                <!-- <router-link v-if="isLong" :to="'/details/' +email.id " class="show-all clean-link">showAll</router-link> -->
            </div>
        </section>
    `,
    computed: {
        
    },
    components: {
        longText,
    },
    data(){
        return {
            isLong: false,
        }
    },
    methods: {
        toggleLength(){
            console.log('toggling length...');
            this.$emit('toggleLength')
            this.isLong = !this.isLong;
        },
        showAll(){
            console.log('showing all...');

        }
    }
   

}