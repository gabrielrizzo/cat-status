const axios = require('axios')

const animalStatus = () => {
    return {
        catStatus: async function (status) {
            try {
                const response = await axios.get(`https://http.cat/${status}.jpg`)
                return response
            } catch (e) {
                return {
                    status: e.status,
                    error: e
                }
            }
        }
    }
}

export default {
    animalStatus
}