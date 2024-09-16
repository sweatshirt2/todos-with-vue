export default {
  template: `
    <div class="flex items-center my-5 py-2 px-4 shadow-md flex justify-between cursor-pointer"
      :class="todo.isFinished ? 'border-l-2 border-green-700' : 'border-l-2 border-dashed border-yellow-700' "
      v-if="todo" @click="todo.isFinished = !todo.isFinished">
        {{todo.name}}
        <input class="ml-3" type="checkbox" v-model="todo.isFinished" :key="todo.id">
    </div>
  `,
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  },
  props: {
    todo: {
      type: {
        id: Number,
        name: String,
        isFinished: Boolean,
      },
      default: {},
    }
  }
}