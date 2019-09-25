export const str = {
  code: `
  /* 开始制作简历
     ------------------------------------*/
  /* 整体布局
  ------------------------------------*/     
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
  /* 头部
  ------------------------------------*/  
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
    /* 基本信息
    ------------------------------------*/  
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
    /* 工作经历、教育经历、校园经历
    ------------------------------------*/  
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
   /* 项目经历
  ------------------------------------*/  
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
  /* 技能/其它
  ------------------------------------*/   
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
    /* 获奖经历
    ------------------------------------*/   
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
  }`
}
