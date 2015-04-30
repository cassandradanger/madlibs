//Ajax
//REST - standardization of communication with server

//Get - pulls info from server
//Post - sends info to server
//Put - modifies existing file in server
//Delete - deletes file from server

//Connection between client and server

//Ajax - asynchronous javascript and xml

//Request -
//Response -

//

var cityData = null;
var cityHtml = null;

$(document).ready(function(){
    console.log(cityData, cityHtml);
    $('#get-info-btn').on('click',function(){
        if(cityHtml === null){
            $.get('location.html', function(data) {
                cityHtml = data;
                console.log("It worked");
                $("#more-stuff").append(data);
            });
        } else {
            console.log("You already got the HTML");
        }


        $.get('data.json', function(data){
            console.log("second request");
            var firstCity = data.locations[0].location;

        });
    });
});