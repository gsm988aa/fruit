<template>

  <!--  <el-row :gutter="10">-->
  <!--    <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>-->
  <!--    <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>-->

  <!--  </el-row>-->

  <div id="app">

    <el-row  justify="center">
      <el-col type="flex"  :xs="23" :sm="23" :md="23" :lg="23" :xl="23" span="23" class="mc-ui-flex-center">
        <router-view/>
      </el-col>
      <el-col type="flex" :span="24" :xs="24" :sm="24" :md="24" :lg="24" :xl="24" class="mc-ui-flex-center" >
        <div id="nav" style="background-attachment: fixed;">
          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium" icon="q-icon-house-stroke">
              主页
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium">
              合/分闸
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium">
              断路器/微机
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium">
              物联
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium">
              设置
            </q-button>
          </router-link>

          &nbsp
          <router-link to="/add">
            <q-button type="default" theme="secondary" size="medium">
            添加数据
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/grid1">
            <q-button type="default" theme="secondary" size="medium">
              布局1
            </q-button>
            </router-link>
          &nbsp
          <router-link to="/table">
            <q-button type="default" theme="secondary" size="medium">
              数据管理
            </q-button>
           </router-link>
          &nbsp
          <router-link to="/pie">
            <q-button type="default" theme="secondary" size="medium">
              饼图
            </q-button>
            </router-link>
          &nbsp
          <router-link to="/bar">
            <q-button type="default" theme="secondary" size="medium">
              柱状图
            </q-button>
            </router-link>
          &nbsp
          <router-link to="/serialport">
            <q-button type="default" theme="secondary" size="medium">
              串口
            </q-button>
          </router-link>
          &nbsp
          <router-link to="/home">
            <q-button type="default" theme="secondary" size="medium">
              主页
            </q-button>
            </router-link>
          &nbsp
        </div>




      </el-col>

    </el-row>


    <el-row id="uuid86bd6e95-7980-432c-a3c9-e97d007db260">
      <el-col id="uuide2011ff0-3ebf-40f4-8b48-91a1b71650ef">
        <el-row type="flex">
          <el-col style="width: 20%;" :xs="24" :md="12" :span="6">6</el-col>
          <el-col style="width: 80%;" :xs="24" :md="12" :span="18">18</el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}



 .el-col {
   border-radius: 4px;
 }
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

</style>
