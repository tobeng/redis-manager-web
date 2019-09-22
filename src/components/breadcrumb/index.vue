<template>
    <div id="app" class="breadcrumb">
      <el-breadcrumb separato="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.breadcrumb{
  color: #fff;
}
</style>
