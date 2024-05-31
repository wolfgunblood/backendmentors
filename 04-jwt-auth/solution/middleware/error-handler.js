const CustomAPIError = require('../error/error')
const errorHandleMiddleware = (err,req,res,next) => {

    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({msg : err.message})
    }
    return res.status(500).send("something went wrong")
}

module.exports = errorHandleMiddleware