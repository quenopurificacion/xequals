module.exports = function(grunt) {
    
    grunt.initConfig({      
        
        sass: {
            dist: {
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
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['sass','concat']);
    
  
};