module.exports = function(grunt) {
    
    grunt.initConfig({      
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    "./dist/css/styles.css": "./assets/scss/main.scss"
                }
            }
        },

        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['./assets/scripts/custom.js'],
                dest: './dist/scripts/custom.js'
            }
        },

        uglify: {
            options: { 
                compress: true 
            },
            applib: {
                src: ['./dist/scripts/custom.js'],
                dest: './dist/scripts/custom.min.js'
            }
        },

        watch: {
            scripts: {
                files: [
                  './assets/**/*.scss'
                ],
                tasks: ['sass']
            },
            concat: {
                files: ['./assets/**/*.js'],
                tasks: ['concat']
            },
            uglify: {
                files: ['./dist/scripts/custom.js'],
                tasks: ['uglify']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    grunt.registerTask('default', ['sass','concat', 'uglify']);
    
  
};