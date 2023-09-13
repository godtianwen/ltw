<template>
    <div class="main">
        <div class="stylebox" >
            <el-card class="box-card" v-for="(item, index) in from" :key="index">
                <div>{{ index + 1 }}</div>
                <el-form label-width="80px">
                    <el-form-item label="活动名称">
                        <el-input v-model="item.name"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域">
                        <el-select v-model="item.region" placeholder="请选择活动区域">
                            <el-option v-for="item in data2" :label="item.name" :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-card>
            <el-button type="success" @click="addform">增加表单</el-button>
        </div>

    </div>
</template>

<script>
export default {
    created(){
        let Data = [{id:1,name:"zahngsan"},{id:2,name:"lisi"},{id:3,name:"wangwu"}]
        const newdata = Data.map((item,index) => {
            return {
                id:item.id,
                name:item.name
            }
        })
        this.data2 = newdata
    },
    data() {
        return {
            data2:[1,2,3],
            from: [
                {
                    name: '',
                    region: ''
                }
            ]
        }
    },
    methods: {
        addform() {
            let isShow = true
            this.from.forEach(item => {
                if (item.name == '' || item.region == '') {
                    this.$message({
                        message: "请完善信息后在添加",
                        type: "warning",
                    });
                    isShow = false
                }
            })
            if (isShow) {
                this.from.push({
                    name:'',
                    region:''
                })
            } 
           console.log(this.from) 
        }
    }

}
</script>
isShow
<style scoped>
.stylebox {
    width: 560px;
    margin: 16px auto 0px auto;
}

.box-card {
    margin-bottom: 15px;
}
</style>