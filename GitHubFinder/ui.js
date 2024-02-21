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
  }

  showRepos(repos) {
    if (repos.message === "Not Found") {
      this.showAlert();
      return;
    }
    //showRepos
  }

  showAlert() {}
}
