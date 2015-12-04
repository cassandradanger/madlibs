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
$(document).ready(function(){
    $('.adjective').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.adjectives.length-1) + 1);
            var adjective = data.adjectives[i].adjective;
            console.log(adjective);
            console.log(workPlease);

            workPlease.append(adjective).hide().fadeIn("slow");
        });
    });
    $('.noun').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.nouns.length-1) + 1);
            var noun = data.nouns[i].noun;

            workPlease.append(noun).hide().fadeIn("slow");
        });
    });
    $('.plural_noun').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.plural_nouns.length-1) + 1);
            var plural_noun = data.plural_nouns[i].plural_noun;

            workPlease.append(plural_noun).hide().fadeIn("slow");
        });
    });
    $('.verb_ending_in_ing').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.verbs_ending_in_ing.length-1) + 1);
            var verb_ending_in_ing = data.verbs_ending_in_ing[i].verb_ending_in_ing;

            workPlease.append(verb_ending_in_ing).hide().fadeIn("slow");
        });
    });
    $('.game').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.games.length-1) + 1);
            var game = data.games[i].game;

            workPlease.append(game).hide().fadeIn("slow");
        });
    });
    $('.place').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.places.length-1) + 1);
            var place = data.places[i].place;

            workPlease.append(place).hide().fadeIn("slow");
        });
    });
    $('.part_of_the_body').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.parts_of_the_body.length-1) + 1);
            var part_of_the_body = data.parts_of_the_body[i].part_of_the_body;

            workPlease.append(part_of_the_body).hide().fadeIn("slow");
        });
    });
    $('.plant').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.plants.length-1) + 1);
            var plant = data.plants[i].plant;

            workPlease.append(plant).hide().fadeIn("slow");
        });
    });
    $('.number').on('click',function(){
        $(this).empty();
        var workPlease = $(this);
        console.log(workPlease);

        $.get('data.json', function(data) {
            var i = Math.floor((Math.random() * data.numbers.length-1) + 1);
            var number = data.numbers[i].number;

            workPlease.append(number).hide().fadeIn("slow");
        });
    });



});