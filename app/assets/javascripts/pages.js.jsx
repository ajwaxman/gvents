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
        <GithubEvent eventType={githubEvent.type} repo={githubEvent.repo.name} key={index} />
      );
    });

    return (
      <ul className="githubEventList">
       {eventNodes}
      </ul>
      );
  }

});

var GithubEventListBox = React.createClass({
  getInitialState: function () {
    return {githubEvents: []};
  },
  componentDidMount: function () {
    this.loadEventsFromGitHub();
  },

  loadEventsFromGitHub: function () {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      success: function (githubEvents) {
        this.setState({githubEvents: githubEvents});
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  render: function () {
    return (
      <div className="githubEventListBox">
        <h1>Github Events</h1>
        <GithubEventList githubEvents={this.state.githubEvents} />
      </div>
      );
  }
});

var ready = function () {
  var githubUsername = $("label[name='github-username']").attr('id');
  var githubUrl      = 'https://api.github.com/users/' + githubUsername + '/events';

  React.render(
    <GithubEventListBox url={githubUrl} />,
    document.getElementById('github-events')
  );
};

$(document).ready(ready);
