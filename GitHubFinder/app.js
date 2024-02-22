// operate [github.js, ui.js]

const github = new Github();
const ui = new UI();

const user = document.getElementById("searchUser");

user.addEventListener("keyup", (init) => {
  console.log("isOperating");
  if (init.key === "Enter") {
    console.log(`init ${init}`);

    // input에서 userName을 받아옴
    const userName = init.target.value;

    // 받아온 유저 네임을 github API를 통해서 주소를 받아옴
    github.getUser(userName).then((userData) => {
      ui.showProfile(userData.profile);
      ui.showRepos(userData.repos);
    });
  }
});
