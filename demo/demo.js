angular
	.module('cmelo', ['cmelo.angularSticky'])

	.component('demo', {
		templateUrl: './demo.html',
		controller: function () {

			var vm = this;

			vm.wrapped = [1, 2, 3, 4, 5, 6, 7];

			vm.body1 = [1, 2, 3];
			vm.body2 = [6, 7, 8];
			vm.table = [3, 7, 10, 60, 1, 3, 6, 7];

		}

	})
;