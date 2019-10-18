const { serviceDownloader } = require('./axios')
const fs = require('fs')

const animalStatus = () => {
    const catDownload = serviceDownloader('https://http.cat')
    return {
        catStatus: async function (status) {
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
    }
}

module.exports = {
    animalStatus
}

const foo = animalStatus().catStatus('500').then((response) => console.log(response))
console.log(foo)