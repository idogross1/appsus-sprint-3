export default {
  template: `
        <section class="pick-color">
            <div class="color color-1" @click="onColor(0)"></div>
            <div class="color color-2"  @click="onColor(1)"></div>
            <div class="color color-3" @click="onColor(2)"></div>
            <div class="color color-4" @click="onColor(3)"></div>
            <div class="color color-5" @click="onColor(4)"></div>
            <div class="color color-6" @click="onColor(5)"></div>
            <div class="color color-7" @click="onColor(6)"></div>
            <div class="color color-8" @click="onColor(7)"></div>
            <div class="color color-9" @click="onColor(8)"></div>
        </section>
    `,

  methods: {
    onColor(idx) {
      const colors = [
        '#ffadad',
        '#ffd6a5',
        '#fdffb6',
        '#caffbf',
        '#9bf6ff',
        '#a0c4ff',
        '#bdb2ff',
        '#ffc6ff',
        '#fffffc',
      ];

      this.$emit('color', colors[idx]);
    },
  },
};
