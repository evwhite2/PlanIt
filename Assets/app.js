var currentTime= moment();
console.log(currentTime);
var date= moment().format("dddd, MMMM Do YYYY");
var timeObj=[{
    hour: [""]
}];
 var hoursArray=["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"];



$(document).ready(function(){

    //writing today's date at top of page
    var date= moment().format("dddd, MMMM Do YYYY");
    function writeDate(){
    $("#date").text(date);
    }
    writeDate();

    var hour = moment().format("h:mm a");
    console.log(hour);

    //generating today's calendar
   
    //loop to diplay all hours between 6am & 9pm
    function renderSchedule(){
       
        for (var i=0; i<hoursArray.length; i++){
                
            var hourData= hoursArray[i];
            
            //preparing new entry
            var displayRow= $("<tr>");
            displayRow.addClass("displayRow");
            $("tbody").append(displayRow);

            //creating new row
            var newRow= $("<th>");
            newRow.attr("scope","col");
            displayRow.append(newRow);
        
            //filling row with column data

            //time of day
            var timeSlot= $("<td>");
            timeSlot.addClass("timeTab");
            timeSlot.text(hourData);
            displayRow.append(timeSlot);

            //user input date
            var eventEntry= $("<td>");
            eventEntry.addClass("eventTab");
            var userEntry= $("<textarea>");
            userEntry.addClass("userEntryBox");
            eventEntry.append(userEntry);
            displayRow.append(eventEntry);

            //user input note
            var noteEntry= $("<td>");
            noteEntry.addClass("noteTab");
            var userNote= $("<textarea>");
            userNote.addClass("userNoteBox");
            noteEntry.append(userNote);
            displayRow.append(noteEntry);

            //save button
            var saveBtnCol= $("<td>");
            var saveBtn= $("<button>");
            saveBtn.addClass("btn btn-dark");
            saveBtn.attr("type", "button");
            var saveImg= $("img");
                //styling save btn image
                saveImg.attr("src", "Assets/graphics/Save-Button-PNG-Transparent-Photo.png"); //!!! MY IMAGE DOESN'T WORK! 
                saveImg.attr("height", "15px");
                saveImg.attr("width", "15px");
            //putting save btn elements together and appending to row
            saveBtn.append(saveImg);
            saveBtnCol.append(saveBtn);
            displayRow.append(saveBtnCol);

        }
        
    };

    renderSchedule();
    
    //render saved information
    
        
    //click event field to add new input
    //click note field to add new notes
    //click save button to save to local storage
    //update color of field once time of day has passed

    
})

