<template>
	<div class="main">
		<div style="width: 1000px; height: 500px; margin: 0px auto; border: 1px solid navajowhite;" id="main"></div>


		<h1>{{value}}</h1>
		<div class="Prompt_list">
			<div class="Prompt_list_conters">序号：{{ v2.sort }}</div>
			<div class="Prompt_list_conters">变电站：{{ v2.name }}</div>
			<div class="Prompt_list_conters">变压器: {{ v2.transformer }}</div>
			<div class="Prompt_list_conters">主变容量（兆伏安）: {{ v2.volume }}</div>
			<div class="Prompt_list_conters">最大负荷（兆瓦）：{{ v2.load }}</div>
			<div class="Prompt_list_conters">负载率（%）: {{ v2.rate }}</div>
			<div class="Prompt_list_conters">解决措施建议: {{ v2.propose }}</div>
		</div>
		<button @click="start">开始</button>
		<button @click="over">结束</button>
	</div>


</template>

<script>
	import {
		footer
	} from '../../src/http/api.js'
	export default {
		data() {
			return {
				failNumList: [], // 数值
				failYearList: [], // 年份

				timer: "",
				value: 0,
				tableList2: [{
						sort: "1",
						name: "解放变",
						transformer: "2#",
						volume: "31.5",
						load: "30",
						rate: "95.20%",
						propose: "与民生、文化变10kV联网"
					},
					{
						sort: "2",
						name: "小坨子",
						transformer: "2#",
						volume: "31.5",
						load: "30",
						rate: "95.20%",
						propose: "与黄镇变10kV联网"
					},
					{
						sort: "3",
						name: "苏子沟变",
						transformer: "1#",
						volume: "40",
						load: "39",
						rate: "97.50%",
						propose: "转移负荷至#2主变"
					},
					{
						sort: "4",
						name: "东山变",
						transformer: "#1",
						volume: "20",
						load: "22",
						rate: "110.00%",
						propose: "变电站扩建"
					},
					{
						sort: "5",
						name: "台郊变",
						transformer: "#1",
						volume: "20",
						load: "20",
						rate: "100.00%",
						propose: "新建台东变"
					},
					{
						sort: "6",
						name: "台郊变",
						transformer: "#2",
						volume: "20",
						load: "16",
						rate: "80.00%",
						propose: "新建台东变"
					},
					{
						sort: "7",
						name: "西柳变",
						transformer: "#1",
						volume: "20",
						load: "18",
						rate: "90.00%",
						propose: "新建宏基变"
					},
					{
						sort: "8",
						name: "西柳变",
						transformer: "#2",
						volume: "20",
						load: "16",
						rate: "80.00%",
						propose: "新建宏基变"
					},
					{
						sort: "9",
						name: "兴英变",
						transformer: "#1",
						volume: "20",
						load: "18",
						rate: "90.00%",
						propose: "变电站扩建"
					},
					{
						sort: "10",
						name: "兴英变",
						transformer: "#2",
						volume: "20",
						load: "18",
						rate: "90.00%",
						propose: "变电站扩建"
					},
					{
						sort: "11",
						name: "代楼变",
						transformer: "#1",
						volume: "40",
						load: "38",
						rate: "95.00%",
						propose: "新建代北变"
					},
					{
						sort: "12",
						name: "偏岭变",
						transformer: "#1",
						volume: "50",
						load: "43",
						rate: "86.00%",
						propose: "建议开展转移负荷研究"
					},
					{
						sort: "13",
						name: "周正变",
						transformer: "#1",
						volume: "31.5",
						load: "27",
						rate: "85.70%",
						propose: "转移负荷至#3主变"
					},
					{
						sort: "14",
						name: "高速变",
						transformer: "#2",
						volume: "20",
						load: "17",
						rate: "85.00%",
						propose: "建议开展扩建研究"
					},
					{
						sort: "15",
						name: "铁东变",
						transformer: "#2",
						volume: "50",
						load: "40",
						rate: "80.00%",
						propose: "建议开展转移负荷研究"
					},
					{
						sort: "16",
						name: "东二变",
						transformer: "#1",
						volume: "40",
						load: "33",
						rate: "82.50%",
						propose: "鞍钢转移负荷"
					},
				],
				tableList2Int: 1,
				v2: {
					sort: "1",
					name: "解放变",
					transformer: "2#",
					volume: "31.5",
					load: "30",
					rate: "95.20%",
					propose: "与民生、文化变10kV联网"
				},

			}
		},
		created() {
			this.getFooterData()
		},
		mounted() {

		},
		methods: {
			start() {
				this.timer = setInterval(this.valChange, 2000)
			},
			valChange() {
				// this.value++
				if(this.value > this.tableList2.length -1){
					this.value = 0
				}
				this.v2 = this.tableList2[this.value]
				this.value ++;
				
			},
			over() {
				clearInterval(this.timer)
			},
			initCharts() {
				// 基于准备好的dom，初始化echarts实例
				var myChart = this.$echarts.init(document.getElementById('main'))
				// 指定图表的配置项和数据
				var option = {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: this.failYearList
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: this.failNumList
					}]
				};

				// 使用刚指定的配置项和数据显示图表。
				myChart.setOption(option);
			},
			// async getFooterData(){
			// 	let res = await footer();
			// 	console.log(res)
			// }
			getFooterData() {
				footer().then(res => {
					console.log(res.data)
					let data = res.data.data
					if (res.data.code === 10000) {
						for (var i = 0; i < data.length; i++) {
							this.failNumList[i] = data[i].failNum
							this.failYearList[i] = data[i].failYear
						}
					}
									
					// let data = res.data.data
									
					// for (var i = 0; i < data.length; i++) {
					// 	this.failYearList[i]=data[i].failYear;
					// 	this.failNumList[i]=data[i].failNum;
					//非那雄胺片、米诺地尔酊
					// }
					this.initCharts()
				})
			}
		}
	}
</script>

<style>
</style>
