module.exports = function (grunt) {

grunt.registerTask('default', ['browserSync', 'watch']);

  grunt.initConfig({



    browserSync: {
  default_options: {
    bsFiles: {
      src: [
        "css/main.css",
        "*.html"
      ]
    },
    options: {
      watchTask: true,
      server: {
        baseDir: "./public"
      }
    }
  }
},

    // Watch task config
    watch: {
      sass: {
        files: "public/css/*.scss",
        tasks: ['sass']
      }
    },
    // SASS task config
    sass: {
        dev: {
            files: {
                // destination         // source file
                "public/css/main.css" : "public/css/main.scss"
            }
        }
    }


  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
}