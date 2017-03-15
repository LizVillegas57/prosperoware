module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // copy all files from src to htdocs
    copy: {
      main: {
        files: [
          {
            expand: true,
            src: [
              '**',
              '!**/main.js',
              '!**/*.scss',
              '!**/sass/**'
            ],
            cwd: 'src',
            dest: 'htdocs/'
          },
          {
            expand: true,
            src: [
              'bower_components/materialize/dist/css/materialize.min.css'
            ],
            dest: 'src/sass/lib/',
            flatten: true,
            rename: function(dest) {
              return dest + '_materialize.scss'
            }
          },
          {
            expand: true,
            src: [
              'bower_components/materialize-clockpicker/dist/css/materialize.clockpicker.css'
            ],
            dest: 'src/sass/lib/',
            flatten: true,
            rename: function(dest) {
              return dest + '_materialize-clockpicker.scss'
            }
          }
        ]
      }
    },

    // concat js
    concat: {
      options: {
        separator: '\n;' // was ; places new line between different files to avoid conflicts
      },
      dist: {
        src: [
          'https://code.jquery.com/jquery-2.1.1.min.js',
          'bower_components/jquery/dist/jquery.min.js',
          'bower_components/bootstrap-sass/assets/javascripts/bootstrap.min.js',
          'bower_components/materialize/dist/js/materialize.min.js',
          'bower_components/materialize-clockpicker/dist/js/materialize.clockpicker.js',
          'src/js/app.js'
        ],
        dest: 'htdocs/js/app.min.js'
      }
    },

    // minify or "uglify" javascript files
    uglify: {
      options: {
        compress: false,
      },
      dist: {
        files: {
          'htdocs/js/app.min.js' : ['<%= concat.dist.dest %>']
        }
      }
    },

    watch: {
      files: [
        '<%= concat.dist.src %>',
        'src/**/*',
        'Gruntfile.js'
      ],
      tasks: ['copy', 'concat', 'sass']
    },

    sass: {
      options: {
        outputStyle: 'compressed',
        force: true
      },

      common: {
        files: {
          'htdocs/css/main.css': 'src/sass/main.scss'
        }
      }
    }
  });

  // Load externally defined tasks.
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');

  // Establish tasks we can run from the terminal.
  grunt.registerTask(
    'default',
    'Watches the project for changes, automatically builds them and runs a server.',
    ['copy', 'concat', 'sass', 'watch']
  );
};
