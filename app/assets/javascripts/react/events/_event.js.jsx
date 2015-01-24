var GithubEvent = React.createClass({
  render: function() {
    return (
      <li className="githubEvent">
        Type: {this.props.eventType}, Repo: {this.props.repo}
      </li>
    );
  }
});
