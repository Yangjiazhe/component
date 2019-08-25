<template>
  <div ref='drop'
       class="drop"
       v-if="isShow"
       @click.stop="_=>{}">
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  watch: {
    isShow(val) {
      if (!val) return document.removeEventListener('click', this.onClick)
      document.addEventListener('click', this.onClick)
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    onClick(e) {
      this.isShow = false
    }
  }
}
</script>

<style lang="scss" scoped>
.drop {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #333;
  border-radius: 5px;
  padding: 10px;
  width: 130px;
  display: block;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    filter: invert(100%);
  }
}
</style>
