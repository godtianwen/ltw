<template>
    <div class="leftCard">
        <div id="chinaMap" ref="chinaMap"></div>
    </div>
</template>

<script>
import * as echarts from "echarts";
import lnJson from '@/assets/liaoningl.json'
export default {
    created() {
        this.$nextTick(() => {
            this.initCharts();
        })
    },
    mounted() {
        this.onArrclick()
    },
    data() {
        return {
            myChart: null,
            dataList: [
                { name: '大连市', value: 1800 },
                { name: '朝阳市', value: 1700 },
                { name: '丹东市', value: 1600 },
                { name: '铁岭市', value: 1400 },
                { name: '沈阳市', value: 1200 },
                { name: '抚顺市', value: 1000 },
                { name: '葫芦岛市', value: 800 },
                { name: '阜新市', value: 600 },
                { name: '锦州市', value: 400 },
                { name: '鞍山市', value: 200 },
                { name: '本溪市', value: 100 },
                { name: '营口市', value: 300 },
                { name: '辽阳市', value: 500 },
                { name: '盘锦市', value: 700 }
            ],
        }
    },
    methods: {
        initCharts() {
            let myChart = echarts.init(document.getElementById('chinaMap'));
            let option = {
                tooltip: {
                    trigger: 'item',
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    borderColor: 'transparent',
                    textStyle: {
                        color: "#FFFFFF",
                        fontSize: 18, // 文字大小
                    },
                },
                series: [{
                    name: '辽宁',
                    type: 'map3D',
                    map: 'ln',
                    data: this.dataList,
                    selectedMode: 'single', // 地图高亮单选
                    regionHeight: 2, // 地图高度
                    top: -100,
                    viewControl: {
                        distance: 90, // 地图视角 控制初始大小
                        alpha: 18,// 倾斜角度
                        rotateSensitivity: [1, 1]
                    },
                    label: {
                        show: true, // 是否显示名字
                        color: '#fff', // 文字颜色
                        fontSize: 20, // 文字大小
                        fontWeight: 'bold', // 文字大小
                    },
                    itemStyle: {
                        color: '#4389ED', // 地图背景颜色
                        borderWidth: 1, // 分界线wdith
                        borderColor: '#61CFF8', // 分界线颜色
                        opacity: 0.8
                    },
                    emphasis: {
                        label: {
                            show: true, // 是否显示高亮
                            textStyle: {
                                color: '#fff' // 高亮文字颜色
                            }
                        },
                        itemStyle: {
                            color: '#007EE8', // 地图高亮颜色
                            borderWidth: 10, // 分界线wdith
                            borderColor: '#6BECF5'// 分界线颜色
                        }
                    },
                    // light: {
                    //     main: {
                    //         color: '#faaf4e',
                    //         intensity: 1,
                    //         shadow: true,
                    //         shadowQuality: 'high',
                    //         alpha: 25, //
                    //         beta: 20
                    //     },
                    //     ambient: {
                    //         color: '#fff',
                    //         intensity: 0.6
                    //     }
                    // }
                }]
            }
            echarts.registerMap('ln', lnJson);
            myChart.setOption(option);
            window.addEventListener('resize',()=>{
                myChart.resize()
            })
        },
        onArrclick() {
            const AList=[
                {id:1,age:'20'},
                {id:2,age:'30'},
                {id:3,age:'40'}
            ]
            const Blist=[
                {id:1,name:'张三'},
                {id:2,name:'李四'},
                {id:3,name:'王五'}
            ]
            let cList = AList.map((item,index)=>{
               return {...item,...Blist[index]}
            })
            console.log(cList)

            
        }
    }
}
</script>

<style scoped>
.leftCard {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

#chinaMap {
    width: 100%;
    height: 100vh;
    margin: 0px auto;
    overflow: hidden;
    background: lavenderblush;
}
</style>D