<template>
    <div class="addFormBox">
      <!-- 循环data中定义的数组 -->
      <div v-for="(item,index) in formLabelAlign" :key="index">
        <div class="formOuterBox">
          <div class="formCotantBox">
            <h3>车辆信息 {{index+1}}</h3>
            <!-- 表单内容 -->
            <el-form label-width="80px">
              <el-form-item label="车牌号">
                <el-input v-model="item.carBoard"></el-input>
              </el-form-item>
              <el-form-item label="车牌颜色">
                <el-input v-model="item.carColor"></el-input>
              </el-form-item>
              <el-form-item label="排放阶段">
                <el-input v-model="item.discharge"></el-input>
              </el-form-item>
            </el-form>
          </div>
          <!-- 操作按钮 -->
          <div>
            <el-button @click="addForm" type="success">添加车辆信息</el-button>
            <el-button v-if="formLabelAlign.length > 1" @click="removeIdx(item, index)" type="danger">删除此条车辆信息</el-button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 表单绑定数据
        formLabelAlign: [
          {
            carBoard: "",
            carColor: "",
            discharge: "",
          },
        ],
      };
    },
    methods: {
      //   添加操作
      addForm() {
        // 定义一个标识，通过标识判断是否能添加信息
        let statusType = true;
        this.formLabelAlign.forEach((item) => {
          if (
            item.carBoard == "" ||
            item.carColor == "" ||
            item.discharge == ""
          ) {
            this.$message({
              message: "请完善信息后在添加",
              type: "warning",
            });
            statusType = false;
          }
        });
        if (statusType) {
          this.formLabelAlign.push({
            carBoard: "",
            carColor: "",
            discharge: "",
          });
        }
      },
      // 删除操作
      removeIdx(item, index) {
        this.formLabelAlign.splice(index, 1);
        this.$message({
          message: "删除成功",
          type: "success",
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .addFormBox {
    margin: 20px;
  }
  .formOuterBox {
    margin-bottom: 20px;
    padding: 30px 40px;
    background: white;
    border-radius: 30px;
  }
  h3 {
    margin: 0px 0px 20px 0px;
  }
  </style>