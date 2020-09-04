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
    .module("Aquila", [])
    .controller("AquilaController", AquilaController)
    //.controller("ServerVariablesController", ServerVariablesController)
    .service("ServerVariablesService", ServerVariablesService)
    .directive("variablesDirective", VariablesDirective)
    .directive("focusDirective", FocusDirective);

  AquilaController.$inject = ["ServerVariablesService"];
  function AquilaController(ServerVariablesService) {
    var aqc = this;
    aqc.brandName = "Aquila Tekno Solutions";

    aqc.serverVariables = {};

    var promise = ServerVariablesService.getServerVariableObject();
    promise
      .then(function (response) {
        for (var variable in response.data) {
          aqc.serverVariables[variable] = response.data[variable];
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    aqc.checkServerVariables = function () {
      return Object.keys(aqc.serverVariables).length === 6;
    };
  }

  ServerVariablesService.$inject = ["$http"];
  function ServerVariablesService($http) {
    var service = this;

    service.getServerVariableObject = function () {
      var response = $http({
        method: "GET",
        url: "server_variables.txt",
        headers: {
          "Content-type": "application/json",
        },
      });

      return response;
    };
  }

  //ServerVariablesController.$inject = ["ServerVariablesService"];
  //function ServerVariablesController(ServerVariablesService) {
  //var servar = this;

  //servar.checkServerVariables = function () {
  //if (servar.serverVariables) {
  //return true;
  //}
  //return false;
  //};
  //}

  function VariablesDirective() {
    var ddo = {
      controller: AquilaController,
      controllerAs: "aqc",
      bindToController: true,
      restrict: "A",
      scope: {
        serverVariables: "=",
      },
      link: VariablesDirectiveLink,
    };

    return ddo;
  }

  function VariablesDirectiveLink(scope, element, attrs, controller) {
    scope.$watch("aqc.checkServerVariables()", function (newValue, oldValue) {
      if (newValue === true) {
        var serverVariables = controller.serverVariables;
        for (var category in serverVariables) {
          //console.log("<!--" + category + "-->");
          for (var variable in serverVariables[category]) {
            var variableValue = element.find("#" + variable).text();
            serverVariables[category][variable] = variableValue;
            //console.log(variable + ": " + variableValue);
          }
        }
      }
    });

    //var chapID = element.find("#chap-id").text();
    //var chapChallenge = element.find("#chap-challenge").text();
    //console.log(scope.$parent.aqc);
    //console.log(chapID, chapChallenge);
  }

  function FocusDirective() {
    var ddo = {
      link: FocusDirectiveLink,
    };

    return ddo;
  }

  function FocusDirectiveLink(scope, element, attrs, controller) {
    var username = element.find("input");
    username.focus();
  }
})();
