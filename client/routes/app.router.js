var myApp = angular.module('routerApp',['ui.router']);
myApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/');

    $stateProvider
                .state('/',{
                    url:'/',
                    templateUrl: 'views/student/home.html',
                    controller:'homeCtrl'
                })
                .state('student',{
                    url:'/student',
                    templateUrl:'views/student/student.html',
                    controller:'studentCtrl'
                })
})