angular.module('homeCtrl',[])
.controller('homeCtrl', homeCtrl);

function homeCtrl($scope){
    $scope.homePage = 'this is my first page';
}