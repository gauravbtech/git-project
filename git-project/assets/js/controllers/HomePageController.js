'use strict';
var app = angular.module('app', []); 
app.controller('myCtrl', function($scope,$http) {
  $scope.logindetails={};
  $scope.logindetails.usertype="shipper"

  $scope.funSubmit=function(){
    $http.defaults.headers.common['Accept'] = 'application/json';
    if ($scope.formValidation()) {
      $http.post('/savesignupdetails',$scope.logindetails). 
      success(function(data, status, headers, config) { 
        console.log("AffectedRows : "+data.affectedRows);
        if(data.affectedRows=="1"){
              //$('form').animate({height: "toggle", opacity: "toggle"}, "slow");
        }
      }).error(function(data, status, headers, config) {});
    }
    
  },
  $scope.funLogin=function(){        
    $http.defaults.headers.common['Accept'] = 'application/json';
    $http.post('/login',$scope.logindetails). 
      success(function(data, status, headers, config) {
      }).error(function(data, status, headers, config) {});
  },
  $scope.formValidation=function(){
    var trueFalse=false;
    console.log("user Type :"+$scope.logindetails.user_name.length);
    if ($scope.logindetails.user_name.length==0||$scope.logindetails.user_name==undefined ||$scope.logindetails.company_name.length==0||$scope.logindetails.company_name==undefined||$scope.logindetails.user_phone.length==0||$scope.logindetails.user_phone==undefined||$scope.logindetails.user_email.length==0||$scope.logindetails.user_email==undefined||$scope.logindetails.user_password.length==0||$scope.logindetails.user_password==undefined) {
      trueFalse=false
    }
    else{
      trueFalse=true;
    }
    return trueFalse;

  }
  });