<template>
    <div class="main">
        <p>{{ arr }}</p>
        <p>{{ arr1 }}</p>
        <p>{{ arr2 }}</p>
        <p>{{ arr3 }}</p>
        <p>{{ arr4 }}</p>
        <p>{{ arr5 }}</p>
        <p>{{ arr6 }}</p>
        <p>{{ arr70 }}</p>
        <p>{{ arry8 }}</p>
        <p>{{ arry9 }}</p>
        <p>{{ arry10 }}</p>
        <p>{{ arryList }}</p>
        <div class="dateSelect">
            <button v-for="(item,index) in  btnArry" class="dateBtn" :class="{active:btnActived === index}" :key="index" @click="onBtn(index)">{{item}}</button>
        </div>
        <div class="mapbox">1213</div>
    </div>
</template>

<script>
import map from '@/components/map.vue'
export default {
    data() {
        return {
            isShow:true,
            btnActived: 8,
            btnArry:['按钮一','按钮二','按钮三','按钮四','按钮五','按钮六','全部'],
            listimg:['img1','img2','img3','img4','img5','img6','img7'],
            arr: [5, 10, 15, 20],
            arr1: [5, 10, 15, 20],
            arr2: [11, 12, 13, 14],
            arr3: [1, 2, 3, 4],
            arr4: [5, 4, 3, 2, 1],
            arr5: [13, 10, 15, 12, 14, 11],
            arr6: [0, 1, 2, 3, 4, 5],
            arr7: ['张三', '李四'],
            arr70: [],
            arry8: [],
            arry9: [],
            list: [
                { id: 1, name: '张三' },
                { id: 2, name: '李四' },
                { id: 3, name: '王五' },
                { id: 4, name: '赵六' }
            ],
            arry10: [],
            res: [
                {
                    id: 1,
                    cityName: "朝阳",
                    zeroMoneySum: "0",
                    zeroBishu: "0",
                    sixteenMoneySum: "1590.265026",
                    sixteenBishu: "211",
                    thirtyMoneySum: "2863.960267",
                    thirtyBishu: "353",
                    sixtyMoneySum: "4454.225293",
                    sixtyBishu: "564"
                },
                {
                    id: 2,
                    cityName: "阜新",
                    zeroMoneySum: "5.248304",
                    zeroBishu: "2",
                    sixteenMoneySum: "613.588761",
                    sixteenBishu: "50",
                    thirtyMoneySum: "2223.200303",
                    thirtyBishu: "233",
                    sixtyMoneySum: "2842.037368",
                    sixtyBishu: "285"
                },
                {
                    id: 3,
                    cityName: "葫芦岛",
                    zeroMoneySum: "0",
                    zeroBishu: "0",
                    sixteenMoneySum: "1712.155863",
                    sixteenBishu: "97",
                    thirtyMoneySum: "4749.879615",
                    thirtyBishu: "413",
                    sixtyMoneySum: "6462.035478",
                    sixtyBishu: "510"
                },
                {
                    id: 4,
                    cityName: "锦州",
                    zeroMoneySum: "0",
                    zeroBishu: "0",
                    sixteenMoneySum: "1140.271791",
                    sixteenBishu: "188",
                    thirtyMoneySum: "2432.965286",
                    thirtyBishu: "115",
                    sixtyMoneySum: "3573.237077",
                    sixtyBishu: "303"
                },
            ],
            arryList:[]
            
        }
    },
    components:{
        map
    },
    mounted() {
        this.onPush()
        this.onPop()
        this.onUnshift()
        this.onShift()
        this.onReverse()
        this.onSort()
        this.onSplice()
        this.onConc()
        this.onJoin()
        this.onSlice()
        this.onIndexOF()
        this.onForeach()
        this.onMap()
        this.onFilter()
        this.omEvery()
        this.onSome()
    },
    methods: {
        // 1.push() 末尾添加数据
        onPush() {
            this.arr.push(25, 30)
        },
        // 2.pop() 末尾出删除数据
        onPop() {
            this.arr1.pop()
        },
        // 3.unshift() 头部添加数据
        onUnshift() {
            this.arr2.unshift(110)
        },
        // 4.shift() 头部删除数据
        onShift() {
            this.arr3.shift()
        },
        // 5.reverse() 反转数组
        onReverse() {
            this.arr4.reverse()
        },
        // 6.sort() 排序
        onSort() {
            // this.arr5.sort()
            // a-b 正序排序
            // b-a 倒序排序
            this.arr5.sort((a, b) => {
                return b - a
            })
        },
        // 7.splice() 截取数组
        onSplice() {
            this.arr6.splice(2, 1, 300)
        },
        //8.concat() 合并数组
        onConc() {
            let arry = [10, 11, 12, 13]
            let res = this.arr7.concat(arry)
            this.arr70.push(res)
        },
        //9.join() 数据转成字符串
        onJoin() {
            let arry = [1, 2, 3, 4]
            let res = arry.join('-')
            this.arry8.push(res)
        },
        //10.slice() 截取数组的一部分的数据 (开始索引/借宿索引)
        onSlice() {
            let arry = ['大朗', '二郎', '四哥', '五娃']
            let res = arry.slice(1, 3)
            this.arry9.push(res)
        },
        //11.indexOf() 通过数组索引查询有没有这个数值
        onIndexOF() {
            let arry = [1, 2, 3, 4, 5, 1, 1]
            let res = arry.indexOf(10)
        },
        //12.forEach() 循环遍历数组
        onForeach() {
            this.list.forEach((item, index, arr) => {
                this.arry10.push(item.name + index)
            })
        },
        //13.map() 映射数组
        onMap() {      
            let dates = this.res.map(item => {
                return {
                    cityName:item.cityName,
                    allMoney:[item.zeroMoneySum,item.sixteenMoneySum,item.thirtyMoneySum,item.sixtyMoneySum]
                }
            })
            let res = this.list.map((item,index) => {
                return {
                    mame:item.name
                }
            })
            let all  = res.map((item,index) => {
                return {...item,...dates[index]}
                // return console.log({...dates[index],item});
            })
            this.arryList.push(all)
        },
        //14.filter() 过滤数组
        onFilter(){
            let res = [10,20,30,40,50,60]
            let ary = res.filter((item,index,arry) => {
                return item <= 30
            })
        },
        //15.every() 判断数组中满足所有天条件，返回布尔值
        omEvery(){
            let res = [5,10,15,20,25,30]
            let datas = res.every(item => {
                return item < 5
            })
            console.log(datas)
        },
        //16.some() 判断数组中满足条件，返回布尔值
        onSome(){
            let res = [5,10,15,20,25,30]
            let datas = res.some(item => {
                return item < 30
            })
            console.log(datas)
        },

        onBtn(index){
            if(this.btnActived == index){
                this.btnActived = 8
            }else{
                this.btnActived = index
            }
        }
    }
}
</script>

<style scoped>
    .dateSelect{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .dateBtn{
        padding: 10px 18px;
        margin: 26px;
    }
    .active{
        background: orange;
        color: yellow;
        font-weight: bold;
    }
    .mapbox{
        width: 720px;
        height: 720px;
        margin: 0px auto;
        border: 1px solid #f5f5f5;
    }
</style>