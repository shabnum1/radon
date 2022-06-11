const NewpublisherModel =require("../models/NewpublisherModel")


//prblm 2
const createPublisher=async function(req,res)
{
      let data=req.body
    let publisherCreated = await NewpublisherModel.create(data)
    res.send({data: publisherCreated})

}

module.exports.createPublisher=createPublisher