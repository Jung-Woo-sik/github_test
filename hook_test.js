const Octokit = require('@octokit/rest')
const octokit = new Octokit ()
const clientWithAuth = new Octokit({
  auth: '88b4f2207b11b1a7c08e7ac9f83037fd9b797ca9'
})

octokit.hook.before('request', async (options) => {
  validate(options)
})
octokit.hook.after('request', async (response, options) => {
  console.log(`${options.method} ${options.url}: ${response.status}`)
})
octokit.hook.error('request', async (error, options) => {
  if (error.status === 304) {
    return findInCache(error.headers.etag)
  }

  throw error
})
octokit.hook.wrap('request', async (request, options) => {
  // add logic before, after, catch errors or replace the request altogether
  return request(options)
})

