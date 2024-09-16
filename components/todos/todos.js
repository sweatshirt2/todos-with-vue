import Todo from "./todo.js";
import Tags from "../tags/tags.js";

export default {
  components: {
    Todo,
    Tags,
  },
  template: `
    <div>
      <Tags v-model:currentTagId="currentTagId" :tags="tags"></Tags>
      <h1 class="text-2xl text-sky-800 font-semibold mt-3 mb-1"><slot /></h1>
      <ul>
        <li class="mb-1 text-lg" v-for="todo in shownTodos">
          <Todo :todo="todo"></Todo>
        </li>
      </ul>
    </div>
  `,
  data() {
    return {
      currentTagId: 1,
    }
  },
  props: {
    todos: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    tags() {
      const tags = [...new Set([{ tag: "All", id: 1 }, ...this.todos.map(todo => todo.tag)])];
      let uniqueIds = new Set([]);
      return tags.filter(tag => {
        if (uniqueIds.has(tag.id)) {
          return false;
        }
        uniqueIds.add(tag.id);
        return true;
      });
    },

    shownTodos() {
      if (this.currentTagId === 1) {
        return this.todos;
      }
      return this.todos.filter(todo => todo.tag.id === this.currentTagId);
    }
  }
}
