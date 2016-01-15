/**
 * IncludeReplace - enables simple partials & variables in HTML files.
 */
module.exports = function(grunt) {
  'use strict';

  // HTML Includes
  grunt.config('includereplace', {
    dist: {
      options: {
        globals: {
        },
        includesDir: '<%= xh.tmp %>'
      },
      files: [{
        expand: true,
        cwd: '<%= xh.src %>',
        src: ['*.html', '!template.html'],
        dest: '<%= xh.dist %>',
        ext: '.html'
      }]
    }
  });
};
