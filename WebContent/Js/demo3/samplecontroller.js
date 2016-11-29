var app=angular.module("PersonApp",[])
app.controller("PersonController",function($scope)
		{
	       $scope.persons=[{id:1, name:'poo', email:'poo@abc.com'},
	                       {id:2, name:'poornima', email:'poornima@abc.com'},
	                       {id:3, name:'poohh', email:'poohh@xyz.com'}]
	       
	       $scope.square=function()
	       {
	    	   $scope.answer=$scope.number*$scope.number;
	       }
		})
