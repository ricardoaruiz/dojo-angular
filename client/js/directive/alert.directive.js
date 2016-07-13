angular.module('controleBranchs').directive('ciAlert', function(){
	return {
		templateUrl: 'view/alert.html',
		replace:true,
		restrict: 'AE',
		scope:{
			title: '@'
		},
		transclude: true
	};
});