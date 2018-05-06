/*
JS file for Index.jtml file of main project of the automation courses.
*/

//alert ('JS file is connected with Index.html file');

var todoItems = [];
var intodoItems = function() {
		$.getJSON( "todos.json", function(data) {
			console.log(data);	
			todoItems = data.data;
		});
	};