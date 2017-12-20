$(document).ready(function() {
    //DONE
    //Use the $.getJSON method to download the contents of the data.json file.
    //Iterate through the top spots and create a table row for each spot.
    //Create a link to the location using the longitude and latitude provided.
    //(Example https://www.google.com/maps?q=33.09745,-116.99572)

    var jqxhr = $.getJSON("./data.json", function(data) {
        var i = 0, linkStr;
        $.each(data, function(key, val){
            i++;
            linkStr = 'https://www.google.com/maps?q=' + this.location[0] + ',' + this.location[1]
            $('#top-spots-table').append('<tr id="row' + i + '" ></tr>');
            $('#row' + i).append('<td>' + i + '</td>');
            $('#row' + i).append('<td>' + this.name + '</td>');
            $('#row' + i).append('<td>' + this.description + '</td>');
            $('#row' + i).append('<a href=' + linkStr + '>MAP</a>');
        })
    });


    //BONUS
    //Display a map, and using the google api, place a pin in the location of each top spot
    //When a users hoovers over the pin display a tool tip with the description
    //Using the current location, get directions for the user to get to the location
    //Display the distance to each location from users current location on the row in the table
    //Sort the top spots based on distance from users current location
});
