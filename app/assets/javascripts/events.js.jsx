// Create Event class and prototype.
function Event() {
  this.repo = '';
  this.type = '';
}

Event.prototype = {
  parseJSON: function(json) {
    this.repo = json.repo.name;
    this.type = json.type;
  }
}

// Create PushEvent class, which inherits from Event class.
function PushEvent() {
  Event.call(this); // Call constructor from parent class.

  this.commits = 0; // Initialize child specific attributes.
}

// Create child prototype from parent prototype.
PushEvent.prototype = Object.create(Event.prototype);
// Child prototype's constructor should be it's own.
PushEvent.prototype.constructor = PushEvent;

// Define child prototype.
PushEvent.prototype = {
  parseJSON: function(json) {
    // Parse JSON attributes from parent class.
    Event.prototype.parseJSON.call(this,json);
    // Child specific JSON parsing.
    this.commits = json.payload.size;
  }
}

var get_json = function(callback) {
  $.ajax({
    url: 'https://api.github.com/users/CarlosPlusPlus/events',
    dataType: 'json',
    success: function(response) {
      callback(response);
    }
  });
}

var parse_json = function(response) {
  events = []
  push_event = new PushEvent();
  push_event.parseJSON(response[2]);
  events.push(push_event);
  console.log(events);
}

// var populateGithubEvents = function () {
//   var githubUsername = $("label[name='github-username']").attr('id');
//   var githubUrl      = 'https://api.github.com/users/' + githubUsername + '/events';

//   if (githubUsername) {
//     React.render(
//       <GithubEventListBox url={githubUrl} />,
//       document.getElementById('github-events')
//     );
//   }
// };

$(document).ready(function() {
  // populateGithubEvents();
  get_json(parse_json);
});
