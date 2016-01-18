module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);

  // jit-grunt with static mappings
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin',
    includereplace: 'grunt-include-replace',
    replace: 'grunt-text-replace',
    validation: 'grunt-html-validation',
    sprite: 'grunt-spritesmith',
  });

  // Project configuration.
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Configs
    xh: {
      src: 'src',
      dist: 'dist',
      tmp: '.tmp',
      usemin: ['{head,scripts}.php'],
      root: __dirname,
      includes: '<%= xh.src %>/includes',
      images: '{img,media}',
      assets: '{img,media,fonts}'
    }
  });

  // Load per-task config from separate files.
  grunt.loadTasks('grunt');

  grunt.registerTask('validate', [
    'validation',
    'notify:validation'
  ]);

  grunt.registerTask('qa', 'Assure quality', [
    'replace:reloader',
    'build',
    'validate',
    'jshint'
  ]);

  grunt.registerTask('build', 'Build site files', [
    'clean:dist',

    'build-usemin-min',
    'build-html',
    'build-modernizr',
    'build-images',
    'build-css',
    'build-js',
    'build-assets',
    'build-beautify',

    'clean:tmp',
    'notify:build'
  ]);

  grunt.registerTask('dev', 'Start a live-reloading dev webserver on localhost', [
    'browserSync',
    'build-usemin',
    'build-modernizr',
    'watch'
  ]);

  grunt.registerTask('default', ['dev']);
};
