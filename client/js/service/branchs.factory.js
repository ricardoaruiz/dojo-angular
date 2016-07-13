angular.module('controleBranchs').factory('branchsFactory', function ($http, config){
	
	var _getBranchs = function(){
		return $http.get(config.baseUrl + '/branchs');	
	}
	
	var _saveBranchs = function(branch){
		return $http.post(config.baseUrl + '/branchs', branch);	
	}
	
	var _getBranch = function(id){
		return $http.get(config.baseUrl + '/branchs/' + id);	
	}
	
	return {
		getbranchs: _getBranchs,
		getbranch: _getBranch,
		saveBranchs: _saveBranchs
	};
});