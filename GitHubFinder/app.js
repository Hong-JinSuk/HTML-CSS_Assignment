// operate [github.js, ui.js]

const github = new Github();
const ui = new UI();

const user = document.getElementById("User");

user.addEventListener("keydown", (getName) => {
  // input에서 userName을 받아옴
  const userName = getName.target.value;

  // 받아온 유저 네임을 github API를 통해서 주소를 받아옴
  github.getUser(userName).then((data) => {
    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
  });
});
