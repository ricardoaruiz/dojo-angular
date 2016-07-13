angular.module('controleBranchs').config(function ($routeProvider){
	$routeProvider.when('/busca', {
		templateUrl: 'view/busca.html',
		controller: 'buscaCtrl',
		resolve: {
			branchs: function (branchsFactory){
				return branchsFactory.getbranchs();
			}
		}
	});
	$routeProvider.when('/cadastro', {
		templateUrl: 'view/cadastro.html',
		controller: 'cadastroCtrl',
		resolve: {
			statusList: function (statusService) {
				return statusService.getStatus();
			}
		}
	});
	$routeProvider.when('/detalhe/:id', {
		templateUrl: 'view/detalhe.html',
		controller: 'detalheCtrl',
		resolve: {
			detalhe: function (branchsFactory, $route) {
				return branchsFactory.getbranch($route.current.params.id);
			}
		}
	});
	$routeProvider.when('/error', {
		templateUrl: 'view/404error.html',
	});
	$routeProvider.otherwise({redirectTo: '/busca'});
});