(function () {
	"use strict;"

	angular
		.module("app")
		.controller("HomeController", HomeController);

	HomeController.$inject = ['$log'];

	function HomeController($log) {

		var vm = this;

		vm.title = "Home";


		activate();

		function activate() {
			$log.debug("home controller activated...");
		}
	}

})();