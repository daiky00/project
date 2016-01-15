/**
 * Modernizr - Build out a lean, mean Modernizr machine.
 *
 * Tests, etc.:
 * https://modernizr.com/download
 *
 * Available options:
 * https://github.com/doctyper/customizr#config-file
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('modernizr', {
    dist: {
      options: [
        'setClasses',
        'addTest',
        'testProp',
        'fnBind'
      ],

      files: {
        src: [
          '<%= xh.src %>/js/**/*.js',
          '<%= xh.src %>/scss/**/*.scss'
        ]
      },

      dest: '<%= xh.dist %>/js/modernizr.min.js'
    }
  });
};
