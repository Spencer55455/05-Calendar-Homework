$(document).ready(function() { 
    // $ = get element by ID 
    // document.ready funtions ensures that the browser DOM is fully loaded before the next function is run, by warpping the next funciton in the document.ready.
    
    $(".saveBtn").on("click", function() { // document.getElementByID .save button, when any save button is clicked, run this function
      // get nearby values
      var value = $(this).siblings(".description").val(); // value = this (as in save button? or document?) sibling (so porbably save button), the siblings of which are the hour and save button I think
      var time = $(this).parent().attr("id"); // not sure what this is
  
      localStorage.setItem(time, value); // .setItem saves the time and value in localStorage one the webpage basically

    });
  
    function hourUpdater() {
      
      var currentHour = moment().hours();  // get current number of hours using the moment thing
  
      // loop over time blocks
      // parseint converts numbers that are written as strings, into numbers (or integers)… this can be used if you want to add “1” + 2 or something… so if there is a thing like 
      $(".time-block").each(function() { //for each 
        var blockHour = parseInt($(this).attr("id").split("-")[1]); 
  
        // check if we've moved past this time
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // set up interval to check if current time needs to be updated
    var interval = setInterval(hourUpdater, 15000);
  
    // load any saved data from localStorage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // display current day on page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  