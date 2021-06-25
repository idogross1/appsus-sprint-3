import { eventBus } from "../services/event-bus-service.js";

export default {
    template: `
        <div class="user-msg" :class="msg.type">
            <p>{{msg.txt}}</p>
        </div>
    `,
    data() {
        return {
            // msg: null,
            msg: {
                text: 'I am a message',
                type: 'success' 
            }  
        };
    },
    created() {
        eventBus.$on('show-msg', this.showMsg);
        console.log('user msg created');
    },
    destroyed(){
        eventBus.$off('show-msg', this.showMsg);
    },
    methods: {
        showMsg(msg) {
            console.log('showing the message', msg);
            this.msg = msg;
            setTimeout(() => {
                this.msg = null;
            }, 3000);
        }
    }
};