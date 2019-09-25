<template>
  <div id="profile">
    <section class="input-area">
      <h2>个人信息</h2>
      <el-form label-position="top"
               label-width="50px">
        <el-form-item label="姓名">
          <el-input v-model="profile.name"
                    placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-input v-model="profile.gender"
                    placeholder="请输入性别"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="profile.age"
                    placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="profile.city"
                    placeholder="请输入期望薪资"></el-input>
        </el-form-item>
        <el-form-item label="意向岗位">
          <el-input v-model="profile.job"
                    placeholder="请输入意向岗位"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="profile.weChat"
                    placeholder="请输入意向岗位"></el-input>
        </el-form-item>
        <el-form-item label="微信">
          <el-input v-model="profile.weChat"
                    placeholder="请输入微信号"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="profile.mobile"
                    placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="profile.email"
                    placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
    </section>
  </div>
</template>
<script>
export default {
  name: 'EditProfile',
  props: ['profile']
}
</script>
<style lang="stylus" scoped>
#profile {
  .input-area {
    margin-bottom: 30px;

    .el-form-item {
      margin-top: 20px;
    }
  }
}

.el-input {
  width: 100%;
}
</style>
