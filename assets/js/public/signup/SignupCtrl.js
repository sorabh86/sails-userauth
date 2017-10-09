angular.module('SignupMod')

.controller('SignupCtrl', ['$scope', '$http', function($scope, $http){
	$scope.runSignup = function(){
		
		// Submit to sails service
		$http.post('/signup', {
			name:$scope.name,
			email:$scope.email,
			password:$scope.password
		}).then(function (res){

		},function(err){
			console.log('Error: ', err);
		});
	}
}]);