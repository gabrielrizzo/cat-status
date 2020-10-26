const { serviceDownloader } = require('./axios')
// const fs = require('fs')

async function catStatus (status) {
    const catDownload = serviceDownloader('https://http.cat')
    try {
        const response = await catDownload.get(`/${status}.jpg`)
        // console.log(response.data)
        // fs.writeFileSync('./catpicture.jpg', response.data)
        return {
            image: response.data,
            mimeType: 'jpg'
        }
    } catch (e) {
        return {
            status: e.status,
            error: e
        }
    }
}

module.exports = {
    catStatus
}

catStatus('404')
