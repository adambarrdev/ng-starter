(function () {
	"use strict;"

	angular
		.module("app")
		.controller("AboutController", AboutController);

	AboutController.$inject = ['$log'];

	function AboutController($log) {

		var vm = this;

		vm.title = "About";


		activate();

		function activate() {
			$log.debug("about controller activated...");
		}
	}

})();