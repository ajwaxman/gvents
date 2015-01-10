/** @jsx React.DOM */

var GithubEvent = React.createClass({

  render: function() {
    return (
      <li className="githubEvent">
        Type: {this.props.eventType}, Repo: {this.props.repo}
      </li>
    );
  }

});

var GithubEventList = React.createClass({

  render: function() {

    var eventNodes = this.props.githubEvents.map(function(githubEvent, index) {
      return (
        <GithubEvent eventType={githubEvent.eventType} repo={githubEvent.repo} key={index} />
      );
    });

    return (
      <ul className="githubEventList">
       {eventNodes}
      </ul>
      );
  }

});

var ready = function () {
  var fakeEvents = [
    { eventType:"IssueEvent", repo:"gvents" },
    { eventType:"CreateEvent", repo:"rulethejungle" }
  ];

  React.renderComponent(
    <GithubEventList githubEvents={fakeEvents} />,
    document.getElementById('github-events')
  );
};

$(document).ready(ready);