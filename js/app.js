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

  angular.module("Aquila", []).controller("AquilaController", AquilaController);

  AquilaController.$inject = ["$scope"];
  function AquilaController($scope) {
    $scope.brandName = "Aquila Tekno Solutions";
  }
})();
