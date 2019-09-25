<template>
  <div id="showResume">
    <div class="wrapper"
         id="pdfDom">
      <header>
        <h1>{{resume.profile.name||'你的名字'}}</h1>
        <div class="upload">
          <el-upload class="avatar-uploader"
                     :show-file-list="false">

            <i class="el-icon-plus avatar-uploader-icon"></i>
            <p>上传头像</p>
          </el-upload>

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
  </div>
</template>
<script>
export default {
  name: 'ShowResume',
  props: ['resume']
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/variable.styl';

#showResume {
  margin: 0 auto;
  width: 65%;
  height: 0;
  padding-bottom: 91.9%;
  border-radius: 5px;
  box-shadow: 0 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  .wrapper {
    padding: 2%;
  }

  header {
    width: 100%;
    padding: 30px 0 30px 0;
    color: #666;
    position: relative;

    h1 {
      font-size: 36px;
      margin-bottom: 10px;
      margin-left: 20px;
    }

    p {
      letter-spacing: 20px;
    }

    .upload:hover {
      border-color: #409EFF;
    }

    .upload {
      position: absolute;
      top: 0;
      right: 0;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      overflow: hidden;
      cursor: pointer;

      p {
        position: absolute;
        width: 100%;
        text-align: center;
        bottom: 0;
        letter-spacing: 0;
      }

      .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 150px;
        height: 150px;
        line-height: 150px;
        text-align: center;
      }

      .avatar {
        width: 178px;
        height: 178px;
        display: block;
      }
    }
  }

  .profile {
    h3 {
      text-align: left;
      background: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #000;
      padding-left: 4px;
      margin: 20px 0 10px 0;
      padding: 5px;
      color: rgba(0, 0, 0, 0.7);
    }

    ol {
      li {
        float: left;
        width: 50%;
      }
    }
  }

  .work, .educatioin, .schoolExp {
    h3 {
      text-align: left;
      background: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #000;
      padding-left: 4px;
      margin: 20px 0 10px 0;
      padding: 5px;
      color: rgba(0, 0, 0, 0.7);
    }

    .content {
      margin-bottom: 10px;

      .timeInfo {
        display: flex;

        span {
          color: $mainColor;
          font-weight: 800;
          flex: 1;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .duty, .degree {
          text-align: center;
        }
      }
    }
  }

  .project {
    h3 {
      text-align: left;
      background: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #000;
      padding-left: 4px;
      margin: 20px 0 10px 0;
      padding: 5px;
      color: rgba(0, 0, 0, 0.7);
    }

    .content {
      margin-bottom: 10px;

      .timeInfo {
        display: flex;

        span {
          color: $mainColor;
          font-weight: 800;
          flex: 1;
          font-size: 15px;
          margin-bottom: 5px;
        }
      }
    }
  }

  .skills {
    h3 {
      text-align: left;
      background: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #000;
      padding-left: 4px;
      margin: 20px 0 10px 0;
      padding: 5px;
      color: rgba(0, 0, 0, 0.7);
    }

    .content {
      margin-bottom: 10px;

      .desc::before {
        content: '•';
      }
    }
  }

  .award {
    h3 {
      text-align: left;
      background: rgba(0, 0, 0, 0.1);
      border-left: 3px solid #000;
      padding-left: 4px;
      margin: 20px 0 10px 0;
      padding: 5px;
      color: rgba(0, 0, 0, 0.7);
    }

    .content {
      margin-bottom: 10px;

      .timeInfo {
        display: flex;

        span {
          font-weight: 800;
          flex: 1;
          font-size: 15px;
          margin-bottom: 5px;
        }

        .time {
          text-align: center;
        }
      }
    }
  }
}
</style>
