<template>
  <div id="EditRest">
    <section class="input-area">
      <h2>{{title}}</h2>
      <el-form label-position="top"
               label-width="50px">
        <div v-for="(item,index) of restList"
             :key="index"
             class="container">
          <i class="el-icon-close"
             @click="removeItem(item,restList)"></i>
          <el-form-item v-for="(val,key) of item"
                        :key="key"
                        :label="labels[key]">

            <el-input v-model="item[key]"
                      placeholder="请输入内容">
            </el-input>
          </el-form-item>

        </div>
        <el-button @click="addItem(restList)">添加</el-button>
      </el-form>

    </section>
  </div>
</template>
<script>
export default {
  name: 'EditRest',
  props: ['labels', 'title', 'restList'],
  data () {
    return {
      rawRestList: []
    }
  },
  mounted () {
    this.rawRestList = JSON.parse(JSON.stringify(this.restList))
  },
  methods: {
    addItem (restList) {
      console.log('删除')
      console.log(this.rawRestList)
      if (restList.length === 0) {
        var _item = this.deepColne(this.rawRestList[0])
        for (let key in _item) {
          _item[key] = ''
        }
        restList.push(_item)
      } else {
        _item = this.deepColne(restList[0])
        for (let key in _item) {
          _item[key] = ''
        }
        restList.push(_item)
      }
    },
    removeItem (item, restList) {
      let index = restList.indexOf(item)
      if (index !== -1) {
        restList.splice(index, 1)
      }
    },

    deepColne (obj) {
      return JSON.parse(JSON.stringify(obj))
    }
  }
}

</script>
<style lang="stylus" scoped>
.container {
  position: relative;

  .el-icon-close {
    position: absolute;
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

.input-area {
  margin-bottom: 30px;

  .el-form-item {
    margin-top: 20px;
  }
}</style>
