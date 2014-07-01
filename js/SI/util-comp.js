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
        var prototype=Array.prototype,push=prototype.push,splice=prototype.splice,join=prototype.join;function DOMTokenList(a){this.el=a;a=a.className.replace(/^\s+|\s+$/g,"").split(/\s+/);for(var b=0;b<a.length;b++)push.call(this,a[b])} DOMTokenList.prototype={add:function(a){this.contains(a)||(push.call(this,a),this.el.className=this.toString())},contains:function(a){return-1!=this.el.className.indexOf(a)},item:function(a){return this[a]||null},remove:function(a){if(this.contains(a)){for(var b=0;b<this.length&&this[b]!=a;b++);splice.call(this,b,1);this.el.className=this.toString()}},toString:function(){return join.call(this," ")},toggle:function(a){this.contains(a)?this.remove(a):this.add(a);return this.contains(a)}}; window.DOMTokenList=DOMTokenList;function defineElementGetter(a,b,c){Object.defineProperty?Object.defineProperty(a,b,{get:c}):a.__defineGetter__(b,c)}defineElementGetter(Element.prototype,"classList",function(){return new DOMTokenList(this)});
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

            if ( ! row.classList.contains( 'eq-height-no-mbl' ) || window.mq( '(min-width:1024px' ) ) {
                if ( imgLen > 0 ) {
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
                }
                else {
                    imgsLoaded();
                }
            }
        });
    }

     /**
     * ------------------------------------------------------
     * Helper to check if tab is visible using visibility API
     * ------------------------------------------------------
     */
    window.getHiddenProp = function() {
        var prefixes = ['webkit','moz','ms','o'];
    
        // if 'hidden' is natively supported just return it
        if ( 'hidden' in document ) {
            return 'hidden';
        }
    
        // otherwise loop over all the known prefixes until we find one
        for ( var i = 0; i < prefixes.length; i++ ){
            if ( ( prefixes[i] + 'Hidden' ) in document ) 
                return prefixes[i] + 'Hidden';
        }

        // otherwise it's not supported
        return null;
    };

    window.isTabHidden = function() {
        var prop = getHiddenProp();

        if ( ! prop ) {
            return false;
        }
    
        return document[prop];
    };
     
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
            this.initNav();
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

        initNav: function() {
            doc.getElementById( 'nav-trigger' ).addEventListener( 'click', toggleNav, false );

            function toggleNav( e ) {
                doc.getElementById( 'nav-main' ).classList.toggle( 'nav-open' );
                e.preventDefault();
            }
        },

        // init any slides
        initSlides: function() {
            console.log( doc.body.offsetWidth );
            var slideWrappers = doc.querySelectorAll( '.slides' ),
                width = doc.body.offsetWidth - 30,
                DIR_PREV = 1,
                DIR_NEXT = 2,
                transDelay = 8000,
                transTime = 500,
                visProp = getHiddenProp();

            if ( slideWrappers && slideWrappers.length ) {
                forEachElement( slideWrappers, function( slideWrapper ) {
                    var slides = slideWrapper.querySelectorAll( '.slide' ),
                        btnPrev = slideWrapper.querySelectorAll( '.slides-arrows-prev' )[0],
                        btnNext = slideWrapper.querySelectorAll( '.slides-arrows-next' )[0],
                        index = 0,
                        len = slides.length,
                        rotate,
                        isRotating = false,
                        transTimeout = null;
                    
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

                    if ( slideWrappers.length === 1 ) {
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
                    }

                    if ( slideWrapper.classList.contains( 'slides-auto' ) ) {
                        transTimeout = setTimeout( rotate, transDelay );
                    }

                    // If we have slides, we want to stop rotating
                    //   if tab is not the one in focus
                    if ( visProp ) {
                        var evtname = visProp.replace( /[H|h]idden/,'' ) + 'visibilitychange';
                        document.addEventListener( evtname, function() {
                            if ( isTabHidden() ) {
                                clearTimeout( transTimeout );
                            }
                            else {
                                if ( slideWrapper.classList.contains( 'slides-auto' ) ) {
                                    transTimeout = setTimeout( rotate, transDelay );
                                }
                            }
                        }, false );
                    }
                });
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