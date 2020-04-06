/*global module:true*/
module.exports = function(grunt) {
    grunt.initConfig({
        htmlhint: {
            options: {
                htmlhintrc: './.htmlhintrc'
            },
            src: '*.html'
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
};