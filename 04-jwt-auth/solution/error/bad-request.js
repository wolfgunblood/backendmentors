const CustomAPIError = require('./error')

class BadRequestError extends CustomAPIError {
    constructor(message){
        super(message,400)
    }
}

module.exports = BadRequestError