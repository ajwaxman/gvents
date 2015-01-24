var ready = function () {
  var githubUsername = $("label[name='github-username']").attr('id');
  var githubUrl      = 'https://api.github.com/users/' + githubUsername + '/events';

  if (githubUsername) {
    React.render(
      <GithubEventListBox url={githubUrl} />,
      document.getElementById('github-events')
    );
  }
};

$(document).ready(ready);
