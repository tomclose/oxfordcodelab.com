'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
        {
          expand: true,
          cwd: 'app/',
          src: '*',
          dest: 'dist/',
          filter: 'isFile'
        },
        {
          expand:true, cwd: 'app/images', src: '*', dest: 'dist/images'
        },
        {
          src: 'app/bower_components/jquery/jquery.js',
          dest: 'dist/js/jquery.js',
        },
        {
          src: 'app/bower_components/bootstrap/dist/js/bootstrap.js',
          dest: 'dist/js/bootstrap.js',
        }
        ]
      },
    },
    clean: ['dist/'],
    less: {
      files: {
        expand: true,
        cwd: 'app/styles/',
        src: '*.css',
        dest: 'dist/styles/'
      }
    },
    watch: {
      less: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['app/styles/*.css'],
        tasks: ['less'],
      },
      copy: {
        files: ['app/*'],
        tasks: ['copy']
      },
      livereload: {
        // Here we watch the files the sass task will compile to
        // These files are sent to the live reload server after sass compiles to them
        options: { livereload: true },
        files: ['dist/**/*'],
      },
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['clean', 'copy', 'less', 'watch']);

};
