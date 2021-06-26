export default {
    template:`
        <section class="email-filter">
            <input v-model="filterStr" type="search" @input="filter" placeholder="search...">
            <!-- <i class="fas fa-search"></i> -->
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