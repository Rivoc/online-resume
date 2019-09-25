<template>
  <div id="EditSkills">
    <section class="input-area">
      <h2>{{title}}</h2>
      <el-form label-position="top"
               label-width="50px">
        <div v-for="(item,index) of skillList"
             :key="index"
             id="container"
             class="skill">
          <i class="el-icon-close"
             @click="removearea(item,skillList)"></i>
          <el-form-item :label="'技能'">
            <el-input v-model="item.title"
                      placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <!-- 遍历desc:[{value:''}.{}] -->
          <el-form-item v-for="(descr,index) of item.desc"
                        :key="index"
                        :label=" '描述'+ (index+1)">
            <i @click.prevent="removeItems(item,descr)"
               class="el-icon-delete"></i>
            <el-input v-model="descr.value"
                      placeholder="请输入内容">
            </el-input>
          </el-form-item>
          <i class="desc-button el-icon-plus"
             @click="addItem(item)">添加描述</i>

        </div>
        <el-button class="skill-button"
                   @click="addSkill(skillList)">添加技能</el-button>
      </el-form>

    </section>
  </div>
</template>
<script>
export default {
  name: 'EditSkills',
  props: ['labels', 'title', 'skillList'],
  methods: {
    removearea (item, skillList) {
      let index = skillList.indexOf(item)
      if (index !== -1) {
        skillList.splice(index, 1)
      }
    },
    addItem (item) {
      item.desc.push({
        'value': ''
      })
    },
    addSkill (skillList) {
      skillList.push({
        'title': '新的大技能',
        'desc': [
          {
            'value': '新的大技能的描述'
          }
        ]

      })
    },
    removeItem (item) {
      item.desc.splice(-1, 1)
    },
    removeItems (item, descr) {
      let index = item.desc.indexOf(descr)
      if (index !== -1) {
        item.desc.splice(index, 1)
      }
    }

  }
}

</script>
<style lang="stylus" scoped>
#container {
  position: relative;

  .el-icon-close {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 12px;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    transition: all 0.2s;
  }

  .el-icon-close:hover {
    color: red;
    background-color: #eee;
  }
}

.skill {
  margin-bottom: 40px;
}

.el-icon-delete {
  position: absolute;
  top: -28px;
  left: 50px;
}

.el-form-item {
  position: relative;
}

.desc-button {
  float: right;
  cursor: pointer;
}

.desc-button:hover {
  color: red;
}
</style>
