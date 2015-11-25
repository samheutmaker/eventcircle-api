angular.module('Controllers', [])


.controller('HomeController', function($scope, Events){


})

.controller('MapController', function($scope, $rootScope, $timeout, Events) {

    L.mapbox.accessToken = "pk.eyJ1Ijoic2FtaGV1dG1ha2VyIiwiYSI6ImNpZnU3enFseTFvbDd1NmtzNTd2Y2p0NHIifQ.sDALtAwT6RWcHdk2jhkBEw";

    $scope.selectedItemDetail = null;



    $scope.editEvent = function(index){

        $scope.selectedItemDetail = $scope.events[index];


        $(".event-list-item").fadeOut(300);
        $(".event-back-button").fadeIn(300);
        $(".event-detail").fadeIn(300);
    }

    $scope.showAllUserEvents = function() {
        $(".event-list-item").fadeIn(300);
        $(".event-back-button").fadeOut(300);
        $(".event-detail").fadeOut(300);
    }

    $scope.enlargeImage = function(){
     $(".detail-image").animate({width: "800px", height: "500px"}, 300);
    }

    $scope.markers = [];
    $scope.events = [];

    //console.log($rootScope.user.data._id);

    $scope.eventObject = function( element ){

        this._id = element._id;
        this.eventName = element.eventName;
        this.locationName = element.locationName;
        this.address = element.address;
        this.latlng = element.latlng;
        this.mapped = false;
        this.tags = element.tags;
        this.date = {   day: element.eventDate,
                        start: element.eventStart,
                        end: element.eventEnd 
                    };
        this.iconSettings = element.iconSettings;
        this.marker = L.marker([this.latlng[0], this.latlng[1]], {
                            icon: L.mapbox.marker.icon(this.iconSettings)
                      });
    
    }

if($rootScope.user) {

$timeout(function(){

    Events.getUserEvents($rootScope.user).then(function successCallback(response) {
        console.log(response)
                response.data.forEach(function(element) {
                    $scope.handleEventResults(element);
                })
        }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

},300)


}

    $scope.handleEventResults = function(element){



        $scope.indexMarker(element);

    }


    $scope.indexMarker = function(element) {

        var newEvent = new $scope.eventObject(element);

        $scope.events.push(newEvent);

        $scope.markers.push({

                    lat: newEvent.latlng[0],
                    lng: newEvent.latlng[1],
                    focus: true,
                    icon: newEvent.iconSettings



                    }

            );

        


    }



	var mainMarker = {
               lat: 48.1978,
	            lng: -114.3161,
                focus: true
            };

            var secondMarker = {
               lat: 49.1978,
	            lng: -114.3161,
                focus: true
            };
            var thirdMarker = {
               lat: 45.1978,
	            lng: -114.3161,
                focus: true
            };

			angular.extend($scope, {

				tiles: {
                    name: 'Mapbox Park',
                    url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    options: {
                        apikey: 'pk.eyJ1Ijoic2FtaGV1dG1ha2VyIiwiYSI6ImNpZnU3enFseTFvbDd1NmtzNTd2Y2p0NHIifQ.sDALtAwT6RWcHdk2jhkBEw',
                        mapid: 'mapbox.streets'
                    }
                },
                markers: angular.copy($scope.markers),
                defaults: {
					        zoomControl: false,
					        path: {
					            weight: 10,
					            color: '#800000',
					            opacity: 1
					       }
				},
               	kalispell: {
	                    lat: 48.1978,
	                    lng: -114.3161,
	                    zoom: 12,
	                  
                	}


            	});
    
   

})




.controller('EventsController', function($scope, $rootScope, $timeout, Events) {

    L.mapbox.accessToken = "pk.eyJ1Ijoic2FtaGV1dG1ha2VyIiwiYSI6ImNpZnU3enFseTFvbDd1NmtzNTd2Y2p0NHIifQ.sDALtAwT6RWcHdk2jhkBEw";

    $scope.selectedItemDetail = null;

    $scope.editEvent = function(index){

        $scope.selectedItemDetail = $scope.events[index];


        $(".event-list-item").fadeOut(300);
        $(".event-back-button").fadeIn(300);
        $(".event-detail").fadeIn(300);
    }

    $scope.showAllUserEvents = function() {
        $(".event-list-item").fadeIn(300);
        $(".event-back-button").fadeOut(300);
        $(".event-detail").fadeOut(300);
    }

    $scope.enlargeImage = function(){
     $(".detail-image").animate({width: "800px", height: "500px"}, 300);
    }

    $scope.markers = [];
    $scope.events = [];

    console.log($rootScope.user.data._id);

    $scope.eventObject = function( element ){

        this._id = element._id;
        this.eventName = element.eventName;
        this.locationName = element.locationName;
        this.address = element.address;
        this.latlng = element.latlng;
        this.tags = element.tags;
        this.mapped = false;
        this.date = {   day: element.eventDate,
                        start: element.eventStart,
                        end: element.eventEnd 
                    };
        this.iconSettings = element.iconSettings;
        this.marker = L.marker([this.latlng[0], this.latlng[1]], {
                            icon: L.mapbox.marker.icon(this.iconSettings)
                      });
    
    }

$timeout(function(){

     Events.get().then(function successCallback(response) {
        console.log(response)
                response.data.forEach(function(element) {
                    $scope.handleEventResults(element);
                })
        }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });


}, 300);

   



    $scope.handleEventResults = function(element){



        $scope.indexMarker(element);

    }


    $scope.indexMarker = function(element) {

        var newEvent = new $scope.eventObject(element);

        $scope.events.push(newEvent);

        $scope.markers.push({

                    lat: newEvent.latlng[0],
                    lng: newEvent.latlng[1],
                    focus: true,
                    icon: newEvent.iconSettings



                    }

            );

        


    }



    var mainMarker = {
               lat: 48.1978,
                lng: -114.3161,
                focus: true
            };

            var secondMarker = {
               lat: 49.1978,
                lng: -114.3161,
                focus: true
            };
            var thirdMarker = {
               lat: 45.1978,
                lng: -114.3161,
                focus: true
            };

            angular.extend($scope, {

                tiles: {
                    name: 'Mapbox Park',
                    url: 'http://api.tiles.mapbox.com/v4/{mapid}/{z}/{x}/{y}.png?access_token={apikey}',
                    type: 'xyz',
                    options: {
                        apikey: 'pk.eyJ1Ijoic2FtaGV1dG1ha2VyIiwiYSI6ImNpZnU3enFseTFvbDd1NmtzNTd2Y2p0NHIifQ.sDALtAwT6RWcHdk2jhkBEw',
                        mapid: 'mapbox.streets'
                    }
                },
                markers: angular.copy($scope.markers),
                defaults: {
                            zoomControl: false,
                            path: {
                                weight: 10,
                                color: '#800000',
                                opacity: 1
                           }
                },
                kalispell: {
                        lat: 48.1978,
                        lng: -114.3161,
                        zoom: 12,
                      
                    }


                });
    
   

})

.controller('LoginController', function($scope, $rootScope, $location, User) {


    $scope.login = {};

    $scope.userLogin = function(){

         User.login($scope.login).then(function successCallback(response) {

            if(response !== "0"){
                $rootScope.user = response;
                $location.url("/account");

            } else {
             
            }
                
                
    
        }, function errorCallback(response) {
            $location.url("/login");
            console.log(response);
  });


    }


})
.controller('RegisterController', function($scope, $rootScope, $location, User) {

    $scope.registerInfo = {};

    $scope.registerUser = function(){
        if($scope.registerInfo.password === $scope.registerInfo.passwordCheck) {
            User.register($scope.registerInfo).then(
                    function(response) {
                        if(response !== "0"){
                            $rootScope.user = response;
                            $location.url("/account");

                        } else {
                         
                        }
                        

                    },
                    function(response) {
                         $location.url("/register");
                         console.log(response);

                    }
                )
        }
    }



  

})
.controller('ProfileController', function($scope, $rootScope, $location) {


        if($rootScope.user === null || $rootScope === "") {
            $rootScope.message = "You need to login";
            $location.url("/");
        }

        $scope.path = 'views/user.events.html';

        $scope.getInclude = function(){
            return $scope.path;
        }

        $scope.changeView = function(path) {
            $scope.path = path;
        }

        $scope.isActive = function (viewLocation) { 

            return viewLocation === $scope.path;

                
        };

        $scope.logout = function(){
            $rootScope.user = null;
            $location.url("/");
        }


  

}).
controller('PostController', function($scope, $rootScope, $http, $interval) {


    $scope.selectTag = function (index){
        $scope.tags[index].chosen = !$scope.tags[index].chosen;
    }


    $scope.tags = [
                        {
                            text: "Night Life",
                            chosen: false
                        },
                        {
                            text: "Music",
                            chosen: false
                        },
                        {
                            text: "21+",
                            chosen: false
                        },
                        {
                            text: "Sports",
                            chosen: false
                        },
                        {
                            text: "Family",
                            chosen: false
                        },
                        {
                            text: "Dancing",
                            chosen: false
                        },
                        {
                            text: "Educational",
                            chosen: false
                        },
                        {
                            text: "Free",
                            chosen: false
                        },
                        {
                            text: "Entrance Fee",
                            chosen: false
                        },
                        {
                            text: "Food",
                            chosen: false
                        },
                        {
                            text: "Art",
                            chosen: false
                        },
                        {
                            text: "Theater",
                            chosen: false
                        },
                        {
                            text: "Date Night",
                            chosen: false
                        },
                        {
                            text: "Garage Sale",
                            chosen: false
                        },
                        {
                            text: "Sale",
                            chosen: false
                        },
                        {
                            text: "Out Doors",
                            chosen: false
                        },
                        {
                            text: "Inside",
                            chosen: false
                        },
                        {
                            text: "Craft Show",
                            chosen: false
                        },
                        {
                            text: "Trade Show",
                            chosen: false
                        },
                        {
                            text: "Speaker",
                            chosen: false
                        },
                        {
                            text: "Parade",
                            chosen: false
                        },
                        {
                            text: "Community Event",
                            chosen: false
                        },
                        {
                            text: "For Adults",
                            chosen: false
                        },
                        {
                            text: "For Teens",
                            chosen: false
                        },
                        {
                            text: "For Children",
                            chosen: false
                        },
                        {
                            text: "Religion",
                            chosen: false
                        },
                        {
                            text: "Politics",
                            chosen: false
                        },
                        {
                            text: "Charity",
                            chosen: false
                        },
                        {
                            text: "Fundraiser",
                            chosen: false
                        },
                        {
                            text: "EventCircle",
                            chosen: false
                        },

                  ];

    $scope.getTags = function(){
        var toReturn = [];
            $scope.tags.forEach(function(index){
                if(index.chosen) {
                    toReturn.push(index.text);
                }
            })
            return toReturn;
        };
            
    


    $scope.eventObject = function(){
        this.eventName      = "";
        this.eventDate      = "";
        this.eventStart     = "";
        this.eventEnd       = "";
        this.locationName   = "";
        this.address        = "";
        this.cost           = "";
        this.url            = "";
        this.phone          = "";
        this.descript       = "";
        this.tags           = "";
        this.user_id        = $rootScope.user.data._id;
    }

    $scope.newEvent = new $scope.eventObject();

    $scope.submitEvent = function(){
        console.log($scope.newEvent);

        $scope.newEvent.tags = $scope.getTags();

   $http.post('http://localhost:8080/api/events', $scope.newEvent)
            .success(function(data) {

                console.log(data);
                //$scope.newEvent = {}; // clear the form so our user is ready to enter another

            })

            .error(function(data) {
                console.log('Error: ' + data);
            });


    }

  

});
