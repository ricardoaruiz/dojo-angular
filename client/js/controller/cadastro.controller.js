angular.module('controleBranchs').controller('cadastroCtrl', function($scope, dateFilter, branchsFactory, statusList, $location){
	$scope.statusList =statusList.data;
	
	$scope.adicionarBranch = function(branch){
		branch.data = dateFilter(new Date(),'dd/MM/yyyy HH:mm');
		branchsFactory.saveBranchs(branch).then(function(response){
			$location.path('/busca');
		}).catch(function(response){
			$scope.error = 'deu erro cara!'
		});
	};
	
});