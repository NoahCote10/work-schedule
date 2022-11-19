// Global vairables
const currentDay = $('#currentDay');


const hourlySchedule = [
  {
    time: '09',
    task: ''
  },
  {
    time: '10',
    task: ''
  },
  {
    time: '11',
    task: ''
  },
  {
    time: '12',
    task: ''
  },
  {
    time: '13',
    task: ''
  },
  {
    time: '14',
    task: ''
  },
  {
    time: '15',
    task: ''
  },
  {
    time: '16',
    task: ''
  },
  {
    time: '17',
    task: ''
  },

]
// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});



// Displays day/time
function displayTime() {
  const rightNow = dayjs().format('dddd, MMMM DD, YYYY [at] h:mm:ss A');
  currentDay.text(rightNow);
}

// checks the status of each time block and changes it accordingly
// UNDER CONSTRUCTION function identifies the correct tense of tasks,
// but does not add class modififcaitons to change color
function statusCheck() {
  for (let i = 0; i < hourlySchedule.length; i++) {
    const currentTime = dayjs().format('HH');
    const timeBlock = hourlySchedule[i].time
    const classTag = $('#task-'+i);

    if (timeBlock < currentTime) {
      classTag.addClass('past');
      classTag.removeClass('present');
      classTag.removeClass('future');
      console.log('past')
    } else if (timeBlock > currentTime) {
      classTag.removeClass('past');
      classTag.removeClass('present');
      classTag.addClass('future');
      console.log('future')
    } else {
      classTag.removeClass('past');
      classTag.addClass('present');
      classTag.removeClass('future');
      console.log('present')
    }

  }
}


// Updates the day/time every second
displayTime();
setInterval(displayTime, 1000);

statusCheck();