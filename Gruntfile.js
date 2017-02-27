module.exports = function(grunt) {

  grunt.initConfig({
    arns: grunt.file.readJSON('arns.json'),
    lambda_package: {
        bot: {
            options: {
                package_folder: './bot/'
            }
        }
    },
    lambda_deploy: {
        bot: {
            arn: '<%=arns.bot%>',
            options: {
                timeout: 10
            }
        }
    },
  });

  grunt.loadNpmTasks('grunt-aws-lambda');

  grunt.registerTask('default', ['lambda_package', 'lambda_deploy']);

};