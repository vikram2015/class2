var myApp = angular.module('studentService', []);
myApp.factory('studentService', function($http, $q){

    var studentFactory = {};

    studentFactory.saveStudent = function(parameter){

        return $http.post('/saveStudent',parameter).then(function(data){
            return data;
        })
    }

    return studentFactory;
});