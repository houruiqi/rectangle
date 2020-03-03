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
        uglify: {
            release:{
              files: {
                'rectangle.min.js': 'rectangle.js'
              }
            }       
        },
        cssmin: {  
            'rectangle.min.css': 'rectangle.css'
        },
        htmlmin: {
            options: {
              collapseWhitespace: true,
              preserveLineBreaks: false
            },
            files: {
              src: './indexmax.html',
              dest: 'index.html'
            }
        }
    });
    grunt.loadNpmTasks('grunt-htmlhint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-eslint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('default',['htmlhint','csslint','eslint','uglify:release','cssmin','htmlmin']);
};