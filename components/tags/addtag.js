export default {
  template: `
    <div class="mt-8 flex items-center">
      <input class="border border-black mr-3 py-1 px-2" type="text" v-model="tag" />
      <button class="bg-slate-700 text-white text-lg font-semibold py-1 px-2 rounded-sm"
        :class="{'cursor-not-allowed': !tag}" @click="addTag" :disabled="!tag" >
      Add Tag</button>
    </div>
  `,
  data() {
    return {
      tag: "",
    }
  },
  methods: {
    addTag() {
      if (this.tag) {
        this.$emit('tag', this.tag);
        this.tag = "";
      }
    }
  },
}
