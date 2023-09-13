<template>
	<div class="banner">
		<div class="item">
			<img :src='dataList[currentIndex]'>
		</div>
		<div class="page">
			<ul>
				<li @click="prevIndex(currentIndex)">&lt;</li>
				<li v-for="(item,index) in dataList" :key="item" @click="getBanner(index)"
					:class="{'active':currentIndex==index}">{{index+1}}</li>
				<li @click="nextIndex(currentIndex)">&gt;</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dataList: [
					"https://i1.mifile.cn/a4/xmad_15535933141925_ulkYv.jpg",
					"https://i1.mifile.cn/a4/xmad_15532384207972_iJXSx.jpg",
					"https://i1.mifile.cn/a4/xmad_15517939170939_oiXCK.jpg"
				],
				currentIndex: 0, //默认显示图片
				timer: null //定时器
			}
		},
		mounted(){
			this.timer = setInterval(() => {
			   this.nextIndex() 
			  }, 1000)
		},
		methods: {
			getBanner(e) {
				this.currentIndex = e
			},
			prevIndex() {	
			},
			nextIndex() {
				this.currentIndex++
				if(this.currentIndex >= this.dataList.length){
					this.currentIndex = 0
				}
			}
			
		}
	}
</script>

<style scoped>
	.banner {
		width: 30%;
		height: auto;
		overflow: hidden;
		margin: 0px auto;
		border: 1px solid cornflowerblue;
		position: relative;
	}

	.item img {
		width: 100%;
		height: auto;
	}

	.active {
		color: #f00 !important;
		
	}

	.page {
		width: 100%;
		position: absolute;
		bottom: 0px;
		left: 0px;
		background: rgba(0, 0, 0, 0.5);
	}

	.page ul {
		display: inline-block;
		float: right;
	}

	.page ul li {
		display: inline-block;
		font-size: 13px;
		padding: 0px 3px;
		color: antiquewhite;
		

	}
</style>
