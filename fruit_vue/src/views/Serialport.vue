<template>
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
</template>

<script>
// const { SerialPort } = require('serialport')
// const port = new SerialPort({ path: 'COM14', baudRate: 921600 , autoOpen:false }, function (err) {
//   if (err) {
//     return console.log('Error: ', err.message)
//   }
// })
//
// port.write('main screen turn on', function(err) {
//   if (err) {
//     return console.log('Error on write: ', err.message)
//   }
//   console.log('message written')
// })

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
              axios.get('http://localhost:10866/off').then(function (response) {
                if(response.data){
                  // _this.$alert(_this.fruit.name+'添加成功！', '添加数据', {
                  //   confirmButtonText: '确定',
                  //   callback: action => {
                  //     //跳转到/table
                  //     _this.$router.push('/table')
                  //   }
                  // });
                  // alert("led ok")
                  console.log(this.data())
                }
              })
            }
        }
    }
</script>

<style scoped>

</style>
