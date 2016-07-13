angular.module('controleBranchs').controller('buscaCtrl', function($scope, dateFilter, $location, branchs){
	$scope.app = 'controle de branchs';
	$scope.branchs = branchs.data;
	
	// $scope.branchs = [
	// 	{branch: 'fase2/sprint9/CD-456', origem: 'stage', data: dateFilter(new Date(),'dd/MM/yyyy HH:mm'), status: {descricao: 'pull request', ordem: 4}},
	// 	{branch: 'fase3/sprint10/CD-1234', origem: 'stage', data: dateFilter(new Date(),'dd/MM/yyyy HH:mm'), status: {descricao: 'develop', ordem: 1}},
	// 	{branch: 'fase1/sprint07/CD-89', origem: 'master', data: dateFilter(new Date(),'dd/MM/yyyy HH:mm'), status: {descricao: 'done', ordem: 5}}
	// ];
	
	// var carregarBranchs = function (){
	// 	branchsFactory.getbranchs().then(function(response){
	// 		$scope.branchs = response.data;
	// 	}).catch(function(response){
	// 		$scope.error ='deu erro';
	// 	});
	// }
	
	// $scope.statusList = [
	// 	{descricao: 'develop', ordem: 1},
	// 	{descricao: 'pull request', ordem: 4},
	// 	{descricao: 'done', ordem: 5},
	// 	{descricao: 'test', ordem: 2},
	// 	{descricao: 'tested', ordem: 3},
	// ];
	
	// $scope.adicionarBranch = function(branch){
	// 	branch.data = dateFilter(new Date(),'dd/MM/yyyy HH:mm');
	// 	$scope.branchs.push(angular.copy(branch));
	// 	delete $scope.branch;
	// 	$scope.branchForm.$setPristine();
	// };
	
	$scope.adicionarBranch = function (){
		$location.path('/cadastro');
	}
	
	
	$scope.ordernarPor = function (campo){
		$scope.criterioOrdenacao = campo;
		$scope.direcao = !$scope.direcao;	
	};
	
	$scope.apagarBranch = function (branchs){
		$scope.branchs = branchs.filter(function (branch){
			if (!branch.selecionado) return branch;
		});
	};
	
	$scope.hasSelectable = function (branchs){
		return branchs.some(function (branch){
			return branch.selecionado;
		});
	}
	
	
});
