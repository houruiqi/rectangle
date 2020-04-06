/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        // htmlhint: {
        //     options: {
        //         htmlhintrc: './.htmlhintrc'
        //     },
        //     src: '*.html'
        // },
        // csslint: {
        //     options: {
        //         csslintrc: './.csslintrc'
        //     },
        //     src: '*.css'
        // },
        // eslint: {
        //     options: {
        //         eslintrc: './.eslintrc.json'
        //     },
        //     target: ['*.js']
        // },
        // uglify: {
        //     release:{
        //       files: {
        //         'rectangle.min.js': 'rectangle.js'
        //       }
        //     }       
        // },
        // cssmin: {  
        //     'dist/rectangle.min.css': 'rectangle.css'
        // },
        // htmlmin: {
        //     options: {
        //       collapseWhitespace: true,
        //       preserveLineBreaks: false
        //     },
        //     files: {
        //       src: './indexmax.html',
        //       dest: 'index.html'
        //     }
        // },
        // concat: {
        //     js: {
        //       src: ['rectangle.js', 'util.js'],
        //       dest: 'dist/bundle.min.js'
        //     }
        // },
        // uglify: {
        //     release:{
        //       files: {
        //         'dist/uglifybundle.min.js': 'dist/bundle.min.js'
        //       }
        //     }       
        // },
        // useminPrepare: {
        //     html: 'index.html',
        //     options: {
        //       dest: 'dist'
        //     }
        // },
        // usemin: {
        //     html: ['dist/index_max.html']
        // },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: 'dist/index.html',
              dest: 'dist/index.html'
            }
        },
        csslint: {
            options: {
                csslintrc: './.csslintrc'
            },
            src: '*.css'
        },
        eslint: {
            options: {
                eslintrc: './.eslintrc.json'
            },
            target: ['*.js']
        },
        mochacli: {
            options: {
              reporter: 'spec',
              bail: true
            },
            all: ['test/*.js']
          },
          mocha_istanbul: {
            coverage: {
              src: 'test'
            }
          },
          istanbul_check_coverage: {
            default: {
              options: {
                coverageFolder: 'coverage*',
                check: {
                  lines: 90,
                  statements: 90
                }
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-mocha-cli');
    grunt.loadNpmTasks('grunt-mocha-istanbul');
    grunt.registerTask('default',['htmlhint','csslint','eslint','mochacli']);
    grunt.registerTask('cover', ['mocha_istanbul']);
    grunt.registerTask('check-cover', ['istanbul_check_coverage']);
        // clean: ['dist', 'package-lock.json', '.tmp']
            // grunt.loadNpmTasks('grunt-htmlhint');
    // grunt.loadNpmTasks('grunt-contrib-csslint');
    // grunt.loadNpmTasks('grunt-eslint');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-usemin');
    // grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default',['htmlmin']);
    // grunt.registerTask('clean-all', ['clean']);
    // 'htmlhint','csslint','eslint','uglify:release',,
    // 
};