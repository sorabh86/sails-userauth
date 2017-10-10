angular.module('DashMod')

.controller('DashCtrl', ['$scope', '$http', function($scope, $http){
	$scope.getUser = function(){
		console.log('Getting User');

		$http.get('/getuser').then(function(res) {
			$scope.user = res.data;
		}).catch(function(err){
			console.log(err);
		});
	};
}]);