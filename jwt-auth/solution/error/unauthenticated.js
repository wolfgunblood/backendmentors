const CustomAPIError = require('./error')

class UnauthenticatedError extends CustomAPIError {

    constructor(message){
        super(message, 403);  // 403 Forbidden status

    }
}

module.exports = UnauthenticatedError