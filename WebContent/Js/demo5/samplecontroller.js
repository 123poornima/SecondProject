var app=angular.module('myApp',[])
app.controller('sampleController',function()
		{
	     var samctrl=this;
	     samctrl.message="Hello World";
	     samctrl.person={id:1,name:'pp'}
	     samctrl.persons=[{id:2,name:'aa'},
	                      {id:3,name:'bb'},
	                      {id:4,name:'cc'}]
	     
	     samctrl.square=function()
	     {
	    	 samctrl.answer=samctrl.number*samctrl.number
	     }
		})