const axios = require('axios')

const serviceDownloader = host =>
    axios.create({
        baseURL: host,
        timeout: 3000000,
        responseType: 'arraybuffer'
    })

module.exports = {
    serviceDownloader
}