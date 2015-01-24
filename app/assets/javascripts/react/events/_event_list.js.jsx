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
