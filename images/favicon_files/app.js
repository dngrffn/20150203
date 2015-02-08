var $document = $(document);
var $window = $(window);

var IllyHelper = {
	InstaFormat: function(){
		var $instagram_items = $("#instagram .insta-item");
		var $i = 0;
		$instagram_items.each(function(){ $i++;
			if($i == 1){
				$(this).addClass("insta-absolute");
			} else if($i == 2){
				$(this).addClass("insta-margin");
			} else if($i == 3){
				$(this).addClass("insta-large");
				$i = 0;
			}

		});
	},
	NutritionFacts: function($fact_selector){
		var $capp_path = '/img/88/nutrition_cappuccino.png', $moch_path = '/img/88/nutrition_mocha.png', $mocc_path = '/img/88/nutrition_latte.png', $caffe_path = '/img/88/nutrition_caffe.png', $image;
		if($fact_selector == 'cappuccino'){ $image = $capp_path; } else if($fact_selector == 'mochaccino'){ $image = $moch_path; } else if($fact_selector == 'latte-macchiato'){ $image = $mocc_path; } else if($fact_selector == 'caffe'){ $image = $caffe_path }
		var $template = '<div id="popup-container"><div id="popup"><center><img src="' + $image + '"></center></div></div>';
		$('body').append($template);
		$('#popup').css({'margin-top': ($(window).height() - 313) / 2 }).fadeIn(500);
		$('#popup-container').unbind().click(function(){$(this).fadeOut(500, IllyHelper.RemoveFacts());});
	},
	RemoveFacts: function(){
		$('#popup-container').remove();
	}
}

$document.ready(function(){
	$('#cappuccino').unbind().click(function(e){
		e.preventDefault();
		IllyHelper.NutritionFacts('cappuccino');
	});
	$('#mochaccino').unbind().click(function(e){
		e.preventDefault();
		IllyHelper.NutritionFacts('mochaccino');
	});
	$('#latte-macchiato').unbind().click(function(e){
		e.preventDefault();
		IllyHelper.NutritionFacts('latte-macchiato');
	});
	$('#caffe').unbind().click(function(e){
		e.preventDefault();
		IllyHelper.NutritionFacts('caffe');
	});
});