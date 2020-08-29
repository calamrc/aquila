$(function () {
  // Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse("hide");
    }
  });
});

(function () {
  "use strict";

  angular
    .module("Hotspot", [])
    .controller("HotspotController", HotspotController);

  HotspotController.$inject = ["$scope"];
  function HotspotController($scope) {
    $scope.username = $(username);
    $scope.ip = "$(ip)";
    $scope.welcome = "$(ip)";
  }
})();
