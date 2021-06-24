export default {
  template: `
    <section>
      <input type="search" v-model="str" @input="filter" placeholder="Search...">
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
