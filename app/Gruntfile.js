'use strict';

/**
 * Defines the tasks that will get run prior to the application being served
 * by node.
 *
 * These tasks process the environment.conf file in the config directory and
 * converts it into an angular module that provides the safe (properties whose
 * key starts with 'safe') properties at runtime.
 */
module.exports = function (grunt) {
  grunt.initConfig({
    exec: {
      generate_config_json: {
        command: '/home/runner/tools/generate_config_json.sh /home/runner/artifacts/config/environment.conf /tmp/project.json',
        callback: function () {

        }
      }
    },
    ngconstant: {
      options: {
        name: 'config',
        dest: '/home/runner/artifacts/assets/scripts/config.js',
        constants: function () {
          return {
            projectSettings: grunt.file.readJSON('/tmp/project.json').safe
          };
        },
        values: {
        }
      },
      build: {}
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-ng-constant');

  grunt.registerTask('default', ['exec', 'ngconstant']);
};
