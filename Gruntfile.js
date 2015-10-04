module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        connect: {
            options: {
                hostname: '127.0.0.1',
                keepalive: true,
                open: true,
                protocol: 'http'
            },
            dev: {
                options: {
                    base: './',
                    port: 8080
                }
            }
        },

        eslint: {
            options: {
                configFile: 'eslint.json'
            },
            target: ['src/*.js']
        },

        babel: {
            options: {
                sourceMap: false
            },
            es6: {
                files: [{
                    expand: true,
                    cwd: './src',
                    src: ['*.js'],
                    dest: './dist/',
                    ext: '.js'
                }]
            }
        },

        uglify: {
            options: {
                banner: '',
                sourceMap: false,
                preserveComments: 'some'
            },
            js: {
                files: [{
                    expand: true,
                    cwd: './dist',
                    src: ['*.js', '!*.min.js'],
                    dest: './dist',
                    ext: '.min.js'
                }]
            }

        },

        watch: {
            options: {
                livereload: 35729
            },
            js: {
                files: ['./src/*.js'],
                tasks: ['build']
            }
        },

        shell: {
            test: {
                command: 'karma start tests/karma-conf.js'
            }
        }

    });

    grunt.registerTask('launch', ['connect:dev']);
    grunt.registerTask('dev', ['watch:js']);
    grunt.registerTask('build', ['eslint', 'babel:es6', 'uglify:js']);
    grunt.registerTask('test', ['build', 'shell:test']);

};