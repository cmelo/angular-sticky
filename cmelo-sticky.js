
angular.module('cmelo.angularSticky', [])

	.directive('cmeloSticky', ['$window', function ($window) {
		return {
			restrict: 'A',
			link: function (scope, elem) {

				var wrapper = elem;
				var nodename = elem.eq(0)[0].nodeName.toLowerCase();
				var el = elem;

				if (nodename === 'body') {
					wrapper = angular.element($window);
				}

				function getScrolltop (el) {
					if (nodename === 'body') {
						return document.querySelector('html').scrollTop +
							document.querySelector('body').scrollTop;
					} else {
						return el.eq(0)[0].scrollTop;
					}
				}

				function getOffset(el) {
					if (!el) { return Infinity; }
					return el.offsetTop + el.offsetParent.offsetTop;
				}

				function getClosest(el, attribute) {
					for (; el && el !== document &&
						el.nodeType === 1; el = el.parentNode) {

						if (el.hasAttribute(attribute)) { return el; }
					}
					return null;
				}

				wrapper.on('scroll', function () {

					var stickers_all = document.querySelectorAll('[cmelo-sticky-top]');
					var stickers = [];

					angular.forEach(stickers_all, function (sticker) {
						if(sticker.offsetParent === null)
							return;
						var parent = getClosest(sticker, 'cmelo-sticky');
						if (parent === elem.eq(0)[0]) {
							stickers.push(sticker);
						}
					});


					angular.forEach(stickers, function (sticker, i) {

						var top = parseInt(sticker.getAttribute('cmelo-sticky-top'));
						if (isNaN(top)) { top = 0; }

						var offset_top = getOffset(sticker);
						var offset_next = getOffset(stickers[i+1]);
						var height = sticker.offsetHeight;
						var scroll_top = getScrolltop(el);


						var diff = scroll_top - offset_top + top;
						var next_diff = scroll_top + top + height - offset_next;
						if (next_diff > 0) { diff -= next_diff; }

						if (sticker.nodeName.toLowerCase() === 'thead') {
							var parent_diff =  diff + height -
								sticker.offsetParent.offsetHeight;
							if (parent_diff > 0) {
								diff -= parent_diff;
							}
						}


						var sticker_el = angular.element(sticker);

						if (diff > 0) {
							sticker_el.addClass('cmelo-sticky-on');
							sticker_el.css({
								transform: 'translateY(' + diff + 'px)'
							});
						} else {
							sticker_el.removeClass('cmelo-sticky-on');
							sticker_el.css({
								transform: 'translateY(0px)'
							});
						}

					});

				});


			}
		};
	}])
;
