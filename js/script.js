$(document).ready(function(){
	$(".default_option.country").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".select_ul.country li").click(function(){
		var currentele = $(this).html();
		$(".default_option.country li").html(currentele);
		$(this).parents(".select_wrap.country").removeClass("active");
	});

  $(".default_option.currency").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".select_ul.currency li").click(function(){
		var currentele = $(this).html();
		$(".default_option.currency li").html(currentele);
		$(this).parents(".select_wrap.currency").removeClass("active");
	});

  $(".default_option.lang").click(function(){
		$(this).parent().toggleClass("active");
	})

	$(".select_ul.lang li").click(function(){
		var currentele = $(this).html();
		$(".default_option.lang li").html(currentele);
		$(this).parents(".select_wrap.lang").removeClass("active");
	});

});
