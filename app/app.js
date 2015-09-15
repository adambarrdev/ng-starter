(function () {
    "use strict";

    angular
        .module("app", [
            
            'ui.bootstrap',
            'ui.router'
            
        ]).config(Configuration);


    Configuration.$inject = ["$stateProvider", "$urlRouterProvider"];

    function Configuration($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state("home", {
                url: "/",
                controller: "HomeController",
                controllerAs: "vm",
                templateUrl: "app/home/home.html"
            })
            .state("about", {
                url: "/about",
                controller: "AboutController",
                controllerAs: "vm",
                templateUrl: "app/about/about.html"
            });

        $urlRouterProvider.otherwise("/");
    }

})();