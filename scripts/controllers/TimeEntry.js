/* scripts/controllers/TimeEntry.js */

(function(){

    'use strict';
    angular.module('timeTracker')
        .controller('TimeEntry', TimeEntry);

        function TimeEntry(time){
            var vm = this; // vm is the capture variable
            vm.timeentries =[];
            vm.totalTime = {};

            // Below code fetches time entries from static JSON
            // file, and puts results in the vm. timeentries array.
            time.getTime().then(
                function(results){
                    vm.timeentries = results;
                    updateTotalTime(vm.timeentries);
                },
                function(error){
                    console.log(error);
                }
            );

            function updateTotalTime(timeentries) {
                vm.totalTime = time.getTotalTime(timeentries);
            }
        }
})();