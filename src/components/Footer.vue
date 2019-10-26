<template>
  <footer :style="{color:fontColor}">&copy;Copyright 2019 LumiereXyloto/重邮教育基金会信息化部</footer>
</template>

<script>
export default {
  props: ['fontColor']
}
</script>

<style scoped>
footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  font-size: 12px;
  letter-spacing: 1px;
  text-align: center;
  color: #000;
}
</style>
