(function () {
    "use strict";
 
    function htagStructureController($scope, $http, eventsService, contentResource, editorState) {
        var vm = this;
        // below
        

        vm.htags = [];
        vm.fetchingHtags = false;

        var id = editorState.current.id;
        contentResource.getNiceUrl(id)
            .then(function (url) {
                if (typeof vm.URL === "undefined") {
                    vm.baseAPI(url);
                    vm.URL = url;
                }
            });

        vm.baseAPI = function (url) {
            vm.fetchingHtags = true;
            $http.get('/umbraco/backoffice/api/DocumentOutline/GetDocumentOutline', { params: { path: url } })
                .then(function (json) {
                    vm.htags = json.data;
                    vm.fetchingHtags = false;
                });
        }

    }
 
    angular.module('umbraco').controller("htagStructureController", htagStructureController);
 
})();