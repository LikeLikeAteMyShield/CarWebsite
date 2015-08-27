var cars = [
	{"make" : "Volkswagen", "model" : "Golf", "year" : 2013, "type" : "Hatchback", "doors" : 3, "miles" : 19500, "colour" : "Black", "price" : 14500.00, "dateAdded" : "2015-07-15", "imgUrl" : "../images/vwGolf.JPG"},
	{"make" : "Ford", "model" : "Mondeo", "year" : 2002, "type" : "Saloon", "doors" : 5, "miles" : 70000, "colour" : "Blue", "price" : 4995.00, "dateAdded" : "2015-07-10", "imgUrl" : "../images/Ford_Mondeo.jpg"},
	{"make" : "Mercedes-Benz", "model" : "M-Class", "year" : 2006, "type" : "SUV", "doors" : 5, "miles" : 98000, "colour" : "Grey", "price" : 9500.00, "dateAdded" : "2015-07-12", "imgUrl" : "../images/Mercedes-Benz_M.jpg"},
	{"make" : "Audi", "model" : "A6 TDI Quattro", "year" : 2007, "type" : "Estate", "doors" : 5, "miles" : 106000, "colour" : "Black", "price" : 9500.00, "dateAdded" : "2015-03-11", "imgUrl" : "../images/Audi_A6_quattro.jpg"},
	{"make" : "Mercedes-Benz", "model" : "C-Class", "year" : 2007, "type" : "Saloon", "doors" : 5, "miles" : 50000, "colour" : "Silver", "price" : 7995.00, "dateAdded" : "2015-02-10", "imgUrl" : "../images/Mercedes_C.jpg"},
	{"make" : "Volkswagen", "model" : "Passat", "year" : 2009, "type" : "Saloon", "doors" : 5, "miles" : 85000, "colour" : "Black", "price" : 6795.00, "dateAdded" : "2014-12-17", "imgUrl" : "../images/passat.jpg"},
	{"make" : "Skoda", "model" : "Octavia", "year" : 2009, "type" : "Estate", "doors" : 5, "miles" : 50000, "colour" : "Grey", "price" : 6495.00, "dateAdded" : "2015-07-10", "imgUrl" : "../images/skoda_octavia.jpg"},
	{"make" : "Mercedes-Benz", "model" : "E-Class", "year" : 2007, "type" : "Saloon", "doors" : 5, "miles" : 120000, "colour" : "White", "price" : 6495.00, "dateAdded" : "2015-07-12", "imgUrl" : "../images/Mercedes-Benz_E.jpg"},
	{"make" : "Seat", "model" : "Leon", "year" : 2006, "type" : "Hatchback", "doors" : 3, "miles" : 82000, "colour" : "Black", "price" : 6450.00, "dateAdded" : "2015-07-14", "imgUrl" : "../images/Seat_Leon.jpg"},
	{"make" : "BMW", "model" : "5 Series 520d", "year" : 2007, "type" : "Saloon", "doors" : 5, "miles" : 110000, "colour" : "Silver", "price" : 6450.00, "dateAdded" : "2015-07-10", "imgUrl" : "../images/BMW_5_series.jpg"},
	{"make" : "Nissan", "model" : "Qashqai", "year" : 2008, "type" : "SUV", "doors" : 5, "miles" : 93000, "colour" : "White", "price" : 4750.00, "dateAdded" : "2015-04-11", "imgUrl" : "../images/nissan_qashqai.jpg"},
	{"make" : "Volkswagen", "model" : "Golf GTI", "year" : 2007, "type" : "Hatchback", "doors" : 3, "miles" : 75000, "colour" : "Blue", "price" : 4495.00, "dateAdded" : "2015-01-10", "imgUrl" : "../images/Volkswagen_Golf_GTI_-_2007.jpg"},
	{"make" : "Peugeot", "model" : "207 Verve", "year" : 2010, "type" : "Hatchback", "doors" : 3, "miles" : 55000, "colour" : "Red", "price" : 4250.00, "dateAdded" : "2015-05-02", "imgUrl" : "../images/Peugeot_207.jpg"},
	{"make" : "Suzuki", "model" : "Swift", "year" : 2009, "type" : "Hatchback", "doors" : 3, "miles" : 111000, "colour" : "Red", "price" : 2995.00, "dateAdded" : "2014-09-10", "imgUrl" : "../images/Suzuki_Swift.jpg"},
	{"make" : "Hyundai", "model" : "i10", "year" : 2010, "type" : "Hatchback", "doors" : 5, "miles" : 83000, "colour" : "Blue", "price" : 2995.00, "dateAdded" : "2015-03-01", "imgUrl" : "../images/Hyundai_i10.jpg"},
	{"make" : "Peugeot", "model" : "307cc", "year" : 2007, "type" : "Hatchback", "doors" : 3, "miles" : 106000, "colour" : "Black", "price" : 2450.00, "dateAdded" : "2015-06-28", "imgUrl" : "../images/Peugeot_307cc.jpg"},
	{"make" : "BMW", "model" : "3 Series", "year" : 2002, "type" : "Saloon", "doors" : 5, "miles" : 90000, "colour" : "Silver", "price" : 2250.00, "dateAdded" : "2014-11-10", "imgUrl" : "../images/bmw_3.jpg"},
	{"make" : "Land Rover", "model" : "Freelander 3dr", "year" : 2003, "type" : "SUV", "doors" : 3, "miles" : 98000, "colour" : "Blue", "price" : 1995.00, "dateAdded" : "2015-01-16", "imgUrl" : "../images/land_rover.jpg"},
	{"make" : "Fiat", "model" : "Multipla", "year" : 2001, "type" : "MPV", "doors" : 5, "miles" : 87000, "colour" : "Silver", "price" : 1250.00, "dateAdded" : "2014-03-05", "imgUrl" : "../images/fiat_multipla.jpg"},
	{"make" : "Daewoo", "model" : "Lanos", "year" : 2001, "type" : "Hatchback", "doors" : 3, "miles" : 60000, "colour" : "Silver", "price" : 995.00, "dateAdded" : "2014-02-15", "imgUrl" : "../images/lanos.jpg"}
];

$(document).ready(function() {

function showCar(arr, index) {
	return 	"<div>" +
				"<div class=\"car\">" +
					"<img src=\"" + arr[index].imgUrl + "\" height=\"200\" width=\"300\" alt=\"...\">" +
					"<div class=\"caption\">" +
						"<h3>" + arr[index].make + " " + arr[index].model + "</h3>" +
						"<h3 class=\"price\">&pound;" + arr[index].price + "</h3>" +
						"<p>" +
							"<a href=\"#\" class=\"btn btn-primary\" role=\"button\">More Detail</a>" +
							"<a href=\"mailto:email@email.com\" class=\"btn btn-default\" role=\"button\">Enquire</a>" +
							"<div class=\"extra-content\">" +
								"<table class=\"table\">" +
									"<tbody>" +
										"<tr>" +
											"<th>Year</th><td>" + arr[index].year + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Type</th><td>" + arr[index].type + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Doors</th><td>" + arr[index].doors + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Miles</th><td>" + arr[index].miles + "</td>" +
										"</tr>" +
									"</tbody>" +
								"</table>" +
							"</div>" +
						"</p>" +
					"</div>" +
				"</div>" +
			"</div>";
}

function showResult(arr, index) {
	return 	"<div class=\"row\">" +
				"<div class=\"car\">" +
					"<div class=\"col-md-6\">" +
					"<img class=\"result-image\" src=\"" + arr[index].imgUrl + "\" height=\"200\" width=\"300\" alt=\"...\">" +
					"</div>" +
					"<div class=\"col-md-6\">" +
						"<h3>" + arr[index].make + " " + arr[index].model + "</h3>" +
						"<h3 class=\"price\">&pound;" + arr[index].price + "</h3>" +
						"<p>" +
							"<div class=\"extra-content\">" +
								"<table class=\"table\">" +
									"<tbody>" +
										"<tr>" +
											"<th>Year</th><td>" + arr[index].year + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Type</th><td>" + arr[index].type + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Doors</th><td>" + arr[index].doors + "</td>" +
										"</tr>" +
										"<tr>" +
											"<th>Miles</th><td>" + arr[index].miles + "</td>" +
										"</tr>" +
									"</tbody>" +
								"</table>" +
							"</div>" +
						"</p>" +
					"</div>" +
				"</div>" +
			"</div>";
}

function displayRecent(arr) {

	arr.sort(function(a,b) {
		return a.dateAdded - b.dateAdded;
	});

	var out = "";

	for(var i = 0; i < 5; i++) {
		out += showCar(arr, i);
	}
	if(document.getElementById("recent")!=null){
		document.getElementById("recent").innerHTML = out;
		$(".extra-content").slideUp();
	}
}

function displayCheapest(arr){

	arr.sort(function(a,b) {
		return a.price - b.price;
	});

	var out = "";

	for(var i = 0; i < 5; i++) {
		out += showCar(arr, i);
	}
	if(document.getElementById("cheapest")!=null){
		document.getElementById("cheapest").innerHTML = out;
		$(".extra-content").slideUp();
	}
}

function displaySearchResults(arr) {

	var out = "";

	for(var i=0; i<arr.length; i++) {
		out += showResult(arr, i);
	}
	if(document.getElementById("results")!=null){
		document.getElementById("results").innerHTML = out;
	}
}

displayRecent(cars);
displayCheapest(cars);
displaySearchResults(cars);

$(".btn-primary").click(function() {
	event.preventDefault();
	$(this).closest(".caption").find(".extra-content").slideToggle();

	if( $(this).text()=="More Detail" ) {
		$(this).text("Less Detail");
	} 
	else{
		$(this).text("More Detail");
	}
});

$(".make-filter").click(function() {

	event.preventDefault();
	if($(this).text() == "All")
		displaySearchResults(cars);
	else{
		var arr = [];
		for(var i=0; i<cars.length; i++){
			if(cars[i].make == $(this).text())
				arr.push(cars[i]);
		}
		displaySearchResults(arr);
	}
});

$("#old-to-new").click(function() {

	event.preventDefault();
	var arr = cars;
	arr.sort(function(a,b) {
		return a.year - b.year;
	});

	displaySearchResults(arr);
});

$("#new-to-old").click(function() {

	event.preventDefault();
	var arr = cars;
	arr.sort(function(a,b) {
		return b.year - a.year;
	});

	displaySearchResults(arr);
});

$(".type-filter").click(function() {

	event.preventDefault();
	if($(this).text() == "All")
		displaySearchResults(cars);
	else{
		var arr = [];
		for(var i=0; i<cars.length; i++){
			if(cars[i].type == $(this).text())
				arr.push(cars[i]);
		}
		displaySearchResults(arr);
	}
});

$("#low-to-high").click(function() {

	event.preventDefault();
	var arr = cars;
	arr.sort(function(a,b) {
		return a.price - b.price;
	});

	displaySearchResults(arr);
});

$("#high-to-low").click(function() {

	event.preventDefault();
	var arr = cars;
	arr.sort(function(a,b) {
		return b.price - a.price;
	});

	displaySearchResults(arr);
});

});
