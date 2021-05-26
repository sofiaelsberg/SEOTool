(function () {
    "use strict";
 
    function metaPreviewController($scope, $rootScope, $http, eventsService, contentResource, editorState) {
        $scope.getmetatitle = $rootScope.metatitle;
        $scope.getmetadescription = $rootScope.metadescription;

        var vm = this;
        // below
        
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

        vm.phone = false;
        vm.web = true;

        vm.phonePreview = function () {
            vm.phone = !vm.phone;
            vm.web = false;
        }

        vm.webPreview = function () {
            vm.web = !vm.web;
            vm.phone = false;
        }
    }
 
    angular.module('umbraco').controller("metaPreviewController", metaPreviewController);
 
})();
