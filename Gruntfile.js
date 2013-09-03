'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        expand: true,
        cwd: 'app/',
        src: '*',
        dest: 'dest/',
        filter: 'isFile'
      },
    },
    clean: ['dest/'],
    less: {
      files: {
        expand: true,
        cwd: 'app/styles/',
        src: '*.css',
        dest: 'dest/css/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'less']);

};
