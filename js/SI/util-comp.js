/**
 * SI JavaScript library
 *
 * @author Jeremy Burton - jeremy@select-interactive.com
 * @version 0.0.2
 *
 * @description To provide crossbrowser support for Select Interactive
 *   projects without relying on jQuery.
 *   
 * Targeting features such as:
 *   addEventListener
 *   classList
 *   forEach
 *   string trim
 *   placeholder
 *   .matchMedia support
 *   equal height columns
 */
(function( window, doc, undefined ) {

    var 
        button = doc.createAttribute( 'button' ),
        div = doc.createElement( 'div' ),
        input = doc.createElement( 'input' );

        
    /**
     * ------------------------
     * addEventListenr Polyfill
     * ------------------------
     */
    if ( ! window.addEventListener ) {
        Element.prototype.addEventListener = window.addEventListener = function( eventType, fn ) {
            this.attachEvent( 'on' + eventType, fn );
        };

        Element.prototype.removeEventListener = window.removeEventListener = function( eventType, fn ) {
            this.detachEvent( 'on' + eventType, fn );
        };
    }


    /**
     * ------------------------------------------------------------------
     * classList Polyfill
     * ------------------------------------------------------------------
     */
    if ( ! ( 'classList' in div ) ) {
        Element.prototype.classList = {};;

        Element.prototype.classList.add = function( className ) {
            this.className += ' ' + className;
        };

        Element.prototype.classList.remove = function( className ) {
            this.className = this.className.replace( new RegExp('(^| )' + className.split( ' ' ).join( '|' ) + '( |$)', 'gi'), ' ' );
        };

        Element.prototype.classList.contains = function( className ) {
            return new RegExp('(^| )' + className + '( |$)', 'gi').test( this.className );
        };
    }


    /**
     * -----------------------------------
     * forEachElement using querySelectAll
     * -----------------------------------
     */
    window.forEachElement = function( elements, fn ) {
        var i = 0,
            len = elements.length;

        for ( ; i < len; i++ ) {
            fn( elements[i], i );
        }
    };


    /**
     * ------------------------------------------------
     * Trim the left and right whitespace from a string
     * ------------------------------------------------
     */
    window.trimString = function( string ) {
        return string.replace( /^\s+|\s+$/g, '' );
    };

    /**
     * --------------------
     * Placeholder Polyfill
     * --------------------
     */
     if  ( ! ( 'placeholder' in input ) ) {
        window.forEachElement( doc.querySelectorAll( '[placeholder]' ), function( el ) {
            var ph = el.getAttribute( 'placeholder' );

            el.value = ph;

            el.addEventListener( 'focus', function() {
                if ( trimString( el.value ) === ph ) {
                    el.value = '';
                }
            }, false );

            el.addEventListener( 'blur', function() {
                if ( trimString( el.value ) === '' ) {
                    el.value = ph;
                }
            }, false );
        });
     }


    /**
     * -----------------------------------------------------------------------------
     * Match media function
     *
     * If browsers don't support .matchMedia or CSS Animations (IE9-) we return true
     * Otherwise we return if the passed mediaQuery matches
     * -----------------------------------------------------------------------------
     */
    window.mq = function( mediaQuery ) {
        return !( window.matchMedia ) || !( Modernizr.cssanimations ) || ( window.matchMedia && window.matchMedia( mediaQuery ).matches );
    };


    /**
     * -------------------------------
     * Replace images with 2X versions
     * on high DPI devices.
     *
     * 2X images should be named with
     * a pattern ending in -@2.ext
     * -------------------------------
     */
    if ( window.matchMedia && window.matchMedia( 'only screen and (-moz-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)' ).matches ) {
        window.forEachElement( doc.querySelectorAll( '.dpi' ), function( img ) {
            var src = img.src,
                index = src.indexOf( '/img/' ) + 5,
                temp = src.substring( index ),
                tempIndex = temp.indexOf( '.' );
            
            temp = temp.substring( 0, tempIndex ) + '-@2' + temp.substring( tempIndex );

            src = src.substring( 0, index ) + temp;
            img.src = src;
        });
    }


    /**
     * --------------------------------------------------------------
     * Useful function for setting floated columns to the same height
     * --------------------------------------------------------------
     */
    if ( doc.querySelectorAll( '.eq-height' ) ) {
        var rows = doc.querySelectorAll( '.eq-height' );

        // Loop through each row that .eq-height
        window.forEachElement( rows, function( row ) {
            var cols = row.querySelectorAll( '.eq-height-item' ),
                imgs = row.querySelectorAll( 'img' ),
                imgsComplete = [],
                imgLen = imgs.length,
                h = 0,

                checkComplete = function() {
                    var complete = true;
                    for ( var i = 0; i < imgLen; i++ ) {
                        if ( ! imgsComplete[i] ) {
                            complete = false;
                        }
                    }

                    if ( complete ) {
                        imgsLoaded();
                    }
                },
                        
                imgsLoaded = function() {

                // Loop through each column to find the tallest one
                window.forEachElement( cols, function( col ) {
                    var colHeight = $( col ).outerHeight(),
                        imgHeight;

                    if ( col.querySelectorAll( 'img' ) ) {
                        imgHeight = $( col ).find( 'img' ).first().height();

                        if ( imgHeight > colHeight ) {
                            colHeight = imgHeight + $( col ).css( 'margin-bottom' );
                        }
                    }

                    if ( colHeight > h ) {
                        h = colHeight;
                    }
                });

                // Loop through and set the height of each column 
                // to the height of the tallest column
                window.forEachElement( cols, function( col ) {
                    col.style.height = h + 'px';
                });
            };

            for ( var i = 0; i < imgLen; i++ ) {
                imgsComplete[i] = false;
            }

            window.forEachElement( imgs, function( el, i ) {
                var index = i;
                        
                if ( el.complete ) {
                    imgsComplete[index] = true;
                    checkComplete();
                }
                else {
                    el.addEventListener( 'load', function() {
                        imgsComplete[index] = true;
                        checkComplete();
                    }, false );
                }
            });
        });
    }
     
}( window, window.document, undefined ) );


// Avoid 'console' errors in browsers that lack a console
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
///<reference path="SI.js">
/*!
 * util.js
 * @author: Jeremy Burton (jeremy@select-interactive.com - www.select-interactive.com)
 */
(function( doc, $ ) {

    var s;
    
    // global app object
    window.SI = {
        
        // global settings
        settings: {
            viewportmeta: doc.querySelector && doc.querySelector( 'meta[name="viewport"]' ),
            ua: navigator.userAgent
        },

        // kick off our app/page
        init: function() {
            s = this.settings;

            this.scaleFix();
            this.initSlides();
        },

        // fix for iPhone viewport scale bug 
        scaleFix: function() {
            if ( s.viewportmeta && /iPhone|iPad|iPod/.test( s.ua ) && !/Opera Mini/.test( s.ua ) ) {
                s.viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
                doc.addEventListener( 'gesturestart', function() {
                    s.viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';    
                }, false );
            }
        },

        // global ajax function
        ajax: function( wsUrl, wsData, callSuccess, callFailure ) {
            if ( typeof wsData !== 'string' ) {
                wsData = JSON.stringify( wsData );
            }

            return $.ajax({
                cache: false,
                contentType: 'application/json; charset=utf-8',
                data: wsData,
                error: callFailure,
                success: callSuccess,
                dataType: 'json',
                type: 'POST',
                url: wsUrl
            });
        },

        // init any slides
        // can only have one "slides" per page
        initSlides: function() {
            var slideWrapper = doc.querySelectorAll( '.slides' ),
                slides,
                width = window.outerWidth,
                btnPrev = doc.getElementById( 'slide-btn-prev' ),
                btnNext = doc.getElementById( 'slide-btn-next' ),
                rotate,
                DIR_PREV = 1,
                DIR_NEXT = 2,
                index = 0,
                len = 0,
                transDelay = 4000,
                transTime = 500,
                transTimeout = null,
                isRotating = false;

            if ( slideWrapper && slideWrapper.length ) {
                slideWrapper = slideWrapper[0];
                slides = slideWrapper.querySelectorAll( '.slide' );
                len = slides.length;

                forEachElement( slides, function( el ) {
                    el.style.width = width + 'px';
                });

                rotate = function( dir, stopRotating ) {
                    var temp;

                    if ( ! isRotating ) {
                        isRotating = true;

                        if ( transTimeout ) {
                            clearTimeout( transTimeout );
                        }

                        if ( ! dir ) {
                            dir = DIR_NEXT;
                        }

                        if ( dir === DIR_NEXT ) {
                            temp = index;
                            slides[index].classList.remove( 'slide-center' );
                            slides[index].classList.add( 'slide-left' );

                            setTimeout( function() {
                                slides[temp].classList.add( 'slide-no-trans' );
                                slides[temp].classList.remove( 'slide-left' );
                                slides[temp].classList.add( 'slide-right' );

                                setTimeout( function() {
                                    slides[temp].classList.remove( 'slide-no-trans' );
                                }, 100 );
                            }, transTime );
                        
                            if ( ++index === len ) {
                                index = 0;
                            }

                            slides[index].classList.remove( 'slide-right' );
                            slides[index].classList.add( 'slide-center' );
                        }
                        else {
                            temp = index;
                            slides[index].classList.remove( 'slide-center' );
                            slides[index].classList.add( 'slide-right' );

                            // get the "next" slide and make sure it's on the left
                            if ( --index < 0 ) {
                                index = len - 1;
                            }
                        
                            slides[index].classList.add( 'slide-no-trans' );
                            slides[index].classList.remove( 'slide-right' );
                            slides[index].classList.add( 'slide-left' );

                            setTimeout( function() {
                                slides[index].classList.remove( 'slide-no-trans' );
                                slides[index].classList.remove( 'slide-left' );
                                slides[index].classList.add( 'slide-center' );
                            }, 10 );
                        }

                        setTimeout( function() {
                            isRotating = false;
                        }, transTime );

                        if ( ! stopRotating || stopRotating === null ) {
                            transTimeout = setTimeout( rotate, transDelay + transTime );
                        }
                    }
                };

                btnPrev.addEventListener( 'click', function( e ) {
                    rotate( DIR_PREV, true );
                    e.preventDefault();
                }, false );

                btnNext.addEventListener( 'click', function( e ) {
                    rotate( DIR_NEXT, true );
                    e.preventDefault();
                }, false );

                transTimeout = setTimeout( rotate, transDelay );
            }

        }
    };

    // start our app/page
    SI.init();
}( document, jQuery ) );