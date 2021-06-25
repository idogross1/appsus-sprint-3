export default {
    props:['text'],
    template: `
    <div class="long-text" :class="{'long': isLong}" @click="toggleDescriptionLength">
        {{preparedText}}
    </div>
    `,
    data(){
        return{
            isLong: false,
        }
    },
    methods: {
        toggleDescriptionLength(){
            console.log('toggling desc length...');
            this.isLong = !this.isLong;
        }
    },
    computed: {
        preparedText(){
            if (this.isLong) return this.text.substr(0,300);
            else return this.text.substr(0,100);
        },
    }
}
