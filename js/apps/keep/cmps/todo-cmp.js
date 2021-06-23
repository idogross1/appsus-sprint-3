export default {
  props: ['todo'],

  template: `
        <article class = "todo-task">
            <p>{{todo.txt}}</p>
        </article>
        `,
};
