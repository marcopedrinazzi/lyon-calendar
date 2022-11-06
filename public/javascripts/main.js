document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    themeSystem: 'bootstrap5',
    initialView: 'dayGridMonth',
    initialDate: '2022-11-06',
    headerToolbar: {
      left: 'prev,next today addEventButton',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    customButtons: {
        addEventButton: {
          text: 'add event...',
          click: function() {
            var dateStr = prompt('Enter a date in YYYY-MM-DD format');
            var date = new Date(dateStr + 'T00:00:00'); // will be in local time
            var ttl = prompt('Enter a title');
  
            if (!isNaN(date.valueOf())) { // valid?
              calendar.addEvent({
                title: ttl,
                start: date,
                allDay: true
              });
              alert('Great. Now, update your database...');
            } else {
              alert('Invalid date.');
            }
          }
        }
      },
    events: [
      {
        title: 'All Day Event',
        start: '2022-11-07'
      },
      {
        title: 'Conference',
        start: '2022-08-11',
        end: '2022-08-13'
      },
      {
        title: 'Meeting',
        start: '2022-11-12T10:30:00',
        end: '2022-11-12T12:30:00'
      }
    ]
  });

  calendar.render();
})