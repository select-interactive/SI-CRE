///<reference path="SI.js">
/*!
 * util.js
 * @author: Jeremy Burton (jeremy@select-interactive.com - www.select-interactive.com)
 */
(function( doc, $ ) {

    var s, els;
    
    // global app object
    window.SI = {
        
        // global settings
        settings: {
            viewportmeta: doc.querySelector && doc.querySelector( 'meta[name="viewport"]' ),
            ua: navigator.userAgent,

            moduleId: -1
        },

        elements: {
            editorWrapper: null,
            quillEditor: null,
            btnQuillSave: null
        },

        // kick off our app/page
        init: function() {
            s = this.settings;
            els = this.elements;

            this.scaleFix();
            this.initSlides();
            //this.checkUser();
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
                transDelay = 8000,
                transTime = 500,
                transTimeout = null,
                isRotating = false,
                visProp = getHiddenProp();

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

                doc.addEventListener( 'keyup', function( e ) {
                    if ( e.keyCode === 37 ) {
                        rotate( DIR_PREV, true );
                        e.preventDefault();
                    }
                    else if ( e.keyCode === 39 ) {
                        rotate( DIR_NEXT, true );
                        e.preventDefault();
                    }
                }, false );

                transTimeout = setTimeout( rotate, transDelay );

                // If we have slides, we want to stop rotating
                //   if tab is not the one in focus
                if ( visProp ) {
                    var evtname = visProp.replace( /[H|h]idden/,'' ) + 'visibilitychange';
                    document.addEventListener( evtname, function() {
                        if ( isTabHidden() ) {
                            clearTimeout( transTimeout );
                        }
                        else {
                            transTimeout = setTimeout( rotate, transDelay );
                        }
                    }, false );
                }
            }
        },

        checkUser: function() {
            if ( window.SIUser && SIUser.admin ) {
                Modernizr.load([
                {
                    load: '/js/libs/quill.js',
                    complete: function() {
                        // create the editor and add it to the page
                        els.editorWrapper = doc.createElement( 'div' );
                        els.editorWrapper.id = 'quill-editor';
                        els.editorWrapper.classList.add( 'quill-wrapper' );
                        els.editorWrapper.classList.add( 'hidden' );

                        doc.body.appendChild( els.editorWrapper );

                        els.editorWrapper.innerHTML = '<div id="quill-toolbar" class="quill-toolbar">' +
                                   '<span class="sc-format-group">' +
                                   '<span title="Bold" class="sc-format-button sc-bold"></span>' +
                                   '<span class="sc-format-separator"></span>' +
                                   '<span title="Italic" class="sc-format-button sc-italic"></span>' +
                                   '<span class="sc-format-separator"></span>' +
                                   '<span title="Underline" class="sc-format-button sc-underline"></span>' +
                                   '</span>' +
                                   '</div>' +
                                   '<div id="the-editor"><p>Hello World!</div>' +
                                   '<button id="btn-quill-save">Save</button>';

                        forEachElement( doc.querySelectorAll( '.module' ), function( el ) {
                            el.addEventListener( 'click', function() {
                                var temp = el.innerHTML;

                                if ( ! el.classList.contains( 'editing' ) ) {
                                    el.classList.add( 'editing' );

                                    s.moduleId = parseInt( el.getAttribute( 'data-module-id' ), 10 );
                                    console.log( els.quillEditor );
                                    console.log( el.innerHTML );
                                    
                                    //els.editorWrapper.parentNode.removeChild( els.editorWrapper );
                                    el.innerHTML = '';
                                    el.appendChild( els.editorWrapper );
                                    els.editorWrapper.classList.remove( 'hidden' );
                                    
                                    els.quillEditor = new Quill( '#the-editor', {
                                        logLevel: false,
                                        modules: {
                                            'toolbar': { container: '#quill-toolbar' },
                                            'image-tooltip': true,
                                            'link-tooltip': true
                                        },
                                        theme: 'snow'
                                    });

                                    els.quillEditor.setHTML( temp );
                                }
                            }, false );
                        });

                        els.btnQuillSave = doc.getElementById( 'btn-quill-save' );
                        els.btnQuillSave.addEventListener( 'click', function( e ) {
                            var html = els.quillEditor.getHTML();

                            //SI.ajax( '/webservices/wsContent.asmx/saveModule', {
                            //    moduleId: s.moduleId,
                            //    html: html
                            //}, function( data ) {
                            //    var el = els.editorWrapper.parentNode,
                            //        rsp;
                            //
                            //    if ( data && data.d ) {
                            //        rsp = JSON.parse( data.d );
                            //
                            //        if ( rsp.status === 'success' ) {
                            //            el.innerHTML = html;
                            //            el.classList.remove( 'editing' );
                            //            s.moduleId = -1;
                            //        }
                            //        else {
                            //            console.log( rsp.msg );
                            //        }
                            //    }
                            //});

                            console.log( html );
                        }, false );
                    }
                }])
            }
        }
    };

    // start our app/page
    SI.init();
}( document, jQuery ) );