<template>

  <div id="magicalDragScene" class="mc-root mc-ui-absolute-pane">
    <el-row   type="flex">
      <el-col :xs="24" :md="12" :span="2">


        <el-row>
          <el-col :xs="24">
            <q-button type="default" theme="primary" size="medium"
            >
            紧急分闸
          </q-button>
          </el-col>
          <el-col :xs="24">
            <br>
          </el-col>
          <el-col :xs="24">
            <el-card class="card-glass1"  >121312421</el-card>
          </el-col>
        </el-row>



      </el-col>


      <el-col :xs="24" :md="12" :span="5" :offset="1">
        <el-card class="card-glass2"  >121312421</el-card>
      </el-col>
      <el-col :xs="24" :md="12" :span="15":offset="1">
        <el-card class="card-glass3"  >121312421</el-card>

      </el-col>
    </el-row>
  </div>






</template>

<script>
export default {
  name: "Closer"
}
</script>

<style scoped>

/*.body {*/
/*  background-color: #af3131;*/
/*}*/



#magicalDragScene {

  background: url("/src/assets/apple-logo-white.png") ;
  /*no-repeat center*/
  /*background-position: left center;*/

  height: 100%;

  width: 100%;

  background-size: cover;

  position: fixed;
}


.card-glass1 {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}


.card-glass2 {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}
.card-glass3 {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 12px;
  border: 1px solid rgba(209, 213, 219, 0.3);
}

.sosbrk{
  color: #1e39e8;
  border-radius: 1000px;
  background: linear-gradient(145deg, #f0f0f0, #cacaca);
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;
}
</style>


