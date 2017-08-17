module.exports = function (grunt) {
    grunt.initConfig({
        clean: ['dist/*'],
        cssmin: {
            options: {
                banner: '/* afm-icon */'
            },
            app: {
                expand: true,
                cwd: 'css/',
                src: 'afm-icon.css',
                dest: 'dist/',
                ext: '.min.css'
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, src: ['fonts/*'], dest: 'dist/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean', 'cssmin', 'copy']);
};