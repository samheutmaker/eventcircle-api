// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {



    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){ 
     var deferred = $q.defer();  
     $http.get('/loggedin').success(function(user){

        
      if (user !== '0')
        deferred.resolve();


      else { 

        $rootScope.message = 'You need to log in.'; 
        console.log($rootScope.message);
        deferred.reject(); 
        $location.url('/'); } 

    });

        return deferred.promise;

         }; 

    $routeProvider

        // home view
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
        })

        // login view
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        })

        // register view
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController'
        })
         // all events view
        .when('/account', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController',
            resolve: {
                Loggedin : checkLoggedin
            }
        })


        // register view
        .when('/user/events', {
            templateUrl: 'views/profile.html',
            controller: 'MapController',
            resolve: {
                Loggedin : checkLoggedin
            }
        })
        .when('/user/post', {
            templateUrl: 'views/user.post.html',
            controller: 'PostController',
            resolve: {
                Loggedin : checkLoggedin
            }
        })
        .otherwise({redirectTo:'/'});

    $locationProvider.html5Mode(true);


}]);

