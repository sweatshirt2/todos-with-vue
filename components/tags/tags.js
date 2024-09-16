export default {
  template: `
     <div class="flex gap-3 mt-5">
        <span v-for="tag in tags" class="px-1 cursor-pointer"
          :class="tag.id === currentTagId ? 'bg-blue-500 text-white' : 'border border-blue-700 text-blue-900'"
          @click="$emit('update:currentTagId', tag.id)" >
        {{ tag.tag }}</span>
    </div>
  `,
  data() {
    return {}
  },
  methods: {
  },
  props: {
    tags: {
      type: Array,
      default: () => [],
    },
    currentTagId: {
      type: {
        tag: String,
        id: Number,
      },
      default: () => {
        return { tag: "All", id: 1, };
      },
    },
  },
  computed: {
  },
}
