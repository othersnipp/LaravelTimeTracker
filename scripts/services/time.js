/* scripts/services/time.js */

(function(){

    'use strict';

    angular
        .module('timeTracker')
        .factory('time', time);

        function time($resource){

            // ngResource call to static JSON data file
            var Time = $resource('data/time.json');
            return {};
        }
})();