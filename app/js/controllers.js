'use strict'; // most up to date version of js 

var spacecatApp = angular.module('spacecatApp', []); // setting the scope of our app to be stored in an array

spacecatApp.controller('CatListCtrl', function($scope, $http){
  $http.get('cats/cats.json').success(function(data){
    $scope.cats = data; 
  });
  $scope.orderProp = 'name'
}); 
 