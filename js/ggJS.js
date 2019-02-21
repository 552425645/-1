$(function() {
	$(".HeaderSousuo").click(function() {
		$(this).addClass("activeX")
		$(".logoHeaderIndex").hide()
		$(".HeaderPersonal").hide()
		$(".HeaderDowlood").hide()
		$(".quxiaoHeader").show()
		$(".globalClass").addClass("globalBorder").find(".HeaderSousuo").addClass("activeX")
		$(".globalClass").find("input").show()
		$(".content1").hide()
		$(".content2").show()
	})

	$(".quxiaoHeader").click(function() {
		$(this).hide()
		$(".icon").show()
		$(".logoHeaderIndex").show()
		$(".globalClass").removeClass("globalBorder").find(".HeaderSousuo").removeClass("activeX")
		$(".globalClass").find("input").hide()
		$(".content1").show()
		$(".content2").hide()
	})

})