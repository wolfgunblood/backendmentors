const CustomAPIError = require('./error')

class UnauthenticatedError extends CustomAPIError {

    constructor(message){
        super(message)
        this.statusCode = 403
    }
}

module.exports = UnauthenticatedError