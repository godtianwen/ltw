import axios from "axios";

const request = axios.create({
    baseURL: '/template/api',
	timeout: 30 * 1000, //请求超时时间：30秒
	withCredentials: false // 表示跨域请求时是否需要使用凭证
});

// 请求拦截器
request.interceptors.request.use(
	config => { //配置信息处理
		return config;
	},
	error => { //错误处理
		console.log(error);
		return Promise.reject(error);
	}
);

// 响应拦截器
request.interceptors.response.use((res) => { // 请求成功的回调函数
	// console.log(res);
	// return  res.data;
	return  res;
},(err) => { // 请求失败的回调函数
    return Promise.reject('fail');
});

export default request;
