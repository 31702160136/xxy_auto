<template>
  <div class="body">
    <el-row class="title">
      <el-col>习讯云超级自动签到</el-col>
    </el-row>
    <el-row class="username">
      <el-col>
        <el-input type="username" prefix-icon="el-icon-user" v-model="form.account" placeholder="请输入习讯云账号"></el-input>
      </el-col>
    </el-row>
    <el-row class="password">
      <el-col>
        <el-input type="password" prefix-icon="el-icon-key" v-model="form.password" placeholder="请输入习讯云密码"></el-input>
      </el-col>
    </el-row>
    <el-row class="school">
      <el-col>
        <el-select v-model="selectVal" placeholder="请选择学校" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <el-row class="password">
      <el-col>
        <el-input prefix-icon="el-icon-connection" v-model="form.model" placeholder="手机型号(选填)"></el-input>
      </el-col>
    </el-row>
    <el-row class="password">
      <el-col>
        <el-input prefix-icon="el-icon-connection" v-model="form.uuid" placeholder="手机mac(选填)"></el-input>
      </el-col>
    </el-row>
    <el-row class="button">
      <el-col :span="24">
        <el-button type="primary" @click="login()">登录</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    Login
  } from "@/api/index.js"
  import {
    cookie
  } from "@/utils/cookie.js"
  export default {
    data() {
      return {
        selectVal: 924,
        form: {
          account: '',
          password: '',
          model: '',
          uuid: '',
          school_id: ''
        },
        options: [{
          value: 0,
          label: '请选择学校'
        }, {
          value: 924,
          label: '茂名职业技术学院'
        }],
      }
    },
    methods: {
      login() {
        this.form.school_id = this.selectVal.toString()
        console.log(this.form)
        Login(this.form).then(res => {
          if (res.data.code == 0) {
            var name=res.data.data.name
            name=name.substring(name.length-1,name.length)
            this.$message({
              message: "欢迎小"+name+name+"回家",
              type: 'success'
            });
            cookie().setCookie("token", res.data.data.token)
            this.$router.replace("/index")
          } else {
            this.$message.error(res.data.msg);
          }
        })

      }
    }
  }
</script>

<style scoped="login">
  .body {
    margin-top: 30%;
  }

  .title {
    margin-bottom: 30px;
  }

  .username {
    padding: 15px 30px 5px 30px;
  }

  .password {
    padding: 0 30px 15px 30px;
  }

  .school {
    padding: 0 30px 15px 30px;
  }

  .select {
    width: 100%;
  }

  .button button {
    width: 80%;
  }
</style>
