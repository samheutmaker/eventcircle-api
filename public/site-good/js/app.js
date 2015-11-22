angular.module('event', [])


.controller('MainCtrl', function($scope , $http){


	$scope.eventName = "";
	$scope.eventDate = "";
	$scope.eventStart = "";
	$scope.eventEnd = "";
	$scope.locationName = "";
	$scope.address = "";
	$scope.cost = "";
	$scope.url = "";
	$scope.phone = "";
	$scope.descript = "";

	$scope.eventObject = function(){
		this.eventName = "";
		this.eventDate = "";
		this.eventStart = "";
		this.eventEnd = "";
		this.locationName = "";
		this.address = "";
		this.cost = "";
		this.url = "";
		this.phone = "";
		this.descript = "";
	}

	$scope.newEvent = new $scope.eventObject();

	$scope.submitEvent = function(){

   $http.post('http://localhost:8080/api/events', $scope.newEvent)
            .success(function(data) {

                //$scope.newEvent = {}; // clear the form so our user is ready to enter another

            })

            .error(function(data) {
                console.log('Error: ' + data);
            });


	}

})




