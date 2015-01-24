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
