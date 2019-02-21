$(function() {
	function getUrlParams(name) {
		var reg = new RegExp("(^|&)" + name + "=([^|&]*)(&|$)");
		var value = window.location.search.substr(1).match(reg);
		//value中的值：news=xiaoniaoNews1  ""  xiaoniaoNew1 ""
		if(value != null) {
			return value[2]
		} else {
			return ""
		}
	}
	
	let art = getUrlParams("articleId")
	var result = listData["articleId" + art]
	var list = result.data.list
	var list1 = result.data1.list
	var list2 = result.data2.list

	function addList(arr,where,how) {
		for(var i = 0; i < arr.length; i++) {
			var modelHtml = where.html()
			modelHtml = modelHtml.replace("$title$", arr[i].title);
			modelHtml = modelHtml.replace("$describe$", arr[i].describe);
			modelHtml = modelHtml.replace("$creatByFullName$", arr[i].creatByFullName);
			modelHtml = modelHtml.replace("image/01.jpg", arr[i].coverImg);
			how.append(modelHtml)
		}
	}
	//基础
	addList(list,$(".moban1"),$(".jichu"))
	//进阶
	addList(list1,$(".moban1"),$(".jinjie"))
	//底下的
	addList(list2,$(".moban2"),$(".dixiacontent"))
	

	if(art==1){
		$(".div1 .title").show()
		$(".div1 .jichu").show()
	}else{
		$(".div1 .title").hide()
		$(".div1 .jichu").hide()
		
		
	}
	//左侧边栏颜色变红
	$(".asideLeft li").eq(art).find("a").css("color","red")
	
//	点击加载更多
	var pagestart=1
	var listMore=result.data2["list"+pagestart]
	var yeshu=result.addClass
	$(".more").click(function(){
		
		addList(listMore,$(".moban2"),$(".dixiacontent"))
		pagestart++
		if(pagestart>=yeshu){
			$(".more").html("没有更多了").unbind()
		}
		
		
	})
	if(yeshu==0){
		$(".more").hide()
	}else{
		$(".more").show()
		
	}
	

	
	
})