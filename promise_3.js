// Set API endpoint and token
const apiEndpoint = 'https://api.github.com';
const token = 'YOUR_GITHUB_TOKEN_HERE';

// Create a promise that fetches user data
function fetchUserData(username) {
  return new Promise((resolve, reject) => {
    const url = `${apiEndpoint}/users/${username}`;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Create a promise that fetches user repositories
function fetchUserRepositories(username) {
  return new Promise((resolve, reject) => {
    const url = `${apiEndpoint}/users/${username}/repos`;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Create a promise that fetches repository details
function fetchRepositoryDetails(repoOwner, repoName) {
  return new Promise((resolve, reject) => {
    const url = `${apiEndpoint}/repos/${repoOwner}/${repoName}`;
    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    };

    fetch(url, { headers })
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Chain the promises together
fetchUserData('octocat')
  .then(userData => {
    console.log(`User data: ${JSON.stringify(userData)}`);
    return fetchUserRepositories(userData.login);
  })
  .then(repos => {
    console.log(`Repositories: ${JSON.stringify(repos)}`);
    const repo = repos[0];
    return fetchRepositoryDetails(repo.owner.login, repo.name);
  })
  .then(repoDetails => {
    console.log(`Repository details: ${JSON.stringify(repoDetails)}`);
  })
  .catch(error => {
    console.error(`Error: ${error}`);
  });
