import AddTag from "./tags/addtag.js";
import Todos from "./todos/todos.js";
import AddTodo from "./todos/addtodo.js";

export default {
  components: {
    Todos,
    AddTodo,
    AddTag,
  },
  template: `
    <AddTag @tag="addTag"></AddTag>
    <Todos :todos="ongoingTasks" v-show="ongoingTasks.length">In Progress</Todos>
    <Todos :todos="completedTasks" v-show="completedTasks.length">Finished</Todos>
    <AddTodo @todo="addTodo" :tags="tags"></AddTodo>
  `,
  data() {
    return {
      greeting: 'hello...',
      todo: "",
      todos: [
        { name: 'Chemistry Lab Report', id: 1, isFinished: false, tag: { tag: "Educational", id: 2 }, },
        { name: 'Physics Lab Report', id: 2, isFinished: false, tag: { tag: "Educational", id: 2 }, },
        { name: 'Laundry', id: 3, isFinished: false, tag: { tag: "Miscellaneous", id: 5 }, },
        { name: 'Push ups', id: 4, isFinished: false, tag: { tag: "Sports", id: 3 }, },
        { name: 'Watch Seinfeld', id: 5, isFinished: false, tag: { tag: "Entertainment", id: 4 }, },
      ],
      // tags: ["All", "Educational", "Sports", "Entertainment", "Miscellaneous"],
      tags: [
        { tag: "All", id: 1, },
        { tag: "Educational", id: 2, },
        { tag: "Sports", id: 3, },
        { tag: "Entertainment", id: 4, },
        { tag: "Miscellaneous", id: 5, }
      ],
    }
  },
  mounted() {
    setTimeout(() => {
      this.greeting = 'hello, hustlers!';
    }, 3000);
  },
  computed: {
    completedTasks() {
      return this.todos.filter(todo => todo.isFinished);
    },
    ongoingTasks() {
      return this.todos.filter(todo => !todo.isFinished)
    },
  },
  methods: {
    addTodo(todo) {
      this.todos.push({ name: todo.name, isFinished: false, id: this.todos.length + 1, tag: todo.tag });
    },
    addTag(tag) {
      this.tags.push({ tag: tag, id: this.tags.length + 1 });
    },
  },
}
