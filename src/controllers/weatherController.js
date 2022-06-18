
let axios = require("axios");

let getWeatherOfLondon = async function(req,res){
    try{
        let loc = req.query.q
        let apiId = req.query.appid
       
            console.log(loc)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiId}`
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({msg: data, status: true})
    }
  
    catch (err){
        res.status(500).send({msg: err.message})
    }
}



//04c80d65bcb3fb704472a6674764a227
let getTempOfCity = async function (req, res) {
let key=req.headers.weatherKey
    try {

        let options = {
            method: 'get',
            url: `http://api.openweathermap.org/data/2.5/weather?q=london&appid=04c80d65bcb3fb704472a6674764a227`
        }
        let result = await axios(options);
        let data = result.data.main.temp
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



const getTemperature = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arr = [];

        for (let i = 0; i < cities.length; i++) {
            let obj = { city: cities[i]}

            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=a2bf997473c65ee1a8bfe55f0e2847e9`
            }
            let result = await axios(options);
            
            obj.temp = result.data.main.temp
            arr.push(obj)
        }
        let sortedCity = arr.sort((a, b) => {
            return a.temp - b.temp
        })
        res.status(200).send({ status: true, msg: sortedCity })

    } catch (err) {
        res.status(500).send({ msg: err.message })
    }
}


module.exports.getTemperature = getTemperature 
module.exports.getTempOfCity = getTempOfCity
module.exports.getWeatherOfLondon = getWeatherOfLondon