<template>
  <div class="layout-container">
    <cqupt-header />
    <el-container>
      <el-aside width="220px" style="height: 100%;background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']" :default-active="defaultActive">
          <el-submenu v-for="sub in navList" :index="sub.subIndex" :key="sub.subIndex">
            <template slot="title"><i :class="sub.icon"></i>{{sub.submenu}}</template>
            <router-link  v-for="item in sub.items" :index="item.itemIndex" :key="item.itemIndex" :to="item.path">
              <el-menu-item :index="item.itemIndex" @click="getPath">
                {{item.title}}
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="this.$router.history.current.name !== 'layout'">{{this.$router.history.current.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
        <auth-footer font-color="#000"/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CquptHeader from '../components/Header'
import AuthFooter from '../components/Footer'
export default {
  components: {
    CquptHeader,
    AuthFooter
  },
  data: () => ({
    navList: [
      {
        submenu: '导航一',
        subIndex: '1',
        icon: 'el-icon-date',
        items: [
          { title: '测试1', path: '/test1', itemIndex: '1-1' },
          { title: '测试2', path: '/test2', itemIndex: '1-2' }
        ]
      }
    ],
    defaultActive: '1-1'
  }),
  methods: {
    getPath () {
      console.log(this.$router)
    }
  }
}
</script>

<style scoped>
.layout-container {
  position: fixed;
  height: 100%;
  width: 100%;
}
.el-container {
  border: 1px solid #eee;
  height: 100%;
}
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>
