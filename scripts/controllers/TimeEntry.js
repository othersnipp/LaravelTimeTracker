/* scripts/controllers/TimeEntry.js */

(function(){

    'use strict';
    angular.module('timeTracker')
        .controller('TimeEntry', TimeEntry);

        function TimeEntry(time){
            var vm = this; // vm is the capture variable
            vm.timeentries =[];

            // Below code fetches time entries from static JSON
            // file, and puts results in the vm. timeentries array.
            time.getTime().then(
                function(results){
                    vm.timeentries = results;
                    console.log(vm.timeentries);
                },
                function(error){
                    console.log(error);
                }
            );
        }
})();