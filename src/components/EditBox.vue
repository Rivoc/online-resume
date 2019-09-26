<template>
  <div id="edit-box"
       ref="editBox">
    <section class="sideBar">
      <ul>
        <li @click="currentTab=1"
            :class="{active:(currentTab===1)}">
          <i class="
            el-icon-user"></i>
          <p>个人信息</p>
        </li>
        <li @click="currentTab=2"
            :class="{active:(currentTab===2)}">
          <i class="
            el-icon-suitcase-1"></i>
          <p>工作经历</p>
        </li>
        <li @click="currentTab=3"
            :class="{active:(currentTab===3)}">
          <i class="el-icon-setting"></i>
          <p>项目经历</p>
        </li>
        <li @click="currentTab=4"
            :class="{active:(currentTab===4)}">
          <i class="el-icon-setting"></i>
          <p>教育经历</p>
        </li>
        <li @click="currentTab=5"
            :class="{active:(currentTab===5)}">
          <i class="el-icon-setting"></i>
          <p>获奖经历</p>
        </li>
        <li @click="currentTab=7"
            :class="{active:(currentTab===7)}">
          <i class="el-icon-setting"></i>
          <p>技能/其它</p>
        </li>
        <li @click="currentTab=8"
            :class="{active:(currentTab===8)}">
          <i class="el-icon-setting"></i>
          <p>校园经历</p>
        </li>
      </ul>
    </section>
    <section class="edit-container">
      <div v-show="(currentTab===1)">
        <edit-profile :profile="resume.profile"></edit-profile>
      </div>
      <div v-show="(currentTab===2)">
        <edit-rest :labels="{company:'公司名称',date:'工作时间',content:'工作内容',duty:'担任职务'}"
                   :title="'工作经历'"
                   :restList="resume.work"></edit-rest>
      </div>
      <div v-show="(currentTab===3)">
        <edit-rest :labels="{name:'项目名称',introduce:'项目介绍'}"
                   :title="'项目经历'"
                   :restList="resume.project"></edit-rest>
      </div>
      <div v-show="(currentTab===4)">
        <edit-rest :labels="{school:'学校名称',time:'就读时间',degree:'学历',major:'主修课程'}"
                   :title="'教育经历'"
                   :restList="resume.education"></edit-rest>
      </div>
      <div v-show="(currentTab===5)">
        <edit-rest :labels="{name:'奖项名称',time:'获奖时间'}"
                   :title="'获奖经历'"
                   :restList="resume.award"></edit-rest>
      </div>
      <div v-show="(currentTab===6)">
        <edit-rest :labels="{mobile:'手机',WeChat:'微信',email:'邮箱'}"
                   :title="'联系方式'"
                   :restList="resume.contact"></edit-rest>
      </div>
      <div v-show="(currentTab===7)">
        <edit-skills :labels="{title:'技能',desc:'描述1'}"
                     :title="'技能/其它'"
                     :skillList="resume.skills"></edit-skills>
      </div>
      <div v-show="(currentTab===8)">
        <edit-rest :labels="{desc:'描述',date:'时间',duty:'担任角色'}"
                   :title="'校园经历'"
                   :restList="resume.schoolExp"></edit-rest>
      </div>

    </section>

  </div>

</template>
<script>

import EditProfile from './EditProfile'
import EditRest from './EditRest'
import EditSkills from './EditSkills'
export default {
  name: 'EditBox',
  props: ['resume'],
  components: {
    EditProfile,
    EditRest,
    EditSkills
  },

  data () {
    return {
      currentTab: 1
    }
  },
  mounted () {
    let _this = this
    this.bus.$on('custResume', function () {
      _this.$refs.editBox.style.cssText = 'transform:translate(0)'
    })
  }

}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

#edit-box {
  transform: translateX(-110%);
  transition: all 0.5s ease-out;
  position: relative;
  width: 35%;
  height: 80%;
  display: flex;
  border-radius: 5px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-right: 20px;

  .sideBar {
    width: 23%;
    text-align: center;
    font-family: 'Franklin Gothic Demi';
    background-color: $mainColor;
    color: #fff;

    li {
      padding: 30px 16px;
    }

    .active {
      background: #fff;
      color: #333;
    }

    p {
      font-family: 'Franklin Gothic Demi';
      white-space: no-wrap;
    }

    i {
      font-size: 20px;
    }
  }

  .edit-container {
    overflow-y: auto;
    height: calc(100vh - 30px);
    flex: 1;
    padding: 15px;
  }

  .edit-container::-webkit-scrollbar { /* 滚动条整体样式 */
    width: 8px; /* 高宽分别对应横竖滚动条的尺寸 */
    height: 0px;
  }

  .edit-container::-webkit-scrollbar-thumb { /* 滚动条里面小方块 */
    border-radius: 5px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: $mainColor;
    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.3) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.3) 75%, transparent 75%, transparent);
  }
}

.edit-container::-webkit-scrollbar-track { /* 滚动条里面轨道 */
  border-radius: 5px;
  background: #fff;
}
</style>
