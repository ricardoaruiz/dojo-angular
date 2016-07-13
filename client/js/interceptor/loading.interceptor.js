angular.module('controleBranchs').factory('loadingInterceptor', function($q, $rootScope, $timeout){
	return {
		request:function(config){
			$rootScope.loading =true;
			return config;
		},
		response: function(response){
			$timeout(function (){
				$rootScope.loading =false;
				
			}, 2000);
			return response;	
		},
		responseError: function(rejection){
			$rootScope.loading =false;
			return $q.reject(rejection);
		},
		requestError: function(rejection){
			$rootScope.loading =false;
			return $q.reject(rejection);
		}
	}
});