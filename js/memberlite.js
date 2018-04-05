/**
 * memberlite.js
 */
jQuery( document ).ready(
	function() {

			// scroll to target links in page
			jQuery( 'a[href*="#"]:not(.memberlite_tabs a)' ).on(
				'click', function(event) {

					var target = jQuery( jQuery( this ).attr( 'href' ) );

					if ( target.length ) {
						event.preventDefault();
						jQuery( 'html, body' ).animate(
							{
								scrollTop: target.offset().top
							}, 800
						);
					}
				}
			);

			// switch tab content when clicked
			jQuery( '.memberlite_tabbable .memberlite_tabs li a' ).click(
				function(e) {

					// don't want to jump to #
					e.preventDefault();

					// which tab was clicked
					var tab, tabarea;
					tab     = jQuery( this ).attr( 'href' ).replace( /#/, '' );
					tabarea = jQuery( this ).closest( '.memberlite_tabbable' );

					// hide all tab panes
					tabarea.find( '.memberlite_tab_pane' ).hide();
					tabarea.find( '.memberlite_tab_pane' ).removeClass( 'memberlite_active' );

					// show the active one
					jQuery( '#' + tab ).show();
					jQuery( '#' + tab ).addClass( 'memberlite_active' );

					// unstyle tabs
					tabarea.find( '.memberlite_tabs li' ).removeClass( 'memberlite_active' );

					// highlight the active one
					jQuery( this ).closest( 'li' ).addClass( 'memberlite_active' );

				}
			);

			// check if we should switch tab content on page loads
			jQuery( 'a[href="' + window.location.hash + '"]' ).click();

			// mobile navigation
			var mobilenav_trigger = jQuery( 'button.menu-toggle' );
			jQuery( '#mobile-navigation' ).after( jQuery( '<div id="mobile-navigation-height-col"></div>' ) );
			mobilenav_trigger.click(
				function() {

					jQuery( '#mobile-navigation' ).toggleClass( 'toggled' );

					if (jQuery( '#mobile-navigation' ).hasClass( 'toggled' )) {
						jQuery( '#mobile-navigation' ).animate(
							{
								left: '0px'
							}
						);
						jQuery( '#mobile-navigation-height-col' ).animate(
							{
								left: '0px'
							}
						);
					} else {
						jQuery( '#mobile-navigation' ).animate(
							{
								left: '-100%'
							}
						);
						jQuery( '#mobile-navigation-height-col' ).animate(
							{
								left: '-100%'
							}
						);
					}
				}
			);

			// skip link focus fix
			// borrowed from _s theme: https://git.io/vWdr2
			var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
			is_opera      = navigator.userAgent.toLowerCase().indexOf( 'opera' ) > -1,
			is_ie         = navigator.userAgent.toLowerCase().indexOf( 'msie' ) > -1;

		if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
			window.addEventListener(
				'hashchange', function() {
					var element = document.getElementById( location.hash.substring( 1 ) );

					if ( element ) {
						if ( ! / ^ ( ?: a | select | input | button | textarea)$ / i.test( element.tagName ) ) {
							element.tabIndex = -1;
						}

						element.focus();
					}
				}, false
			);
		}

	}
);
