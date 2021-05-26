(function () {
    "use strict";
 
    function brokenLinksCheckerController($scope, $http, eventsService, contentResource, editorState) {
        var vm = this;

        vm.links = [];
        vm.fetchingBrokenLinks = false;

        var id = editorState.current.id;
        contentResource.getNiceUrl(id)
            .then(function (url) {
                if (typeof vm.URL === "undefined") {
                    vm.baseAPI(url);
                    vm.URL = url;
                }
            });

        vm.baseAPI = function (url) {
            vm.fetchingBrokenLinks = true;
            $http.get('/umbraco/backoffice/api/brokenlinks/getbrokenlinks', { params: {path: url}})
                .then(function (json) {
                    vm.links = json.data;
                    vm.fetchingBrokenLinks = false;
                    console.log(vm.links);
                });
        }
    }
 
    angular.module('umbraco').controller("brokenLinksCheckerController", brokenLinksCheckerController);
 
})();
