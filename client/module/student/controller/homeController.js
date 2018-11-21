var myApp = angular.module('homeCtrl',[])
.controller('homeCtrl', homeCtrl);

function homeCtrl($scope){
    $scope.homePage = 'this is my first page';
};

// myApp.directive('myDirective',function(){
//     return{
//         link:function($scope, element){
//             element.html('<br> This is custom directive');
//         }
//     }
// });

