(function($){
	$.fn.elementNavigator = function(options) {
		var defaults = {S
			 selector: 'img'
		};
		var options = $.extend({}, defaults, options);
	    var $selector = options.selector,
	                    $element = $($selector, this),
	                    $currentElement	= null;
		$(window).bind('keydown', function(event) { 
		
			var key = event.keyCode;

				switch(key) {
					case 37:
						if($currentElement == null) {
							$currentElement = 0;
						} else if(!($currentElement == $element.length - 1)) {
							$currentElement++;
						}
						break;
					case 39:
						if($currentElement == null) {
							return;
						} else if(!($currentElement == 0)) {
							$currentElement--;
						}
						break;
					case 74:
						if($currentElement == null) {
							$currentElement = 0;
						} else if(!($currentElement == $element.length - 1)) {
							$currentElement++;
						}
						break;
					case 75:
						if($currentElement == null) {
							return;
						} else if(!($currentElement == 0)) {
							$currentElement--;
						}
						break;
					default:
					return;
				}

				var $thisElement = $element.eq($currentElement),
					position = $thisElement.offset().top;
				$('html, body').scrollTop(position);

		});
	
	};
})(jQuery);