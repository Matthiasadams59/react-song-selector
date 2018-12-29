import Axios from 'axios'

const song_search_helper = async (filterText, callback) => {
    let result

    try {
        const axiosFiltered = await Axios.get("http://localhost:8081/"+filterText)
        result = axiosFiltered.data ? axiosFiltered.data : []
    } catch (error) {
        console.log(error)
        result = []
    }

    callback(result)
}

export default song_search_helper