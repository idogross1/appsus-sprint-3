import longText from "../../../cmps/long-text.js"
import { emailService } from "../services/email-service.js";

export default {
    props: ['email'],
    template: `
        <section class="email-preview flex" @click="toggleLength" >
            <!-- <div class="flex"> -->
                <long-text :text="variableLengthText"></long-text>
                <router-link v-if="isLong" :to="'/details/'+email.id" class="show-all clean-link"><div @click="setReadFilter('all')"><img src="../../../../img/mail/expand.png">  </div></router-link>
            <!-- </div> -->
        </section>
    `,
    computed: {
        variableLengthText(){
            return this.email.subject+': '+this.email.body;

        }, 
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
            console.log('toggling length...', this.isLong);
            this.$emit('toggleLength')
            this.isLong = !this.isLong;
        },
        showAll(){
            console.log('showing all...');

        }
    }
   

}