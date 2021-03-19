var browser_height = window.screen.availHeight;
var wrap = document.getElementById("app");
wrap.style.height = browser_height + "px";
 
//http://wthrcdn.etouch.cn/weather_mini?city=  APi接口
var app = new Vue({
	el: "#app",
	data: {
		city: "",
		weatherArr: [],
		cityArr:["武汉","广东","深圳","北京"]
	},
	methods: {
		enterSreach: function() {
			console.log("绑定成功")
			console.log(this.city)
			//通过请求库拿到APi的值
			var arr = this;
			axios.get("http://wthrcdn.etouch.cn/weather_mini?city=" + this.city).then(function(response) {
				console.log(response.data.data.forecast)
				arr.weatherArr = response.data.data.forecast;
			}).catch(function(error){
				alert("查询失败！请正确输入城市");
				arr.city="";
			})
		}
	}
})
