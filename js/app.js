(function () {
  "use strict";

  angular.module('Hotspot', [])
    .controller('HotspotController', HotspotController);

  HotspotController.$inject = ['$scope'];
  function HotspotController($scope) {
    $scope.username = $(username);
    $scope.ip = "$(ip)";
    $scope.welcome = "$(ip)";
  }

})();
