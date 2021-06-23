export default {
    props:['text'],
    template: `
    <div class="long-text" @click="toggleDescriptionLength">
        <div>{{preparedDescription}}</div>
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
        }
    },
    computed: {
        preparedDescription(){
            if (this.isLong) return this.text;
            else return this.text.substr(0,100);
        },
    }
}
