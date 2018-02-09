var cityStr="";
$("#head .content .left .qie").click(function(){
	$("#head .content .left .citylist").css("display","block")
	
	$("#head .content .left .citylist button").click(function(){
	$("#head .content .left .citylist").css("display","none")
	})
	
	$("#head .content .left .citylist .user .top ul li a").click(function(){
 	
 	cityStr =$("#head .content .left .citylist  a").html();
	console.log(cityStr)
	
	$("#head .content .left .citylist").css("display","none")
//	$("#head .content .left .city").html(cityStr)
		
	})
})
// var cityStr=$("#head .content .left .city").html()

//热门城市
var cityObj;
$.getJSON("http://localhost:8080/src/data/city.json",function(res,req){
//	console.log(res);
	cityObj =res.result.citylist;
	var hotcity =res.result.hotcity;
//	console.log(cityObj)
//	console.log(hotcity)
	$("#head .content .left .citylist .user .bottom  .z").html(baidu.template("list",{obj:cityObj}))
	$("#head .content .left .citylist .user .top ul").html(baidu.template("hotcity",{arr:hotcity}))
	changeCity('A')
})
//li点击事件
function changeCity(key){
	$(this).css("background","#A9A9A9")
	var city= cityObj[key];
	console.log(city)
	$("#head .content .left .citylist .user .bottom .city ").html(baidu.template("listCity",{city:city}))
}