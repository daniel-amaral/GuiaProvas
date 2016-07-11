var app = angular.module('app');

app.controller('SobreCtrl', function($scope){
	$scope.message = "About page loaded!";
	
	$scope.alerta = function(){
		alert("ok")
	}
});