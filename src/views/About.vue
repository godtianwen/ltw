<template>
  <div class="about">
    11111
  </div>
</template>
<script>
import axios from 'axios';
	export default {
		data(){
			return{
				email: 'test@a.com',
				password: 123123
			}
		},
		created(){
			console.log(this.email,this.password);
			axios({
				method:'POST',
				url:'https://api.shop.eduwork.cn/api/auth/login',
				data:{
					email:this.email,
					password:this.password
				}
			}).then(res=>{
				console.log(res)
			})
		}
	}
</script>
