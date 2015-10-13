/* scripts/controllers/TimeEntry.js */

(function(){

    'use strict';
    angular.module('timeTracker')
        .controller('TimeEntry', TimeEntry);

        function TimeEntry(time){
            var tm = this; // vm is the capture variable
            tm.timeentries =[];
        }
})();