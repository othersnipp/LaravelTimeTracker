/* scripts/services/time.js */

(function(){

    'use strict';

    angular
        .module('timeTracker')
        .factory('time', time);

        function time($resource){
            // ngResource call to static JSON data file
            var Time = $resource('data/time.json');
            function getTime() {
                return Time.query().$promise.then(function(results) {
                    angular.forEach(results, function(result) {

                        // Add the loggedTime property which calls
                        // getTimeDiff to give us a duration object
                        result.loggedTime = getTimeDiff(result.start_time, result.end_time);
                    });
                    return results;
                }, function(error) { // Check for errors
                    console.log(error);
                });
            }

            // Use Moment.js to get duration of task
            function getTimeDiff(start, end) {
                var diff = moment(end).diff(moment(start));
                var duration = moment.duration(diff);
                return {
                    duration: duration
                }
            }

            function getTotalTime(timeentries){
                var totalMilliseconds = 0;

                angular.forEach(timeentries, function(key){
                    totalMilliseconds += key.loggedTime.duration._milliseconds;
                });

                // If total milliseconds is more than 24 hours, convert
                // duration to days.
                return{
                    hours: Math.floor(moment.duration(totalMilliseconds).asHours()),
                    minutes: moment.duration(totalMilliseconds).minutes()
                }
            }

            return {
                getTime: getTime,
                getTimeDiff: getTimeDiff,
                getTotalTime: getTotalTime
            }
        }
})();