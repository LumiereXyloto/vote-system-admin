<template>
  <div class="layout-container">
    <cqupt-header />
    <el-container>
      <el-aside width="220px" style="height: 100%;background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1']">
          <el-submenu v-for="sub in navList" :index="sub.subIndex" :key="sub.subIndex">
            <template slot="title"><i class="el-icon-message"></i>{{sub.submenu}}</template>
            <router-link  v-for="item in sub.items" :index="item.itemIndex" :key="item.itemIndex" :to="item.path">
              <el-menu-item :index="item.itemIndex">
                {{item.title}}
              </el-menu-item>
            </router-link>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CquptHeader from '../components/Header'
export default {
  components: {
    CquptHeader
  },
  data: () => ({
    navList: [
      {
        submenu: '导航一',
        subIndex: '1',
        items: [
          { title: '测试1', path: '/test1', itemIndex: '1-1' },
          { title: '测试2', path: '/test2', itemIndex: '1-2' }
        ]
      }
    ]
  })
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
</style>
