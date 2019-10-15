<template>
  <div id="showResume">
    <div class="wrapper"
         id="pdfDom">
      <header>
        <h1>{{resume.profile.name||'你的名字'}}</h1>
        <div class="upload"
             id="upload-container">
          <label class="avatar-uploader"
                 style="display:block"
                 for="files">
            <i class="el-icon-plus avatar-uploader-icon"></i>

            <input type="file"
                   @change="onFileChange"
                   id="files"
                   accept=".jpg, .jpeg, .png" />
          </label>
        </div>
        <p>求职意向：{{resume.profile.job||'意向岗位'}}</p>
      </header>
      <section class="profile">
        <h3>基本信息</h3>
        <div class="message">
          <div class="content">
            <ol class="clearfix">
              <li>性别：{{resume.profile.gender||'性别'}}</li>
              <li>年龄：{{resume.profile.age||'年龄'}}</li>
              <li>现居：{{resume.profile.city||'城市'}}</li>
              <li>微信：{{resume.profile.WeChat||'微信'}}</li>
              <li>电话：{{resume.profile.mobile||'手机'}}</li>
              <li>邮箱：{{resume.profile.email||'邮箱'}}</li>
            </ol>
          </div>
        </div>
      </section>
      <section class="work"
               v-show="resume.work.length>0">
        <h3>工作经历</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.work"
               :key="index">
            <div class=timeInfo>
              <span>{{item.date}}</span>
              <span>{{item.company}}</span>
              <span class="duty">{{item.duty}}</span>
            </div>
            <div class="desc">
              {{item.content}}
            </div>
          </div>
        </div>
      </section>
      <section class="project"
               v-show="resume.project.length>0">
        <h3>项目经历</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.project"
               :key="index">
            <div class=timeInfo>
              <span>{{item.name}}</span>
            </div>
            <div class="desc">
              {{item.introduce}}
            </div>
          </div>
        </div>
      </section>
      <section class="educatioin"
               v-show="resume.education.length>0">
        <h3>教育经历</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.education"
               :key="index">
            <div class=timeInfo>
              <span>{{item.school}}</span>
              <span>{{item.time}}</span>
              <span class="degree">{{item.degree}}</span>
            </div>
            <div class="desc">
              <p>主修课程:</p> {{item.major}}
            </div>

          </div>
        </div>
      </section>
      <section class="skills"
               v-show="resume.skills.length>0">
        <h3>技能/其他</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.skills"
               :key="index">
            <h4>{{item.title}}</h4>
            <p class="desc"
               v-for="(descr,index) of item.desc"
               :key="index">
              {{descr.value}}
            </p>

          </div>
        </div>
      </section>
      <section class="schoolExp"
               v-show="resume.schoolExp.length>0">
        <h3>校园经历</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.schoolExp"
               :key="index">
            <div class=timeInfo>
              <span>{{item.date}}</span>
              <span class="suty">{{item.duty}}</span>
            </div>
            <div class="desc">
              {{item.desc}}
            </div>

          </div>
        </div>
      </section>
      <section class="award"
               v-show="resume.award.length>0">
        <h3>获奖经历</h3>
        <div class="message">
          <div class="content"
               v-for="(item,index) of resume.award"
               :key="index">
            <div class=timeInfo>
              <span>{{item.name}}</span>
              <span class="time">{{item.time}}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div v-html="styleCode"></div>
  </div>
</template>
<script>
export default {
  name: 'ShowResume',
  props: ['resume'],
  methods: {
    responseStyleCode (code) {
      this.styleCode = '<style lang="stylus" scoped>' + code + '</style>'
    },
    onFileChange (evt) {
      let files = evt.target.files
      let f = files[0]
      let reader = new FileReader()
      reader.onload = (function (theFile) {
        return function (e) {
          let upContainer = document.getElementById('upload-container')
          upContainer.innerHTML = [
            '<img src="',
            e.target.result,
            '" title="',
            escape(theFile.name),
            '"/>'
          ].join('')
        }
      })(f)
      reader.readAsDataURL(f)
    }
  },
  data () {
    return {
      styleCode: ''
    }
  }
}
</script>
<style lang="stylus" scoped>
// @import '~@/assets/styles/variable.styl';
#showResume {
  margin: 0 auto;
  width: 65%;
  height: 0;
  padding-bottom: 91.9%;
  border-radius: 5px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

label {
  position: relative;
}

#files {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>
