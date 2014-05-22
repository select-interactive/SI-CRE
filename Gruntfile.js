/*global module:false*/
module.exports = function( grunt ) {
    'use strict';

    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON( 'package.json' ),

        compass: {
            dev: {
                options: {
                    cssDir: 'css',
                    debugInfo: true,
                    fontsDir: 'font',
                    imagesDir: 'img',
                    javascriptDir: 'js',
                    outputStyle: 'expanded',
                    require: ['compass-placeholders', 'susy'],
                    sassDir: 'css/sass',
                    sourcemap: true
                }
            },
            prod: {
                options: {
                    cssDir: 'css',
                    environment: 'production',
                    fontsDir: 'font',
                    force: true,
                    imagesDir: 'img',
                    javascriptDir: 'js',
                    outputStyle: 'compressed',
                    noLineComments: true,
                    require: ['compass-placeholders', 'susy'],
                    sassDir: 'css/sass'
                }
            }
        },

        concat: {
            cssProd: {
                src: ['css/styles.css'],
                dest: 'css/styles.min.css'
            },

            jsUtil: {
                src: ['js/<%= pkg.appDir %>/util/*.js'],
                dest: 'js/<%= pkg.appDir %>/util-comp.js'
            }
        },

        imagemin: {
            prod: {
                files: [
                    {
                        expand: true,
                        cwd: 'img/',
                        src: ['**/*.jpg', '**/*.png'],
                        dest: 'img'
                    }
                ],
                options: {
                    progressive: true
                }
            }
        },

        jshint: {
            all: [
                'Gruntfile.js',
                'js/<%= pkg.appDir %>/*.js',
                '!js/<%= pkg.appDir %>/util-comp.js'
            ],
            options: {
                boss: true,
                browser: true,
                curly: true,
                devel: true,
                eqeqeq: true,
                eqnull: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,

                globals: {
                    forEachElement: true,
                    jQuery: true,
                    Modernizr: true,
                    trimString: true
                }
            }
        },

        uglify: {
            prod: {
                files: grunt.file.expandMapping(['js/si/*.js'], 'js/si/build/', {
                    rename: function( destBase, destPath ) {
                        var fName = destPath.replace( '.js', '.min.js' );
                        fName = fName.substring( fName.indexOf( 'si/' ) + 3 );
                        fName = destBase + fName;
                        return fName;
                    }
                })
            }
        },

        // webP conversion task
        webp: {
            files: {
                src: ['img/**/*.jpg', 'img/**/*.png'],
                dest: 'img/'
            },
            options: {
                quality: 80
            }
        },

        // watch task
        watch: {
            compass: {
                files: [
                    'css/sass/*.scss', 
                    'css/sass/**/*.scss'
                ],
                tasks: ['compass:dev'],
                options: {
                    livereload: true
                }
            },

            jshint: {
                files: [
                    'Gruntfile.js',
                    'js/<%= pkg.appDir %>/*.js',
                    'js/<%= pkg.appDir %>/util/*.js',
                    '!js/<%= pkg.appDir %>/util-comp.js'
                ],
                tasks: ['jshint', 'concat:jsUtil'],
                options: {
                    livereload: true
                }
            },

            dotnetfiles: {
                files: [
                    '*.aspx',
                    '*.vb',
                    '**/*.aspx',
                    '**/*.vb',
                    '**/**/*.aspx',
                    '**/**/*.vb',
                    'masterpages/*.master',
                    'controls/*.ascx',
                    '*.ashx',
                    '/app_code/webservices/*.vb'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load Compass plugin task
    grunt.loadNpmTasks( 'grunt-contrib-compass' );

    // Load Concat plugin task
    grunt.loadNpmTasks( 'grunt-contrib-concat' );

    // Load Imagemin plugin task
    //grunt.loadNpmTasks( 'grunt-contrib-imagemin' );

    // Load JSHint plugin task
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );

    // Load Watch plugin task
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );

    // Load Watch plugin task
    grunt.loadNpmTasks( 'grunt-contrib-watch' );

    // Load webP plugin task
    grunt.loadNpmTasks( 'grunt-webp' );

    // Set Tasks
    // Default task
    grunt.registerTask( 'default', ['watch'] );

    // Build task
    grunt.registerTask( 'build', ['compass:prod', 'concat:cssProd', 'uglify', 'imagemin'] );

    // JS Only Build task
    // Minify JS files and output to /build directory
    grunt.registerTask( 'js', ['uglify'] );

    // CSS Only Build task
    // Compile Compass and produce styles.min.css
    grunt.registerTask( 'css', ['compass:prod', 'concat:cssProd'] );

    // Img Only Build task
    // Optimize images for production
    //grunt.registerTask( 'img', ['imagemin'] );

    // WebP Only taks
    grunt.registerTask( 'imgwebp', ['webp'] );
};