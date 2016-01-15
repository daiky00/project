/**
 * Watch - observes changes in files and rebuild them as needed.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('watch', {
    options: {
      dot: true,
      spawn: false,
      interrupt: true
    },

    compileCSS: {
      files: ['<%= xh.src %>/scss/**/*.scss'],
      tasks: ['build-css']
    },

    html: {
      files: ['<%= xh.src %>/*.html'],
      tasks: ['build-html']
    },

    usemin: {
      files: ['<%= xh.includes %>/<%= xh.usemin %>'],
      tasks: ['build-usemin', 'build-html']
    },

    includes: {
      files: ['<%= xh.includes %>/*.html', '!<%= xh.includes %>/<%= xh.usemin %>'],
      tasks: ['newer:copy:includes', 'build-html']
    },

    js: {
      files: ['<%= xh.src %>/js/*.js'],
      tasks: ['build-js']
    },

    assets: {
      files: ['<%= xh.src %>/<%= xh.assets %>/**/*'],
      tasks: ['build-assets']
    }
  });
};
