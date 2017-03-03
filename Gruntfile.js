module.exports = function(grunt) {

  grunt.initConfig({
    arns: grunt.file.readJSON('arns.json'),
    lambda_package: {
        bot: {
            options: {
                package_folder: './bot/'
            }
        },
        web: {
            options: {
                package_folder: './web/'
            }
        }
    },
    lambda_deploy: {
        bot: {
            arn: '<%=arns.bot%>',
            options: {
                timeout: 10
            }
        },
        web: {
            arn: '<%=arns.web%>'
        }
    },
  });

  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.registerTask('default', ['lambda_package', 'lambda_deploy']);

};