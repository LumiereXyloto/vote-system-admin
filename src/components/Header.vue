<template>
  <header class="cqupt-header">
    <img class="logo" src="@/assets/logo-mini.png">
  </header>
</template>

<script>
export default {
  name: 'CquptHeader'
}
</script>

<style scoped>
.cqupt-header {
  width: 100%;
  height: 44px;
  background: rgba(58,126,89,.7);
  box-shadow: 0 2px 16px rgba(38,66,56,.2);
}
.logo {
    float: left;
    height: 32px;
    margin-left: 16px;
    margin-top: 6px;
}
</style>
