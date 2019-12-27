var currentTime= moment();
var date= moment().format("dddd, MMMM Do YYYY");
var cHour= moment().hour();


$(document).ready(function(){

    
    //writing today's date at top of page
    var date= moment().format("dddd, MMMM Do YYYY");
    var currentTime = moment().format("h:mm a");

    function writeDate(){
    $("#date").text(date);
    $("#currentTime").text("Current time: "+currentTime);
    }

    writeDate();
    renderDailyQuote();

    //reading local storage for saved items.
    var scheduleToday = JSON.parse(localStorage.getItem('tasks')) || {};

    $(".saveBtn-js").on("click", function() {
        var key = $(this).data('key');
        var value = $(`#${key}`).val();
    
        // save to local storage
        scheduleToday[key] = value;
        localStorage.setItem(key, value);
        alert("your event is saved");
        localStorage.setItem('tasks', JSON.stringify(scheduleToday));
    });

    
    // pull from local storage 

    $('#hour-7').val(scheduleToday['hour-7']);
    $('#hour-8').val(scheduleToday['hour-8']);
    $('#hour-9').val(scheduleToday['hour-9']);
    $('#hour-10').val(scheduleToday['hour-10']);
    $('#hour-11').val(scheduleToday['hour-11']);
    $('#hour-12').val(scheduleToday['hour-12']);
    $('#hour-13').val(scheduleToday['hour-13']);
    $('#hour-14').val(scheduleToday['hour-14']);
    $('#hour-15').val(scheduleToday['hour-15']);
    $('#hour-16').val(scheduleToday['hour-16']);
    $('#hour-17').val(scheduleToday['hour-17']);
    $('#hour-18').val(scheduleToday['hour-18']);
    $('#hour-19').val(scheduleToday['hour-19']);
    $('#hour-20').val(scheduleToday['hour-20']);
    $('#hour-21').val(scheduleToday['hour-21']);
});

    
function colorCode(){
    var timeArray= $(".timeCol");

    for (var i=0; i<15; i++){
        var timeElement= timeArray[i];
        var timeData= $(timeElement).data("time");
;
       if(timeData<cHour){
           $(timeElement).parent().addClass("inPast");
       }
    };    
};   

colorCode();

//THIS FEATURE IS CURRENTLY DISABLED:
// render Daily Quotes 
function renderDailyQuote(){
//     var quoteKey= "319158dd4fmshdc437b2d385456ap1803d4jsn519dcbba1486";
//     var myQuery= "https://theysaidso.p.rapidapi.com/authors.json"+
// $.ajax({
//     url: myQuery,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);
// } 


var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://theysaidso.p.rapidapi.com/qod",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "theysaidso.p.rapidapi.com",
		"x-rapidapi-key": "319158dd4fmshdc437b2d385456ap1803d4jsn519dcbba1486"
	}
}

$.ajax(settings).done(function (response) {
    var QOD= response.contents.quotes[0].quote;
    $("#QOD").text(QOD);
});

};
