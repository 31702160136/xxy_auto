<template>
  <div class="body">
    <el-row type="flex" align="middle">
      <el-col class="portrait" :span="8"><img :src="userData.portrait_uri"></el-col>
      <el-col :span="16" style="text-align: left;">
        <el-row>
          <el-col>班级：{{ userData.class_name }}</el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col>姓名：{{ userData.name }}</el-col>
        </el-row>
        <br/>
        <el-row>
          <el-col>余额：{{ userData.days }}天</el-col>
        </el-row>
        <el-row>
          <el-col><a style="font-size: 10px;color:#999999">默认每天早上9点30分签到</a></el-col>
		  <el-col><a style="font-size: 10px;color:#999999">新用户赠送7天自动签到天数</a></el-col>
		  <el-col><a style="font-size: 10px;color:#999999">加微信<a style="color: red;">qw1012117138</a>获取更多签到天数</a></el-col>
        </el-row>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">
        <el-button type="primary" @click="saveInfo()">保存</el-button>
      </el-col>
      <el-col :span="16" style="text-align: right; padding-right: 30px;">
        自动签到&nbsp;&nbsp;&nbsp;
        <el-switch v-model="userData.status" @change="updateStatus()" active-color="#13ce66" inactive-color="#999999"
                   :active-value="1" :inactive-value="2">
        </el-switch>
      </el-col>
    </el-row>
    <br/>
    <br/>
	<el-row type="flex" align="middle">
	  <el-col :span="6">
	    签到时间
	  </el-col>
	  <el-col :span="18">
		   <el-time-picker
		      v-model="signTime"
		      :picker-options="{
		        selectableRange: '00:00:01 - 23:59:59'
		      }"
		      placeholder="任意时间点">
		    </el-time-picker>
	  </el-col>
	</el-row>
	<br/>
    <el-row type="flex" align="middle">
      <el-col :span="6">
        签到地址
      </el-col>
      <el-col :span="18">
        <el-input v-model="userData.address"></el-input>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="6">
        签到单位
      </el-col>
      <el-col :span="18">
        <el-input v-model="userData.address_name"></el-input>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="24">
        <a style="color: red; font-size: 17px;" href="https://jingweidu.bmcx.com/">点击获取经纬度</a>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="6">
        经度(longitude)
      </el-col>
      <el-col :span="18">
        <el-input v-model="userData.longitude"></el-input>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="6">
        纬度(latitude)
      </el-col>
      <el-col :span="18">
        <el-input v-model="userData.latitude"></el-input>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周一</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_1" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周二</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_2" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周三</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_3" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周四</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_4" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周五</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_5" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周六</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_6" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
    <br/>
    <el-row type="flex" align="middle">
      <el-col :span="8">周日</el-col>
      <el-col :span="16">
        <el-select v-model="userData.day_7" placeholder="签到方式(默认上班)" class="select">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {
  FindUserInfo,
  SaveInfo,
  UpdateStatus
} from "@/api/index.js"

export default {
  data() {
    return {
		signTime:"",
      options: [{
        value: 0,
        label: "签到方式(默认上班)"
      }, {
        value: 1,
        label: '上班'
      }, {
        value: 2,
        label: '外出'
      }, {
        value: 3,
        label: '假期'
      }, {
        value: 4,
        label: '请假'
      }, {
        value: 5,
        label: '轮岗'
      }, {
        value: 6,
        label: '回校'
      }, {
        value: 7,
        label: '外宿'
      }, {
        value: 8,
        label: '在家'
      }, {
        value: 9,
        label: '下班'
      }],
      value: '',
      iswitch: 2,
      userData: {},
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods: {
    getUserInfo() {
		
      FindUserInfo().then(res => {
        if (res.data.code == 0) {
          this.userData = res.data.data
		  this.userData.signin_time=this.dateFormat("YYYY-mm-dd",new Date())+" "+this.userData.signin_time
		  this.signTime=this.userData.signin_time
        } else {
          this.$message("请登录");
          this.$router.replace("/login")
        }
      })
    },
	dateFormat(fmt, date) {
	    let ret;
	    const opt = {
	        "Y+": date.getFullYear().toString(),        // 年
	        "m+": (date.getMonth() + 1).toString(),     // 月
	        "d+": date.getDate().toString(),            // 日
	        "H+": date.getHours().toString(),           // 时
	        "M+": date.getMinutes().toString(),         // 分
	        "S+": date.getSeconds().toString()          // 秒
	        // 有其他格式化字符需求可以继续添加，必须转化成字符串
	    };
	    for (let k in opt) {
	        ret = new RegExp("(" + k + ")").exec(fmt);
	        if (ret) {
	            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
	        };
	    };
	    return fmt;
	},
    saveInfo() {
		if (this.signTime!=""){
			var myDate=new Date(this.signTime);
			var hour=myDate.getHours().toString()
			if (hour.length==1){
				hour="0"+hour
			}
			var minutes=myDate.getMinutes().toString()
			if (minutes.length==1){
				minutes="0"+minutes
			}
			var seconds=myDate.getSeconds().toString()
			if (seconds.length==1){
				seconds="0"+seconds
			}
			this.userData.signin_time=hour+":"+minutes+":"+seconds
		}
      SaveInfo(this.userData).then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: '保存成功',
            type: 'success'
          });
        } else {
          this.$message.error("保存失败");
        }
        this.getUserInfo()
      })
    },
    updateStatus() {
      UpdateStatus().then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: res.data.msg,
            type: 'success'
          });
        } else {
          this.$message.error(res.data.msg);
        }
        this.getUserInfo()
      })
    }
  }
}
</script>

<style scoped="index">
.body {
  padding: 10px;
}

.portrait img {
  background: chocolate;
  width: 80px;
  height: 80px;
  border-radius: 50px;
}

.select {
  width: 180px;
}
</style>
