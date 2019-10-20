var currentTime= moment();
console.log(currentTime);
var date= moment().format("dddd, MMMM Do YYYY");
var cHour= moment().hour();
console.log(cHour);

$(document).ready(function(){

    
    //writing today's date at top of page
    var date= moment().format("dddd, MMMM Do YYYY");
    function writeDate(){
    $("#date").text(date);
    }
    writeDate();

    var currentTime = moment().format("h:mm a");

    // checking time is correct
    console.log("The current time per moment() is: "+currentTime);


    //reading local storage for saved items.
    var scheduleToday = JSON.parse(localStorage.getItem('tasks')) || {};

    $(".saveBtn-js").on("click", function() {
        console.log("saved");

        /* get the key and the value */
        var key = $(this).data('key');
        console.log(key);
        var value = $(`#${key}`).val();
        

        // save to local storage
        scheduleToday[key] = value;
        localStorage.setItem(key, value);
        alert("event saved");
        localStorage.setItem('tasks', JSON.stringify(scheduleToday));
    });

    
    // pull from local storage 
    $('#hour-9').val(scheduleToday['hour-9']);
    $('#hour-10').val(scheduleToday['hour-10']);
    $('#hour-11').val(scheduleToday['hour-11']);
    $('#hour-12').val(scheduleToday['hour-12']);
    $('#hour-13').val(scheduleToday['hour-13']);
    $('#hour-14').val(scheduleToday['hour-14']);
    $('#hour-15').val(scheduleToday['hour-15']);
    $('#hour-16').val(scheduleToday['hour-16']);
    $('#hour-17').val(scheduleToday['hour-17']);

});

    
function colorCode(){
    var timeArray= $(".timeCol");

    for (var i=0; i<9; i++){
        var timeElement= timeArray[i];
        var timeData= $(timeElement).data("time");
;
        console.log(timeData);
       if(timeData<cHour){
           console.log(timeData+" is past");
           var parentele=$(timeElement).parent()
           console.log(parentele);
           $(parentele).addClass("inPast");
       }
    };
    
};   
colorCode();



//stripe the key from the date-key (hour-9) in order to use moment().hour() to use greater than or less than