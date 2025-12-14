/*
	Paradigm Shift by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			default:   ['1681px',   null       ],
			xlarge:    ['1281px',   '1680px'   ],
			large:     ['981px',    '1280px'   ],
			medium:    ['737px',    '980px'    ],
			small:     ['481px',    '736px'    ],
			xsmall:    ['361px',    '480px'    ],
			xxsmall:   [null,       '360px'    ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Hack: Enable IE workarounds.
		if (browser.name == 'ie')
			$body.addClass('is-ie');

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');

	// Scrolly.
		$('.scrolly')
			.scrolly({
				offset: 100
			});

	// Polyfill: Object fit.
		if (!browser.canUse('object-fit')) {

			$('.image[data-position]').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', $this.data('position'))
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

			$('.gallery > a').each(function() {

				var $this = $(this),
					$img = $this.children('img');

				// Apply img as background.
					$this
						.css('background-image', 'url("' + $img.attr('src') + '")')
						.css('background-position', 'center')
						.css('background-size', 'cover')
						.css('background-repeat', 'no-repeat');

				// Hide img.
					$img
						.css('opacity', '0');

			});

		}

	// Gallery.
		$('.gallery')
			.on('click', 'a', function(event) {
			var $a = $(this),
				$gallery = $a.parents('.gallery'),
				$modal = $gallery.children('.modal'),
				href = $a.attr('href');

			// Only allow certain types
			if (!href.match(/\.(jpg|gif|png|mp4)$/i))
				return;

			event.preventDefault();
			event.stopPropagation();

			if ($modal[0]._locked) return;
			$modal[0]._locked = true;

			// Clear previous content
			var $inner = $modal.find('.inner');
			$inner.empty();

			if (href.match(/\.mp4$/i)) {
				// Create video
				var $video = $('<video controls autoplay />');
				$video.attr('src', href);
				$inner.append($video);

				// When video is ready, mark loaded
				$video.on('loadeddata', function() {
				$modal.addClass('loaded');
				});
			} else {
				// Create image
				var $img = $('<img />');
				$img.attr('src', href);
				$inner.append($img);

				$img.on('load', function() {
				$modal.addClass('loaded');
				});
			}

			$modal.addClass('visible').focus();

			setTimeout(function() {
				$modal[0]._locked = false;
			}, 600);
			})
			
			.on('click', '.modal', function(event) {
			var $modal = $(this),
				$inner = $modal.find('.inner');

			if ($modal[0]._locked) return;
			if (!$modal.hasClass('visible')) return;

			event.stopPropagation();
			$modal[0]._locked = true;

			$modal.removeClass('loaded');

			setTimeout(function() {
				$modal.removeClass('visible');
				setTimeout(function() {
				$inner.empty(); // clear both img or video
				$modal[0]._locked = false;
				$body.focus();
				}, 475);
			}, 125);
			})
			.on('keypress', '.modal', function(event) {

				var $modal = $(this);

				// Escape? Hide modal.
					if (event.keyCode == 27)
						$modal.trigger('click');

			})
			.on('mouseup mousedown mousemove', '.modal', function(event) {

				// Stop propagation.
					event.stopPropagation();

			})
			.prepend('<div class="modal" tabIndex="-1"><div class="inner"></div></div>')
				.find('img')
					.on('load', function(event) {

						var $modalImg = $(this),
							$modal = $modalImg.parents('.modal');

						setTimeout(function() {

							// No longer visible? Bail.
								if (!$modal.hasClass('visible'))
									return;

							// Set loaded.
								$modal.addClass('loaded');

						}, 275);

					});

})(jQuery);