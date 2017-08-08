module.exports = function(grunt) {

    "use strict";

    require('load-grunt-tasks')(grunt);

    var autoprefixer = require('autoprefixer-core');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'), 
        clean: {
            tmp:[".tmp"],
            static:["static/css/<%= pkg.name %>.css","static/css/<%= pkg.name %>.min.css"] 
        },

        concat: {
            options: { 
                stripBanners: true,
                banner: '/*!\n' +
                ' * GoAll CSS v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
                ' * Copyright 2012-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
                ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
                ' * The core css copy from Metro: https://github.com/olton/Metro-UI-CSS\n'+
                ' */\n', 
            }, 
            cssConcat:{
                src:['.tmp/css/*.css'],
                dest:'static/css/<%= pkg.name %>.css'
            },
        }, 
        // 压缩js
        // uglify: {
        //     options: {
        //         banner: '<%= banner %>',
        //         stripBanners: false,
        //         sourceMap: false
        //     },
        //     metro: {
        //         src: '<%= concat.metro.dest %>',
        //         dest: 'static/js/<%= pkg.name %>.min.js'
        //     }
        // },

        less: {
            options: {
                paths: ['static/less'],
                strictMath: false
            }, 
            compileMan: {
                src: 'static/less/goall.less',
                dest: '.tmp/css/<%= pkg.name %>-main.css'
            },
            compileCore: {
                src: 'static/less/metro.less',
                dest: '.tmp/css/<%= pkg.name %>.css'
            },
            compileResponsive: {
                src: 'static/less/metro-responsive.less',
                dest: '.tmp/css/<%= pkg.name %>-responsive.css'
            },
            compileRtl: {
                src: 'static/less/metro-rtl.less',
                dest: '.tmp/css/<%= pkg.name %>-rtl.css'
            },
            compileSchemes: {
                src: 'static/less/metro-schemes.less',
                dest: '.tmp/css/<%= pkg.name %>-schemes.css'
            },
            compileColors: {
                src: 'static/less/metro-colors.less',
                dest: '.tmp/css/<%= pkg.name %>-colors.css'
            },
            compileFont: {
                src: 'static/less/metro-icons.less',
                dest: '.tmp/css/<%= pkg.name %>-icons.css'
            }
        },

        // postcss: {
        //     options: {
        //         processors: [
        //             autoprefixer({ browsers: ['> 5%'] }).postcss
        //         ]
        //     },
        //     dist: { src: 'static/css/*.css' }
        // },

        cssmin: {
            all:{
                src:'static/css/<%= pkg.name %>.css',
                dest:'static/css/<%= pkg.name %>.min.css', 
            } 
        },
  
        watch: {
            scripts: {
                files: ['static/less/*.less'],
                tasks: ['concat',  'less',   'cssmin',]
            }
        }
    });
    grunt.event.on('watch', function(action, filepath, target) {
          grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
    grunt.registerTask('default', [
        'clean',  
        'less', 
        'concat',        
        // 'postcss',
         'cssmin', 
         'watch'
    ]);

};