$(function(){
	var result=listData.data.list
	console.log(result)
	for(var i=0;i<result.length;i++){
		var htmlModel=$(".divArticle").html()
		htmlModel = htmlModel.replace("$title$", result[i].title);
		htmlModel = htmlModel.replace("$describe$", result[i].describe);
		htmlModel = htmlModel.replace("$price$", result[i].price);
		htmlModel = htmlModel.replace("img/01.jpg", result[i].coverImg);
		$(".articleId").append(htmlModel)
	}
	
	
	
	
	
})
