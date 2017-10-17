(function(module){

  'use strict';

  var SASS_DIR   = 'assets/sass/';
  var CSS_DIR   = 'assets/css/';
  var JS_DIR    = 'assets/js/';
  var BOWER_COMPONENTS_DIR = 'bower_components/';

  module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // We provide globals to meta so they can be used dynamically in strings for property names.
      meta: {
        sass: SASS_DIR,
        css: CSS_DIR,
        js: JS_DIR,
        bower_components: BOWER_COMPONENTS_DIR,
      },
      sass: {
        dev: {
          options: {
            style: 'expanded',
            sourcemap: 'none',
          },
          files: {
            '<%= meta.css %>style-human.css': '<%= meta.sass %>style.scss'
          }
        },
        dist: {
          options: {
            style: 'compressed',
            sourcemap: 'none',
          },
          files: {
            '<%= meta.css %>style.css': '<%= meta.sass %>style.scss'
          }
        }
      },
      uglify: {
        options: {
          mangle: false,
          compress: false
        },
        jsmin: {
          files: {
            /*'<%= meta.js %>libs.min.js': [
              // Use libs from cdnjs.com if you can!
            ],*/
            '<%= meta.js %>custom.min.js': [
              '<%= meta.js %>custom/**/*.js'
            ]
          }
        }
      },
      watch: {
        css: {
          files: '**/*.scss',
          tasks: ['sass'],
          options: {
            livereload: 35729,
          }
        },
        js: {
          files: '<%= meta.js %>custom/**/*.js',
          tasks: ['uglify:jsmin'],
          options: {
            livereload: 35729,
          }
        }
      }
    });

    // ////////////////// //
    // LOAD GRUNT MODULES //
    // ////////////////// //

    // Sass to CSS
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Uglify for minification
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');


    // //////////////////// //
    // REGISTER GRUNT TASKS //
    // //////////////////// //

    // Default task
    grunt.registerTask('default', ['build']);

    // Build All -- Current Default
    grunt.registerTask('build', ['sass:dist', 'sass:dev', 'uglify:jsmin']);

    // SASS & CSS Only
    grunt.registerTask('css', ['sass:dist', 'sass:dev']);

    // Javascript Uglify Only
    grunt.registerTask('js', ['uglify:jsmin']);

  };

}(module));
