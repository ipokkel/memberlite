/**
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */
( function( $ ) {
	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );	
	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {		
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title' ).css( {
					'text-indent': '-9999em',
				} );
				$( '.site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title' ).css( {
					'text-indent': '0',
				} );
				$( '.site-description' ).css( {
					'clip': 'auto',
					'position': 'relative',
					'color': to,
				} );
			}
		} );
	} );
	// Link Color.
	wp.customize( 'color_link', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_link_color_elements).css( {
				'color': to,
			} );
		} );
	} );
	// Meta Link Color.
	wp.customize( 'color_meta_link', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_meta_link_color_elements).css( {
				'color': to,
			} );
		} );
	} );
	// Primary Color.
	wp.customize( 'color_primary', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_primary_background_elements).css( {
				'background': to,
			} );
		} );
	} );
	wp.customize( 'color_primary', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_primary_color_elements).css( {
				'color': to,
			} );
		} );
	} );
	// Secondary Color.
	wp.customize( 'color_secondary', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_secondary_background_elements).css( {
				'background': to,
			} );
		} );
	} );
	wp.customize( 'color_secondary', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_secondary_border_elements).css( {
				'border-bottom-color': to,
				'border-top-color': to,
			} );
			$(memberlite_defaults.color_secondary_border_left_elements).css( {
				'border-left-color': to,
			} );
			$(memberlite_defaults.color_secondary_border_right_elements).css( {
				'border-right-color': to,
			} );
		} );
	} );
	wp.customize( 'color_secondary', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_secondary_color_elements).css( {
				'color': to,
			} );
		} );
	} );
	// Action Color.
	wp.customize( 'color_action', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_action_background_elements).css( {
				'background': to,
			} );
		} );
	} );
	wp.customize( 'color_action', function( value ) {
		value.bind( function( to ) {
			$(memberlite_defaults.color_action_color_elements).css( {
				'color': to,
			} );
		} );
	} );
	wp.customize( 'delimiter', function( value ) {
		value.bind( function( to ) {
			$('.memberlite-breadcrumb .sep, .bbp-breadcrumb-sep').text( to );
		} );
	} );
	wp.customize( 'copyright_textbox', function( value ) {
		value.bind( function( to ) {
			$('.site-info p').text( to );
		} );
	} );
} )( jQuery );