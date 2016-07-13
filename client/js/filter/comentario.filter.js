angular.module('controleBranchs').filter('comentarioFilter', function(){
	return function (input, size){
		if(!input){
			return '';
		}
		if (input.length <= (size || 10)){
			return input;
		}
		return input.substring(0, (size || 10)) + '...';
	}
});