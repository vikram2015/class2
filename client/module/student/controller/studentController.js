
angular.module('studentCtrl',['studentService'])
    .controller('studentCtrl', studentCtrl);

    function studentCtrl($scope,studentService,$state){
        $scope.name='vikram';
        $scope.addStudent = function(){
            studentService.saveStudent($scope.formData).then(function(data){
                if(data.data.success){
                    $state.go('/');
                }else{
                    alert(data.data.Msg);
                }
            })
        }
    }