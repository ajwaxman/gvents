// Event Class
function Event() {
  this.repo = ''
  this.type = ''
}

Event.prototype.parseJSON = function(json) {
  this.repo = json.repo.name
  this.type = json.type
}

// Create Speific Events
function PushEvent() {
  Event.call(this); // Initialize varaibles from parent class.
  this.commits = 0; // Event specific fields.
}

PushEvent.prototype = Object.create(Event.prototype);
PushEvent.prototype.constructor = PushEvent;

PushEvent.prototype.parseJSON = function(json){
  Event.prototype.parseJSON.call(this,json);
  this.commits = json.payload.size;
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
  push_event.parseJSON(response[1]);
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
