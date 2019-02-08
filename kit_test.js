const Octokit = require('@octokit/rest')
const octokit = new Octokit ({
 auth: '4884e7adb3043523dec296c74fbc3aaa58895ac6'
})
octokit.repos.listForOrg({
  org: 'octokit',
  type: 'public'
}).then(({ data, status, headers }) => {
  // handle data
})
var owner = 'Jung-Woo-sik';
var repo = 'mailprograming_problem';
octokit.activity.checkStarringRepo(owner, repo).then(result => {})

