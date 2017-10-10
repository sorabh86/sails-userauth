angular.module('LoginMod')

.controller('LoginCtrl', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
	$scope.runLogin = function(){
		console.log($scope.password);

		$http.put('/login',{
			email: $scope.email,
			password: $scope.password
		}).then(function(res){
			window.location = '/';
		}).catch(function(err){
			if(err.status == 400 || 404) {
				toastr.error('Invalid Credentials', 'Error', {
					closeButton:true
				});
				return;
			}

			toastr.error('An error has occured, please try again later', 'Error', {
				closeButton:true
			});
			return;
		});
	};
}]);