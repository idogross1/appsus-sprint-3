export default {
    template:`
        <section class="email-filter">
            this is the email filter
            <input v-model="filterStr" type="text" @input="filter" placeholder="search...">
        </section>
    `,
    data(){
        return{
            filterStr:''
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterStr);
        }
    }
}