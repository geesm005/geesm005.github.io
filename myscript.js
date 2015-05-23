/**
 * 
 */
//origin textbox
var originTextBox = document.createElement("INPUT");
originTextBox.setAttribute("type", "text");
document.body.appendChild(originTextBox);

// destination textbox
var destTextBox = document.createElement("INPUT");
destTextBox.setAttribute("type", "text");
document.body.appendChild(destTextBox);

// submit button
var button = document.createElement("BUTTON") ;
var buttontext = document.createTextNode("Submit");
button.appendChild(buttontext);
document.body.appendChild(button);


// submit button handler
button.onclick=function(){ 
	var org = originTextBox.value;
	var dest = destTextBox.value;
	origin = org;
	destination = dest;
	service = new google.maps.DistanceMatrixService();

	
	service.getDistanceMatrix(
			{
			    origins: [origin],
			    destinations: [destination],
			    travelMode: google.maps.TravelMode.DRIVING,
			    avoidHighways: false,
			    avoidTolls: false
			}, 
			callback
			);
	
	
}


var origin = "";
destination = "";




function callback(response, status) {

if(status=="OK") {
	var distance = response.rows[0].elements[0].distance.value;
    distance = distance * .00062137;
	window.alert(distance);
} else {
    alert("Error: " + status);
}

}

