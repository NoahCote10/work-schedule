$(document).ready(function () {

  // Global variables
  const currentDay = $('#currentDay');
  const saveBtn = $('.saveBtn')

// Designites each hour block in military time so
// function can color the block accordingly
  const hourlySchedule = [
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
  ]


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //





  // Displays day/time
  function displayTime() {
    const rightNow = dayjs().format('dddd, MMMM DD, YYYY [at] h:mm:ss A');
    currentDay.text(rightNow);
  }

  // checks the status of each time block and changes its color accordingly
  function statusCheck() {
    for (let i = 0; i < hourlySchedule.length; i++) {
      const currentTime = dayjs().format('HH');
      const timeBlock = hourlySchedule[i]
      const classTag = $('.task-' + i);

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
  // Saves the tasks to local storage
  saveBtn.on('click', function (event) {
    event.preventDefault();

    const taskHour = $(this).data("time");
    const taskText = $("#" + taskHour).val();

    localStorage.setItem(taskHour, taskText);

  });

  //Renders any saved tasks to page on load/refresh
  function renderSavedTasks() {
    for (let i = 9; i <= 17 ; i++) {
      const task = localStorage.getItem(i);

      if (task) {
        $(`#${i}`).val(task);
      }
      
    }
  }

  // Updates the day/time every second
  displayTime();
  setInterval(displayTime, 1000);
  renderSavedTasks();
  statusCheck();
});