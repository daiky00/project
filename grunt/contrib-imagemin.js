/**
 * ImageMin - optimizes images.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('imagemin', {
    options: {
      optimizationLevel: 3,
      // https://github.com/sindresorhus/grunt-svgmin#available-optionsplugins
      svgoPlugins:[
        { removeViewBox: false },
        { removeUselessStrokeAndFill: false }
      ]
    },
    // optimize SVGs before fallbacks are created
    svg: {
      files: [{
        expand: true,
        cwd: '<%= xh.src %>',
        src: ['<%= xh.images %>/**/*.svg'],
        dest: '<%= xh.dist %>'
      }]
    },
    // optimize SVG fallbacks
    svgfallbacks: {
      files: [{
        expand: true,
        cwd: '<%= xh.dist %>', // optimized files are in dist dir
        src: ['<%= xh.images %>/**/*.png'],
        filter: function(filepath) {
          return grunt.file.exists(filepath.replace(/\.png$/i, '.svg'));
        },
        dest: '<%= xh.dist %>'
      }]
    },
    // optimize non-SVG files
    nosvg: {
      files: [{
        expand: true,
        cwd: '<%= xh.src %>',
        src: ['<%= xh.images %>/**/*.{png,jpg,gif}', '!**/.keep', '!img/sprites/**/*.{png,jpg,gif}'],
        dest: '<%= xh.dist %>'
      }]
    },
    // sprite files
    sprites: {
      files: [{
        expand: true,
        cwd: '<%= xh.dist %>', // sprite files are in dist dir
        src: ['img/common/{sprites,sprites@2x}.png'],
        dest: '<%= xh.dist %>'
      }]
    }
  });
};
