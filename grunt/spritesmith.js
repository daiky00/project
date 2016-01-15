/**
 * Spritesmith - automatically creates sprites from the specifed files.
 */
module.exports = function(grunt) {
  'use strict';

  grunt.config('sprite', {
    dist1x: {
      src: '<%= xh.src %>/img/sprites/1x/*.{png,jpg,gif}',
      dest: '<%= xh.dist %>/img/common/sprites@1x.png',
      destCss: '<%= xh.src %>/scss/setup/_sprites@1x.scss',
      cssTemplate: '<%= xh.src %>/scss/setup/_sprites.scss.mustache',
      algorithm: 'binary-tree',
      padding: 2,
      cssOpts: {
        map: 'sprite-1x'
      }
    },
    dist2x: {
      src: '<%= xh.src %>/img/sprites/2x/*.{png,jpg,gif}',
      dest: '<%= xh.dist %>/img/common/sprites@2x.png',
      destCss: '<%= xh.src %>/scss/setup/_sprites@2x.scss',
      cssTemplate: '<%= xh.src %>/scss/setup/_sprites.scss.mustache',
      algorithm: 'binary-tree',
      padding: 4,
      cssOpts: {
        map: 'sprite-2x',
        functions: false
      }
    }
  });
};
