export default {
  props: ['note'],

  template: `
    <article class = "note-txt">
        <p>{{note.info.txt}}</p>
    </article>
    `,
};
