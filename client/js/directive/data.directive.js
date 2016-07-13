angular.module('controleBranchs').directive('ciData', function(){
	
	return {
		require: 'ngModel',
		link: function (scope, element, attrs, ctrl){
			
			element.bind('keyup', function(){
				console.log(ctrl);
				var data = ctrl.$viewValue;
				data = data.replace(/[^0-9]+/g, '');
				if(data.length > 2){
					data = data.substring(0,2) + '/' + data.substring(2);
				}
				if(data.length > 5){
					data = data.substring(0,5) + '/' + data.substring(5,9);
				}
				ctrl.$setViewValue(data);
				ctrl.$render();
			});
			
			element.bind('blur', function(){
				var data = ctrl.$viewValue;
				if(data.length < 10){
					data ='';
				}
				
				ctrl.$setViewValue(data);
				ctrl.$render();
			});
		}
	};
});