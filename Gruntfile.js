module.exports = function(grunt) {


	grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                banner: 'if (!window.ne) { window.ne = {}; }\nif (!window.ne.util) { window.ne.util = {}; }\n',
                process: function(src) {
                    var namespaceStr = '    if (!ne) {\n        ne = window.ne = {};\n    }',
                        paramStr = '})(window.ne);';
                    return src.replace(namespaceStr, '').replace(paramStr, '})(window.ne.util);');
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
