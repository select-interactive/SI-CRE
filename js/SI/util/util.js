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