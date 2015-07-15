var cars = [
	{"make" : "Volkswagen", "model" : "Golf", "year" : 2010, "type" : "Hatchback", "doors" : 3, "miles" : 70000, "colour" : "Black", "price" : 4995.00, "date-added" : "2015-07-15"},
	{"make" : "Ford", "model" : "Mondeo", "year" : 2010, "type" : "Hatchback", "doors" : 3, "miles" : 70000, "colour" : "Black", "price" : 4995.00, "date-added" : "2015-07-15"}
];

function displayCars(arr) {

	var out = "";
	var i;
	for(i=0 ; i<arr.length ; i++) {
		out += "<p>" + arr[i].make + " " + arr[i].model + "</p>";
	}
	document.getElementById("cars").innerHTML = out;
}

displayCars(cars);
