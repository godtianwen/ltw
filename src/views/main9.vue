<template>
    <div class="echartsbox">
        <div class="btnbox">
            <button class="btm" :class="{actived:btnNum == index}" v-for="(item,index) in btnArry" @click="onClick(index)">{{item}}</button>
        </div>
        <div class="echats" id="box"></div>
    </div>
</template>

<script>
    import * as echarts from "echarts";
    export default {
        data (){
            return {
                btnArry:['数据一','数据二','数据三'],
                btnNum:'3',
                data: [],
				data1: ['700', '800', '900', '1000', '600', '500', '700'],
				data2: ['234','564','349','974','732','324','940'],
				data3: ['632','127','611','993','398','237','1234']
            }
        },
        mounted (){
            this.$nextTick(() =>{
                this.drawLine()
                this.drawLine()
            })
            
        },
        methods:{
            onClick (num){
                this.btnNum = num
                if(num == 0){
                    this.data =  this.data3
                    this.drawLine()
                }
                if(num == 1){
                    this.data =  this.data2
                    this.drawLine()
                }
                if(num == 2){
                    this.data =  this.data1
                    this.drawLine()
                }
            },
            drawLine (){
                var myChart = echarts.init(document.getElementById("box"));
				var optoin = {
					legend: {
						data:['降雨量']
					},
					xAxis: {
						type: 'category',
						boundaryGap: false,
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
					},
					yAxis: {
						type: 'value'
					},
					series: [{
						data: this.data,
						areaStyle: { },
						type: 'line'
					}],
				}
				myChart.setOption(optoin)
            }
        }
    }
</script>

<style scoped>
.echartsbox{
    height: 100vh;
    background: #000;
    width: 100%;
}
.echats{
    width: 600px;
    height: 600px;
    border: 1px solid #000;
    margin: 0px auto;
    background: #f5f5f5;
}
.btnbox{
    width: 600px;
    height: 80px;
    background: #f5f5f5;
    margin: 0px auto;
    display: flex;
}
.btm{
    flex: 1;
}
.actived{
    background: lightblue;
}
</style>