export default {
    props:['text'],
    template: `
    <div class="long-text" :class="{'long': isLong}" @click="toggleDescriptionLength">
        {{preparedText}}
            <!-- <p class="length" v-if="!isLong" @click="toggleDescriptionLength">show more</p>
            <p class="length" v-if="isLong" @click="toggleDescriptionLength">show less</p> -->
    </div>
    `,
    data(){
        return{
            isLong: false,
        }
    },
    methods: {
        toggleDescriptionLength(){
            this.isLong = !this.isLong;
            this.$emit('toggleLength')
        }
    },
    computed: {
        preparedText(){
            if (this.isLong) return this.text.substr(0,300);
            else return this.text.substr(0,100);
        },
    }
}
