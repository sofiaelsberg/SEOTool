(function () {
    "use strict";
 
    function metaDescriptionController($scope, $rootScope, $http, eventsService, contentResource, editorState) {
        $scope.description = {};
        $scope.reset = function () {
            // Example with 1 argument
            $scope.metaDescription = angular.copy($scope.description);
        };
        $scope.reset();
        $scope.metadescription = $scope.metaDescription;
        $rootScope.metadescription = $scope.metadescription;

    }
 
    angular.module('umbraco').controller("metaDescriptionController", metaDescriptionController);
 
})();
