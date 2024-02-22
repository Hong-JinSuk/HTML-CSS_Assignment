// get user data
class Github {
  constructor() {
    // 임시로 제 깃허브 client id 와 secret를 넣어놨습니다.
    this.client_id = "1182b6d2256d1ff3aeae"; // personal key
    this.client_secret = "2836a4e66c069bcaa72b1eb0c691404169d748c6"; // personal key
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
