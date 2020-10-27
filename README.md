# cat-status

Use this service to get a cool cat with status code!
To use it, clone and do a `npm link` in directory!


## Example
const { catStatus } = require('cat-status')

const photo = catStatus(requestHttpStatusCode)
// returns { image: ArrayBuffer, mimeType: 'jpg' }
