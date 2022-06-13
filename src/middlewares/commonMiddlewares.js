const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}



const timeUrlmiddleWare = async function (req, res, next) {
    let timeStamp = new Date();
    let date = timeStamp.getFullYear() + "_" + (timeStamp.getMonth() + 1) + "_" +

        timeStamp.getDate() + " " + timeStamp.getHours() + ":" + timeStamp.getMinutes() + ":" + timeStamp.getSeconds();

    const result = date + "," + req.ip + "," + req.path;
    console.log(result);
    next();

};



module.exports.timeUrlmiddleWare=timeUrlmiddleWare
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4