module.exports = function(grunt) {


	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanner: true,
                process: function(str, filepath) {
                    var filename = filepath.split('/');
                    filename = filename[filename.length - 1];
                    return '/**********\n * ' + filename + '\n **********/' + '\n\n' + str;
                }
            },
            dist: {
                src: ['src/*.js'],
                dest: 'dist/code-snippet.js'
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'dist/code-snippet.min.js': ['<%= concat.dist.dest %>']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('default', ['concat', 'uglify']);

};
