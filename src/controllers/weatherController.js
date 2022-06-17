let axios = require("axios")


let getWeatherOfLondon = async function (req, res) {
let key = req.headers.weatherKey
console.log(key)
    try {
        let options = {
            method: 'get',
            url: 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=${key}'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getWeatherOfLondon = getWeatherOfLondon