angular.module('SignupMod')

.controller('SignupCtrl', ['$scope', '$http', function($scope, $http){
	$scope.runSignup = function(){
		
		// Submit to sails service
		$http.post('/signup', {
			name:$scope.name,
			email:$scope.email,
			password:$scope.password
		}).then(function (res){
			console.log('successfully signup');
			window.location = "/";
		},function(err){
			console.log('Error: ', err);
		});
	}
}]);