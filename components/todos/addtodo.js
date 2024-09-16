export default {
  template: `
    <div class="mt-8 flex items-center">
      <input class="border border-black mr-3 py-1 px-2" type="text" v-model="todo.name" />
      <select class="bg-gray-300 w-40 p-2 mr-4" v-model="todo.tagId">
        <option v-for="tag in tags" :value="tag.id">{{ tag.tag }}</option>
      </select>
      <button class="bg-blue-700 text-white text-lg font-semibold py-1 px-2 rounded-sm"
        :class="{'cursor-not-allowed': !todo.name}" @click="addTodo" :disabled="!todo.name" >
      Add Todo</button>
    </div>
  `,
  data() {
    return {
      todo: { name: "", tagId: 1, }
    };
  },
  methods: {
    addTodo() {
      if (this.todo) {
        this.$emit('todo', this.todo);
        this.todo = { name: "", tagId: 1, };
      }
    }
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    }
  },
}
