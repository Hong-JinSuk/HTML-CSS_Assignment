// display data

class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }

  showProfile(user) {
    if (user.message === "Not Found") {
      this.showAlert();
      return;
    }
    console.log(user);

    // showProfile
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
            <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-success">Followers: ${user.followers}</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
      <br>
      <br>
      <h3 class = "page-heading mb-3">contributions for a year</h3>
      <img src="https://ghchart.rshah.org/${user.login}"/>
      <br><br><br>
      <h3 class="page-heading mb-3">Latest Repos</h3>
      <div id="repos"></div>
    `;
  }

  showRepos(repos) {
    if (repos.message === "Not Found") {
      this.showAlert();
      return;
    }

    // repeat showRepos
    let displayRepo = "";
    repos.forEach(function (repo) {
      displayRepo += `
      <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
            <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
            <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-success">Forks: ${repo.forms_count}</span>
            </div>
          </div>
        </div>
      `;
    });

    // display repos
    document.getElementById("repos").innerHTML = displayRepo;
  }

  showAlert() {}
}
