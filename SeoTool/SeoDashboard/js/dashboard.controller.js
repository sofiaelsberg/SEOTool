(function () {
    "use strict";
 
    function dashboardController($http) {
 
        var vm = this;

        vm.links = [];
        vm.fetchingBrokenLinks = false;

        //var id = editorstate.current.id;
        //contentresource.getniceurl(id)
        //    .then(function (url) {
        //        if (typeof vm.url === "undefined") {
        //            vm.baseapi(url);
        //            vm.url = url;
        //        }
        //    });

        vm.baseAPI = function () {
            vm.fetchingBrokenLinks = true;
            $http.get('/umbraco/backoffice/api/brokenlinks/getbrokenlinks?path=/about-us/')
                .then(function (json) {
                    vm.links = json.data;
                    vm.fetchingBrokenLinks = false;
                    console.log(vm.links.StatusCode);
                });
        }
 
        //vm.changetab = changetab;
 
        //vm.tabs = [
        //    {
        //        "alias": "tabone",
        //        "label": "something 1",
        //        "active": true
        //    },
        //    {
        //        "alias": "tabtwo",
        //        "label": "something 2"
        //    }
        //];
 
        //function changetab(selectedtab) {
        //    vm.tabs.foreach(function(tab) {
        //        tab.active = false;
        //    });
        //    selectedtab.active = true;
        //};
 
        //eventsservice.on("app.tabchange", function(name, args){
        //    console.log("args", args);
        //});
 
    }
 
    angular.module("umbraco").controller("dashboardController", dashboardController);
 
})();