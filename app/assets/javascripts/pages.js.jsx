/** @jsx React.DOM */

var GithubEvent = React.createClass({

  render: function() {
    return (
      <div>
        Hello, World
      </div>
    );
  }

});

var ready = function () {
  React.renderComponent(
    <GithubEvent />,
    document.getElementById('events')
  );
};

$(document).ready(ready);