app.controller('PersonController',function($scope)
		{
	alert('Person controller')
	$scope.persons=[{id:1, name:'poornima', dob:'22/8/1946'},
	                {id:2, name:'neha',  dob:'29/12/1947'},
	                {id:3, name:'neeta', dob:'1/11/1990'}]
	
	$scope.message="click on the links to view the persons in different sorted order"
		})