<template>
	<div>
	    <!--这里的作用是造几个用来点击的按钮来触发数据刷新 -->
		<div id="list" style="width: 20px;height: 200px;">
			<ul v-for="item in 3" :key="item" @click="changedata(item)">
				<li style="display: inline;"><button>{{item}}</button></li>
			</ul>
		</div>
		<!--这个div,必须要设置高度和宽度，是用来渲染表格的-->
		<div id="box" style="width: 500px;height: 500px;"></div>
	</div>

</template>

<script>
    import * as echarts from "echarts";
	export default {
		data() {
			return {
				data: [],
				data1: ['700', '800', '900', '1000', '600', '500', '700'],
				data2: ['234','564','349','974','732','324','940'],
				data3: ['632','127','611','993','398','237','1234']
			}
		},
		mounted() {
			this.drawLine()
		},
		methods: {
			changedata(item){
				console.log(item);
				if(item==1){
					this.data = this.data1
				    this.drawLine()
				};
				if(item==2){
					this.data = this.data2
				    this.drawLine()
				}
				if(item==3){
					this.data = this.data3
				    this.drawLine()
				}
			},
			drawLine() {
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

<style>
</style>

