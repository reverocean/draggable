/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        html2js: {
            app: {
                options: {
                    base: 'app'
                },
                src: ['app/partials/*.html'],
                dest: 'dist/templates.js',
                module: 'templates'
            }
        },
        protractor: {
            options: {
//                configFile: "", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target: {
                options: {
                    configFile: "test/protractor-conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
            }
        }

//    concat: {
//      options: {
//        banner: '<%= banner %>',
//        stripBanners: true
//      },
//      dist: {
//        src: ['lib/<%= pkg.name %>.js'],
//        dest: 'dist/<%= pkg.name %>.js'
//      }
//    },
//    uglify: {
//      options: {
//        banner: '<%= banner %>'
//      },
//      dist: {
//        src: '<%= concat.dist.dest %>',
//        dest: 'dist/<%= pkg.name %>.min.js'
//      }
//    },
//    jshint: {
//      options: {
//        curly: true,
//        eqeqeq: true,
//        immed: true,
//        latedef: true,
//        newcap: true,
//        noarg: true,
//        sub: true,
//        undef: true,
//        unused: true,
//        boss: true,
//        eqnull: true,
//        browser: true,
//        globals: {
//          jQuery: true
//        }
//      },
//      gruntfile: {
//        src: 'Gruntfile.js'
//      },
//      lib_test: {
//        src: ['lib/**/*.js', 'test/**/*.js']
//      }
//    },
//    qunit: {
//      files: ['test/**/*.html']
//    },
//    watch: {
//      gruntfile: {
//        files: '<%= jshint.gruntfile.src %>',
//        tasks: ['jshint:gruntfile']
//      },
//      lib_test: {
//        files: '<%= jshint.lib_test.src %>',
//        tasks: ['jshint:lib_test', 'qunit']
//      }
//    }
    });

    // These plugins provide necessary tasks.
//  grunt.loadNpmTasks('grunt-contrib-concat');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//  grunt.loadNpmTasks('grunt-contrib-qunit');
//  grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html2js');

    grunt.loadNpmTasks('grunt-protractor-runner');

    // Default task.
    grunt.registerTask('default', ['html2js']);

};
