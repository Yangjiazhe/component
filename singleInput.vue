<template>
  <popup ref="single"
         @close="cancel">
    <div class="board">
      <input type="text"
             v-model="value"
             :placeholder="title" />
      <div>
        <button @click="ok">确认</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </popup>
</template>

<script>
export default {
  data() {
    return {
      value: null,
      resolve: null,
      title: '',
      validate: null
    }
  },
  methods: {
    show(title, validate = () => true) {
      this.title = title
      this.validate = validate
      this.value = null
      this.$refs.single.show(true)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
      })
    },
    ok() {
      if (!this.validate(this, this.value)) return false

      this.$refs.single.show(false)
      this.resolve({ value: this.value })
    },
    cancel() {
      this.$refs.single.show(false)
      this.resolve(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.board {
  width: 200px;
  height: 100px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
