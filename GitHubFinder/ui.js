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

    // showProfile
    this.profile.innerHTML = ``;
  }

  showRepos(repos) {
    if (repos.message === "Not Found") {
      this.showAlert();
      return;
    }

    // repeat showRepos
    let displayRepo = "";
    repos.froEach(function (repo) {
      displayRepo += ``;
    });

    // display repos
    document.getElementById("repos").innerHTML = displayRepo;
  }

  showAlert() {}
}
