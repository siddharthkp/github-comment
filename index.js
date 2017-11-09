const axios = require('axios')

const comment = (token, repo, issueId, body) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: `https://api.github.com/repos/${repo}/issues/${issueId}/comments`,
      responseType: 'json',
      data: { body },
      headers: { Authorization: `token ${token}` }
    })
      .then(({ status, data }) => resolve({ status, data }))
      .catch(({ response = { status: 500 } }) =>
        reject({
          status: response.status,
          error: response.data
        })
      )
  })
}

module.exports = comment
