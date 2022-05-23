<template>
  <div>
    <q-button type="default" theme="primary" size="medium" class="qbutton-bule">
      A Button with default theme
    </q-button>
    <br>
    <br>
    <br>
    <q-button
        type="default"
        theme="secondary"
        size="medium"
        icon="q-icon-bell"
        :loading="false"
        :circle="false"
        :fullWidth="false"
        class="qbuttonsec-orange"
    >
      Click me
    </q-button>
    <q-button type="default" theme="secondary" size="medium" class="qbuttonsec-orange"  >
      A Button with secondary theme
    </q-button>
    <br>
    <br>
    <br>
    <q-button type="default" theme="link" size="medium" >
      A Button with link theme
    </q-button>
    <br>
    <br>
    <br>

    <el-form ref="fruitRules" :model="fruit" :rules="rules" label-width="80px" class="demo-ruleForm" style="width: 600px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="fruit.name"></el-input>
      </el-form-item>
      <el-form-item label="销量" prop="sale">
        <el-input v-model.number="fruit.sale"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="icon">
        <el-input v-model="fruit.icon"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('fruitRules')">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
      <el-button type="primary" v-on:click="Send_serial()">send
      </el-button>
    </el-form>



  </div>

</template>

<script>

    export default {
        name: "Serialport",
        data() {
            return {
                fruit: {
                    name: '',
                    sale: '',
                    icon: ''
                },
                rules:{
                    name:[
                        { required: true, message: '请输入水果名称', trigger: 'blur' }
                    ],
                    sale:[
                        { required: true, message: '请输入销量', trigger: 'blur' },
                        { type: 'number', message: '销量必须为数字值'}
                    ],
                    icon:[
                        { required: true, message: '请输入图片链接', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            onSubmit(formName){
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let _this = this
                        axios.post('http://localhost:8181/fruit/add',this.fruit).then(function (response) {
                            if(response.data){
                                _this.$alert(_this.fruit.name+'添加成功！', '添加数据', {
                                    confirmButtonText: '确定',
                                    callback: action => {
                                        //跳转到/table
                                        _this.$router.push('/table')
                                    }
                                });
                            }
                        })
                    }
                });
            },
          Send_serial(){
              // alert("send")
            let _this = this
              axios.get('http://localhost:10866/off').then(function (response) {




              })
            },
          data() {
            return {
              tableData: null
            }
          }
        }
    }
</script>

<style scoped>

.qbutton-bule {
  background: #4162f0;
  border-radius: 10px;
  box-shadow:  10px 10px 30px #bebebe,
  -10px -10px 30px #ffffff;
}
.qbuttonsec-orange {
  border-radius: 50px;
  /*background: #e0e0e0;*/
  box-shadow:  20px 20px 60px #bebebe,
  -20px -20px 60px #ffffff;

  color: #ffffff;
  background: #4a9cfd;

}

</style>