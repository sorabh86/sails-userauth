angular.module('LoginMod')

.controller('LoginCtrl', ['$scope', '$http', function($scope, $http){
	$scope.runLogin = function(){
		console.log('login submitted');
	};
}]);