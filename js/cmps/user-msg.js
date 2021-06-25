import { eventBus } from '../services/event-bus-service.js';

export default {
  template: `
        <!-- <div v-if="msg" class="user-msg" :class="msg.type"> -->
        <div v-if="msg" class="user-msg">
            <p>{{msg.txt}}</p>
            <div class="close-msg" @click="closeMsg"><i class="far fa-times-circle"></i></div>
        </div>
    `,
  data() {
    return {
      msg: null,
    };
  },
  created() {
    eventBus.$on('show-msg', this.showMsg);
  },
  destroyed() {
    eventBus.$off('show-msg', this.showMsg);
  },
  methods: {
    showMsg(msg) {
      console.log(msg);
      this.msg = msg;
      setTimeout(() => {
        console.log('test');
        this.msg = null;
      }, 3000);
    },

    closeMsg() {
      this.msg = null;
    },
  },
};
