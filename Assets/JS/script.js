var now = moment();

$("#currentDay").text(now.format('LLLL'));

$(document).ready( function() {
    colorChange ();
    renderText();
});

function colorChange () {
    
    var currentHour = moment().hours();
    console.log("Current Time" + currentHour);

    $(".input").each(function () {
        var schedHour = parseInt($(this).attr("id"));
        console.log(schedHour);

        if (currentHour > schedHour) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentHour < schedHour) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}

var planInput;
var planHour;

$(".saveBtn").click(function() {
    planInput = $(this).siblings(".input").val();
    console.log(planInput);
    planHour = $(this).siblings(".time-block").text();
    console.log(planHour);
    localStorage.setItem(planHour, JSON.stringify(planInput));
    preventDefault();
    colorChange ();
    renderText ();
    
});

$(".delBtn").click(function() {
    eventText = $(this).siblings(".input").val("");
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".time-block").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));
    preventDefault();
    colorChange ();
    renderText ();

});

    // Enter and Display Events
function renderText () {

    let calText9 = JSON.parse(localStorage.getItem("9:00"));
    $("#9").val("");
    $("#9").val(calText9);
    
    let calText10 = JSON.parse(localStorage.getItem("10:00"));
    $("#10").val("");
    $("#10").val(calText10);
    
    let calText11 = JSON.parse(localStorage.getItem("11:00"));
    $("#11").val("");
    $("#11").val(calText11);
    
    let calText12 = JSON.parse(localStorage.getItem("12:00"));
    $("#12").val("");
    $("#12").val(calText12);
    
    let calText13 = JSON.parse(localStorage.getItem("13:00"));
    $("#13").val("");
    $("#13").val(calText13);

    let calText14 = JSON.parse(localStorage.getItem("14:00"));
    $("#14").val("");
    $("#14").val(calText14);

    let calText15 = JSON.parse(localStorage.getItem("15:00"));
    $("#15").val("");
    $("#15").val(calText15);

    let calText16 = JSON.parse(localStorage.getItem("16:00"));
    $("#16").val("");
    $("#16").val(calText16);

    let calText17 = JSON.parse(localStorage.getItem("17:00"));
    $("#17").val("");
    $("#17").val(calText17);
};