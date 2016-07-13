angular.module('controleBranchs').service('statusService', function($http, config){
	
	this.getStatus = function (){
		return $http.get(config.baseUrl + '/status');	
	};
});