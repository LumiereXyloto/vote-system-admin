<template>
  <div class="bg">
    <cqupt-header />
    <transition name="el-zoom-in-top">
    <div v-show="showTitle" class="transition-box">
      <p class="title">教育基金会活动投票系统</p>
      <p class="title-eg">Jyjjh·of·Cqupt</p>
      <div class="login-container">
        <el-form label-position="left" label-width="70px">
          <el-form-item label="用户名">
            <el-input v-model="username"></el-input>
          </el-form-item>
          <el-form-item label="用户密码">
            <el-input v-model="password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    </transition>
    <auth-footer font-color="#fff" />
  </div>
</template>

<script>
import CquptHeader from '../components/Header'
import AuthFooter from '../components/Footer'
export default {
  data: () => ({
    showTitle: false,
    username: '',
    password: ''
  }),
  components: {
    CquptHeader,
    AuthFooter
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.showTitle = true
    }, 500)
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>

<style>
.el-form-item__label {
  color:#fff;
}
</style>
<style scoped>
.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../assets/login_bg.jpg');
  background-repeat: no-repeat;
  background-repeat: no-repeat;
  background-attachment:fixed;
}
.title {
  text-align: center;
  margin-top: 180px;
  font-size: 32px;
  margin-bottom: 16px;
  letter-spacing: 31px;
  color: #fff;
  font-weight: bold;
}
.title-eg {
  text-align: center;
  margin-bottom: 100px;
  font-size: 14px;
  letter-spacing: 22px;
  color: #fff;
  font-weight: bold;
}
.login-container {
  width: 420px;
  margin: 0 auto;
}
.el-row {
  margin-bottom: 20px;
}
span {
  display: block;
  line-height: 40px;
  font-weight: bold;
  color: #fff;
}
</style>>
