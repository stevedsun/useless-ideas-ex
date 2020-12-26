<template>
<div class="login">
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
    <el-form-item label="邮箱" prop="username">
      <el-input v-model="ruleForm.username" type='email'></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password" type='password'></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="submitForm('ruleForm')">登录</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="info" @click="register()">注册</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [{
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur'
          },
        ],
        password: [{
          required: true,
          min: 6,
          max: 20,
          message: '长度在 6 到 20 个字符',
          trigger: 'blur'
        }],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let loginData = {
            username: this.ruleForm.username,
            password: this.ruleForm.password
          }
          console.log(loginData)

          axios.post("/b/login", loginData).then(response => {
              this.$router.push({ path: '/i/dashboard' })
              console.log(response.data)
          })
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    register() {
      this.$router.push({ path: '/register' })
    }
  }
}
</script>

<style lang="less" scoped>

.login {
  max-width: 500px;
  min-height: 680px;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .el-button {
    width: 100%;
  }

}

</style>