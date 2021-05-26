(function () {
    "use strict";
 
    function metaTitleController($scope, $rootScope, $http, eventsService, contentResource, editorState) {
        $scope.title = {};
        $scope.reset = function () {
            // Example with 1 argument
            $scope.metaTitle = angular.copy($scope.title);
        };
        $scope.reset();
        $scope.metatitle = $scope.metaTitle;
        $rootScope.metatitle = $scope.metatitle;

    }
 
    angular.module('umbraco').controller("metaTitleController", metaTitleController);
 
})();
