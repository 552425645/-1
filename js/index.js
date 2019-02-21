
$(function() {
	var mySwiper = new Swiper('.seiperB', {
		direction: 'horizontal', // 水平
		loop: true, // 循环模式选项

		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		//自动播放
		autoplay: {
			disableOnInteraction: false,
		},

	})

	var mySWiper = new Swiper('.swiperBig', {
		direction: 'horizontal', // 水平
		// 如果需要分页器
		pagination: {
			el: '.swiper-pagination',
		},
	})
})

//请求数据
$(function() {

	// 获取数据
	var global = global || {}
	global.pageStart = 0 //控制加载次数

	function loadList() {
		var result = listData["listData0" + global.pageStart];
		var list = result.data.list;
		console.log(result)
		if(!list || !list.length) {
			$("#cont").html("您请求的数据不存在")
		} else {
			for(var i = 0; i < list.length; i++) {
				var htmlModel = $(".articleId1").html();

				htmlModel = htmlModel.replace("img/586395f4000145e006000338-590-330.jpg", list[i].coverImg);
				htmlModel = htmlModel.replace("$title$", list[i].title);
				htmlModel = htmlModel.replace("$money$", list[i].creatByFullName);
				htmlModel = htmlModel.replace("$describe$", list[i].describe);
				$(".arcitle").append(htmlModel)
			}
		}
		global.pageStart++;
//		global.loadCount = Math.ceil(result.data.count / result.data.pageSize);
//		if(global.pageStart >= global.loadCount) {
//			$('.more_btn').fadeTo(200, 0);
//			$('.list_more').attr('src', 'img/list_gomore_bg_nomore.jpg')
//		}
		if(global.pageStart>=result.data.count){
			$(".more").html("没有更多了").unbind()
		}
	}
	
	
	loadList()
	$(".more").click(function() {
		loadList()
	})

})