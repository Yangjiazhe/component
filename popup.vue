<template>
  <div class="popup"
       v-if="isShow"
       @click="isShow=false">
    <div @click.stop="_=>{}">
      <slot ref="ctx" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { isShow: false }
  },
  mounted() {},
  methods: {
    show(val) {
      this.isShow = val
    }
  }
}
</script>
<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #888d;
  text-align: center;
}
</style>
