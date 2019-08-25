<template>
  <popup ref="single"
         @close="cancel">
    <div class="board">
      <div>
        <div>{{text}}</div><br />
        <button @click="ok">确认</button>
        <button @click="cancel">取消</button>
      </div>
    </div>
  </popup>
</template>

<script>
export default {
  props: {
    text: {
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    show() {
      this.$refs.single.show(true)
      return new Promise((resolve, reject) => {
        this.resolve = resolve
      })
    },
    ok() {
      this.$refs.single.show(false)
      this.resolve('ok')
    },
    cancel() {
      this.$refs.single.show(false)
      this.resolve('cancel')
    }
  }
}
</script>
<style lang="scss" scoped>
.board {
  width: 220px;
  height: 90px;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  div > button {
    background-color: white;
    color: red;
    border: solid 1px red;
    border-radius: 25px;
    width: 70px;
    height: 25px;
    margin: 0 10px;
  }
  button:nth-child(3) {
    background-color: red;
    color: white;
  }
}
</style>
