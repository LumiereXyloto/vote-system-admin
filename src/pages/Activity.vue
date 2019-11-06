<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="title"
      label="活动名称"
      width="180">
    </el-table-column>
    <el-table-column
      prop="introduction"
      label="活动介绍"
      width="180">
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="deadLine"
      label="截止时间"
      width="180">
    </el-table-column>
    <el-table-column
      prop="condition"
      label="活动状态"
      width="180">
    </el-table-column>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        activityId: 1,
        condition: '进行中',
        createTime: '2016-05-02',
        deadLine: '2019-12-23',
        detail: '',
        introduction: '',
        title: '最美毕业季图片组'
      }, {
        activityId: 2,
        condition: '进行中',
        createTime: '2016-05-02',
        deadLine: '2019-12-23',
        detail: '',
        introduction: '',
        title: ''
      }, {
        activityId: 3,
        condition: '进行中',
        createTime: '2016-05-02',
        deadLine: '2019-12-23',
        detail: '',
        introduction: '',
        title: '最美毕业季征文组'
      }, {
        activityId: 4,
        condition: '进行中',
        createTime: '2016-05-02',
        deadLine: '2019-12-23',
        detail: '',
        introduction: '',
        title: '最美毕业季视频组'
      }]
    }
  },
  methods: {
    handleClick (row) {
      console.log(row)
    }
  }
}
</script>
