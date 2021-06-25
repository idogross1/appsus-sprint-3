export default {
  template: `
    <section class="note-search">
      <input type="search" v-model="str" @input="filter" placeholder="Search...">
      <i class="fas fa-search"></i>
    </section>
    `,

  data() {
    return {
      str: '',
    };
  },

  methods: {
    filter() {
      console.log('str--note-search', this.str);
      this.$emit('filter', this.str);
    },
  },
};
