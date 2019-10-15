export const str = {
  code: `
/*开始制作简历
 ------------------------------------*/
/*整体布局
------------------------------------*/

#showResume .wrapper {
  padding: 2%;
}
/*头部
------------------------------------*/
#showResume header {
  width: 100%;
  padding: 30px 0 30px 0;
  color: #666;
  position: relative;
}

#showResume header h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

#showResume header .upload:hover {
  border-color: #409EFF;
}

#showResume header .upload {
  position: absolute;
  top: 0;
  right: 0;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
}
#showResume header .upload .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
  cursor:pointer;
}
#showResume header .upload p {
  position: absolute;
  width: 100%;
  text-align: center;
  margin-left:0;
  bottom: 0;
  letter-spacing: 0;
}
#showResume header .upload .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/*基本信息
------------------------------------*/
.profile h3 {
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  border-left: 3px solid #000;
  padding-left: 4px;
  margin: 20px 0 10px 0;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
}

.profile ol li {
  float: left;
  width: 50%;
}
/*工作经历
------------------------------------*/
.work h3, .educatioin h3, .schoolExp h3 {
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  border-left: 3px solid #000;
  padding-left: 4px;
  margin: 20px 0 10px 0;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
}

.work .content, .educatioin .content, .schoolExp .content {
  margin-bottom: 10px;
}

.work .content .timeInfo, .educatioin .content .timeInfo, .schoolExp .content .timeInfo {
  display: flex;
}

.work .content .timeInfo span, .educatioin .content .timeInfo span, .schoolExp .content .timeInfo span {
  color: #3d3d3d;
  font-weight: 800;
  flex: 1;
  font-size: 15px;
  margin-bottom: 5px;
}

.work .content .timeInfo .duty, .educatioin .content .timeInfo .duty, .schoolExp .content .timeInfo .duty {
  text-align: center;
}

.work .content .timeInfo .degree, .educatioin .content .timeInfo .degree, .schoolExp .content .timeInfo .degree {
  text-align: center;
}
/*项目经历
------------------------------------*/
.project h3 {
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  border-left: 3px solid #000;
  padding-left: 4px;
  margin: 20px 0 10px 0;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
}

.project .content {
  margin-bottom: 10px;
}

.project .content .timeInfo {
  display: flex;
}

.project .content .timeInfo span {
  color: #3d3d3d;
  font-weight: 800;
  flex: 1;
  font-size: 15px;
  margin-bottom: 5px;
}
/*技能/其它
------------------------------------*/
.skills h3 {
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  border-left: 3px solid #000;
  padding-left: 4px;
  margin: 20px 0 10px 0;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
}

.skills .content {
  margin-bottom: 10px;
}

.skills .content .desc::before {
  content: '•';
}
/*获奖经历
------------------------------------*/
.award h3 {
  text-align: left;
  background: rgba(0, 0, 0, 0.1);
  border-left: 3px solid #000;
  padding-left: 4px;
  margin: 20px 0 10px 0;
  padding: 5px;
  color: rgba(0, 0, 0, 0.7);
}

.award .content {
  margin-bottom: 10px;
}

.award .content .timeInfo {
  display: flex;
}

.award .content .timeInfo span {
  font-weight: 800;
  flex: 1;
  font-size: 15px;
  margin-bottom: 5px;
}

.award .content .timeInfo .time {
  text-align: center;
}
/*
____生成完毕！
        \\___\\_.:::::::.___  
        /___/ \':::::::\'
    ------------------------------------*/
    <h3>点我生成简历>>>>>>>>>>>>>>>>>>>>>>>>>>></h3>
    `
}
